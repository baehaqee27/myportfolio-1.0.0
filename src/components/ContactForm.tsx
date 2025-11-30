// src/components/ContactForm.tsx
"use client"; // <-- WAJIB!

import { useFormStatus } from "react-dom";
import { useActionState } from "react"; // <-- Impor yang baru dari 'react'
import { submitContactForm } from "@/lib/actions";
import type { ContactFormState } from "@/lib/actions";

// Import komponen shadcn
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// 1. Bikin komponen Tombol Submit terpisah
//    Ini "best practice" biar bisa pakai hook 'useFormStatus'
function SubmitButton() {
  const { pending } = useFormStatus(); // 'pending' akan true pas loading

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full bg-primary text-black hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all font-bold"
    >
      {pending ? "Mengirim..." : "Kirim Pesan"}
    </Button>
  );
}

// 2. Ini Komponen Form utamanya
export default function ContactForm() {
  // 3. Setup 'state' untuk form-nya
  const initialState: ContactFormState = { message: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* NAMA */}
      <div className="space-y-2">
        <Label htmlFor="nama" className="text-foreground font-mono">
          Nama Lengkap
        </Label>
        <Input
          type="text"
          id="nama"
          name="nama" // <-- 'name' harus sama dengan skema Zod
          required
          className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          placeholder="Masukkan nama Anda"
        />
        {/* Tampilkan error validasi */}
        {state.errors?.nama && (
          <p className="text-sm text-destructive">{state.errors.nama[0]}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-mono">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          placeholder="email@contoh.com"
        />
        {state.errors?.email && (
          <p className="text-sm text-destructive">{state.errors.email[0]}</p>
        )}
      </div>

      {/* PESAN */}
      <div className="space-y-2">
        <Label htmlFor="pesan" className="text-foreground font-mono">
          Pesan Anda
        </Label>
        <Textarea
          id="pesan"
          name="pesan"
          rows={6}
          required
          className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
          placeholder="Tulis pesan Anda di sini..."
        />
        {state.errors?.pesan && (
          <p className="text-sm text-destructive">{state.errors.pesan[0]}</p>
        )}
      </div>

      {/* TOMBOL SUBMIT */}
      <SubmitButton />

      {/* Tampilkan Pesan Sukses/Gagal */}
      {state.message && (
        <p
          className={`text-sm font-mono p-4 rounded-lg ${
            state.errors
              ? "text-destructive bg-destructive/10 border border-destructive/20"
              : "text-primary bg-primary/10 border border-primary/20"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
