// src/app/projects/[slug]/page.tsx

import { projects } from "velite";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";

// 1. IMPORT Badge
import { Badge } from "@/components/ui/badge";

// ... (Interface, generateMetadata, generateStaticParams... udah bener) ...
// ...

export default async function ProjectPage({ params }: ProjectPageProps) {
  // ... (logic 'find project'-nya udah bener) ...
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.publishedAt}</p>

        {/* 2. TAMBAHKAN TECH STACK BADGE DI SINI */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={project.content} components={mdxComponents} />
      </div>
    </main>
  );
}
