// src/app/page.tsx

import { projects } from "velite";

// 1. Import komponen-komponen
import HeroSection from "@/components/HeroSection";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  // Tugas Server Component: Siapin data
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      {/* 2. Panggil Komponen Hero */}
      <HeroSection />

      {/* 3. Panggil Komponen List Proyek (udah ada animasinya) */}
      <section id="projects" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Proyek Terbaru</h2>
        <ProjectList projects={sortedProjects} />
      </section>
    </main>
  );
}
