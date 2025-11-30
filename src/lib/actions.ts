// src/lib/actions.ts
"use server"; // <-- WAJIB! Ini adalah Server Action

import { z } from "zod";

// 1. Definisikan skema validasi pakai Zod
const contactSchema = z.object({
  nama: z.string().min(3, { message: "Nama harus diisi (min. 3 karakter)." }),
  email: z.string().email({ message: "Email tidak valid." }),
  pesan: z
    .string()
    .min(10, { message: "Pesan harus diisi (min. 10 karakter)." }),
});

// 2. Definisikan tipe 'state' yang akan dikembalikan
export type ContactFormState = {
  message: string;
  errors?: {
    nama?: string[];
    email?: string[];
    pesan?: string[];
  };
};

// 3. Ini adalah FUNGSI ACTION-nya
export async function submitContactForm(
  prevState: ContactFormState, // State sebelumnya
  formData: FormData // Data dari form
): Promise<ContactFormState> {
  // 4. Ubah FormData jadi objek biasa
  const data = Object.fromEntries(formData.entries());

  // 5. Validasi pakai Zod
  const validated = contactSchema.safeParse(data);

  if (!validated.success) {
    // Kalau validasi gagal, kirim balik error-nya
    return {
      message: "Validasi gagal. Mohon cek kembali isian Anda.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // 6. SIMULASI KIRIM EMAIL (Di sini kamu nanti pasang Resend, dll.)
  try {
    console.log("MENGIRIM PESAN ke baehaqee@gmail.com:", validated.data);
    // Simulasikan delay jaringan
    await new Promise((res) => setTimeout(res, 2000));

    // PENTING: Di dunia nyata, di sinilah kamu panggil:
    // await resend.emails.send({ ... });

    console.log("PESAN TERKIRIM");
    return { message: "Sukses! Pesan Anda telah terkirim." };
  } catch (error) {
    return { message: "Error! Gagal mengirim pesan. Coba lagi nanti." };
  }
}
