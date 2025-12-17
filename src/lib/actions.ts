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

  // 6. KIRIM EMAIL via Resend
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    // Import EmailTemplate dynamically to avoid issues if it was causing the Promise error
    // But calling it as a function is correct for React.FC
    const { EmailTemplate } = await import("@/components/EmailTemplate");

    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@mattrizz.web.id>",
      to: ["baehaqee@gmail.com"],
      subject: `Pesan Baru dari ${validated.data.nama}`,
      // Use the component as a function call, which returns ReactNode.
      // If TS complains about Promise, it might be due to the dynamic import context or Next.js types.
      // Let's try to cast it or just ensure it's treated as a synchronous call.
      react: EmailTemplate({
        nama: validated.data.nama,
        email: validated.data.email,
        pesan: validated.data.pesan,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { message: "Gagal mengirim pesan. Silakan coba lagi." };
    }

    return { message: "Sukses! Pesan Anda telah terkirim." };
  } catch (error: any) {
    console.error("Server Error Full:", error);
    console.log(
      "API Key Status:",
      process.env.RESEND_API_KEY ? "Present" : "Missing"
    );

    // Return the actual error message for debugging
    return {
      message: `Error: ${error.message || "Unknown error"}. (API Key: ${process.env.RESEND_API_KEY ? "Loaded" : "Missing"})`,
    };
  }
}
