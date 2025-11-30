// src/components/ProjectList.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/mdx";

// 1. IMPORT Badge
import { Badge } from "@/components/ui/badge";

type ProjectListProps = {
  projects: Project[];
};

// ... (variants animasinya biarin aja, udah bener) ...
const containerVariants = {
  /* ... */
};
const itemVariants = {
  /* ... */
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <motion.section
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div key={project.url} variants={itemVariants}>
          <Link href={project.url}>
            {/* 2. Ubah <article> biar 'flex flex-col'
                   Ini penting biar stack-nya bisa nempel di bawah
            */}
            <article className="glass-panel rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col justify-between group">
              {/* Bagian Atas (Teks) */}
              <div>
                <h2 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  {project.date}
                </p>
                <p className="mt-4 text-muted-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 3. Bagian Bawah (Tech Stack) */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
