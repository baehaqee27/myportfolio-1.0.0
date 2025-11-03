// src/app/kontak/page.tsx
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

// SEO untuk halaman kontak
export const metadata: Metadata = {
  title: "Hubungi Saya",
  description: "Kirim pesan atau ajak kolaborasi.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto p-8 py-20 md:py-32">
      <div className="max-w-2xl mx-auto">
        {/* Header Halaman */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hubungi Saya
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Ada pertanyaan, ide proyek, atau cuma mau bilang "uhuy"? Isi form di
            bawah ini.
          </p>
        </header>

        {/* Render Form-nya (Client Component) */}
        <ContactForm />
      </div>
    </main>
  );
}
