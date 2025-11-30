import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";

// SEO untuk halaman kontak
export const metadata: Metadata = {
  title: "Hubungi Saya",
  description: "Kirim pesan atau ajak kolaborasi.",
};

export default function ContactPage() {
  return (
    <main className="relative w-full py-20 md:py-32 min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10 max-w-2xl">
        {/* Header Halaman */}
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground drop-shadow-2xl">
            Hubungi Saya
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            Ada ide proyek menarik? Mari kita diskusikan.
          </p>
        </header>

        {/* Render Form-nya (Client Component) */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/5 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
