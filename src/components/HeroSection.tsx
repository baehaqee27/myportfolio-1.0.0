// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 1. Import 'Variants'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// 2. Definisikan variant untuk GAMBAR (tanpa delay)
const imageFadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// 3. Definisikan variant untuk TEKS (DENGAN delay)
const textFadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 }, // <-- Delay pindah ke sini
  },
};

export default function HeroSection() {
  return (
    <section className="container mx-auto p-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* GAMBAR */}
        <motion.div
          className="flex justify-center items-center md:order-2"
          variants={imageFadeInUp} // <-- 4. Pakai variant GAMBAR
          initial="hidden"
          animate="visible"
        >
          <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary">
            <AvatarImage src="/images/profile.png" alt="Foto Profil Mattrizz" />
            <AvatarFallback className="text-6xl">AK</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* TEKS */}
        <motion.div
          className="flex flex-col gap-4 md:order-1 
                     text-center md:text-left"
          variants={textFadeInUp} // <-- 5. Pakai variant TEKS
          initial="hidden"
          animate="visible"
          // <-- 6. 'transition' prop HILANG dari sini
        >
          {/* ... sisa kode h1, p, button ... */}

          {/* SARAN NAMA: */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Halo, Saya Mattrizz
          </h1>
          <p className="text-lg text-muted-foreground">
            Saya (Ahmad Rizal Baehaqi) seorang Web Developer yang hobi bikin
            aplikasi web "cachy" dan "uhuy" pakai Next.js.
          </p>
          <div
            className="flex gap-4 mt-4 
                          justify-center md:justify-start"
          >
            <Button asChild size="lg">
              <Link href="#projects">Lihat Proyek</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kontak">Hubungi Saya</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
