import { getProjects } from "@/lib/mdx";
import ProjectList from "@/components/ProjectList";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Kumpulan karya dan eksperimen coding saya.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="relative w-full py-20 md:py-32 min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground drop-shadow-2xl">
            Karya Pilihan
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Eksplorasi ide yang menjadi realitas digital.
          </p>
        </header>

        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
