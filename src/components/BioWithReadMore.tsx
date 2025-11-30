"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BioWithReadMoreProps {
  bio: string;
}

export default function BioWithReadMore({ bio }: BioWithReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Panjang karakter maksimal sebelum dipotong
  const maxLength = 150;

  // Jika bio pendek, langsung tampilkan semua tanpa tombol
  if (bio.length <= maxLength) {
    return (
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        {bio}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-muted-foreground text-center"
        >
          <p>{isExpanded ? bio : `${bio.substring(0, maxLength)}...`}</p>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors group"
      >
        {isExpanded ? (
          <>
            Lebih Sedikit{" "}
            <ChevronUp className="ml-1 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </>
        ) : (
          <>
            Selengkapnya{" "}
            <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </>
        )}
      </Button>
    </div>
  );
}
