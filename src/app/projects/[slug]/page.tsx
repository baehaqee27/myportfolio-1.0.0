import { getProjectBySlug, getProjects } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";
import { mdxOptions } from "@/lib/mdx-options";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative w-full py-20 md:py-32 min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10 max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Proyek
        </Link>

        <article className="glass-panel rounded-2xl p-8 md:p-12 border border-white/5 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
          <header className="mb-8 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <time className="text-muted-foreground font-mono text-sm">
                {project.date}
              </time>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          {project.demo && (
            <div className="mb-10">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl prose-p:leading-relaxed prose-li:marker:text-primary">
            <MDXRemote
              source={project.content}
              components={mdxComponents}
              options={{ mdxOptions }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}
