// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 1. Import 'Variants'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

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

import { BackgroundBeams } from "@/components/ui/background-beams";
import BioWithReadMore from "./BioWithReadMore";

// ... (variants sama) ...

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center text-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10 flex flex-col items-center gap-8 max-w-4xl">
        {/* GAMBAR */}
        <motion.div
          variants={imageFadeInUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150"></div>
          <Avatar className="w-40 h-40 md:w-56 md:h-56 border-2 border-primary/50 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
            <AvatarImage
              src={siteConfig.author.avatar}
              alt={`Foto Profil ${siteConfig.author.name}`}
            />
            <AvatarFallback className="text-4xl bg-black text-primary">
              AK
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* TEKS */}
        <motion.div
          className="flex flex-col gap-6 items-center"
          variants={textFadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Halo, Saya </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                {siteConfig.author.name}
              </span>
            </h1>

            {/* Bio dengan Read More */}
            <BioWithReadMore bio={siteConfig.author.bio} />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-black hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all rounded-full px-8"
            >
              <Link href={siteConfig.navLinks[1].href}>Eksplor Karya</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-8"
            >
              <Link href={siteConfig.navLinks[3].href}>Ayo Collab</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
