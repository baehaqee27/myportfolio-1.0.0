// src/components/ProjectList.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "velite";

// 1. IMPORT Badge
import { Badge } from "@/components/ui/badge";

type ProjectType = (typeof projects)[number];
type ProjectListProps = {
  projects: ProjectType[];
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
            <article className="border rounded-lg p-4 h-full hover:shadow-lg transition-shadow flex flex-col justify-between">
              {/* Bagian Atas (Teks) */}
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.publishedAt}
                </p>
                <p className="mt-3">{project.description}</p>
              </div>

              {/* 3. Bagian Bawah (Tech Stack)
                     Kita tambahin 'mt-4' (margin-top)
              */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
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
