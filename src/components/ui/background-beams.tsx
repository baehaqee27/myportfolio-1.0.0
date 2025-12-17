"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 w-full pointer-events-none">
      {/* Static Glows */}
      <div className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[150px] animate-pulse delay-1000" />

      {/* Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"></div>

      {/* Moving Beams - Softer & Wider */}
      <motion.div
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-transparent via-primary/5 to-transparent rotate-[30deg] blur-xl md:blur-3xl"
        animate={{
          x: ["-50%", "0%"],
          y: ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "mirror",
        }}
      />

      {/* Bottom Fade Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
};
