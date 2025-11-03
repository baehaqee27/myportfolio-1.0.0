// src/app/blog/[slug]/page.tsx

import { posts } from "velite"; // <-- GANTI JADI 'posts'
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";

interface PostPageProps {
  params: { slug: string };
}

// generateMetadata (Ganti 'projects' jadi 'posts')
export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug); // <-- GANTI
  if (!post) {
    return { title: "Postingan Tidak Ditemukan" };
  }
  return { title: post.title, description: post.description };
}

// generateStaticParams (Ganti 'projects' jadi 'posts')
export async function generateStaticParams() {
  return posts.map((post) => ({
    // <-- GANTI
    slug: post.slug,
  }));
}

// Komponen Halaman (Ganti 'projects' jadi 'posts')
export default async function ProjectPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = posts.find((p) => p.slug === slug); // <-- GANTI

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 max-w-3xl py-20">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-muted-foreground mt-2">{post.publishedAt}</p>
        {/* Kita nggak perlu badge stack di sini */}
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </main>
  );
}
