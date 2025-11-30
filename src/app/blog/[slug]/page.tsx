// src/app/blog/[slug]/page.tsx

import { getPostBySlug, getPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";
import { mdxOptions } from "@/lib/mdx-options";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PostPageProps {
  params: { slug: string };
}

// generateMetadata (Ganti 'projects' jadi 'posts')
export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug); // <-- GANTI
  if (!post) {
    return { title: "Postingan Tidak Ditemukan" };
  }
  return { title: post.title, description: post.description };
}

// generateStaticParams (Ganti 'projects' jadi 'posts')
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    // <-- GANTI
    slug: post.slug,
  }));
}

// Komponen Halaman (Ganti 'projects' jadi 'posts')
export default async function ProjectPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug); // <-- GANTI

  if (!post) {
    notFound();
  }

  return (
    <main className="relative w-full py-20 md:py-32 min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Blog
        </Link>

        <article className="glass-panel rounded-2xl p-8 md:p-12 border border-white/5 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
          <header className="mb-8 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {post.title}
            </h1>
            <time className="text-primary font-mono bg-primary/10 px-3 py-1 rounded-full text-sm">
              {post.date}
            </time>
          </header>

          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}
