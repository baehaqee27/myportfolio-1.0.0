import { posts } from "../../../.velite"; // <-- PERBAIKAN: Impor dari .velite
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tulisan, tutorial, dan sharing seputar web dev dan teknologi.",
};

export default function BlogPage() {
  // Sortir post biar yang terbaru di atas
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="container mx-auto p-8 py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Blog Saya
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Semua tulisan "uhuy" saya ada di sini.
        </p>
      </header>

      {/* List Postingan */}
      <section className="max-w-2xl mx-auto space-y-8">
        {sortedPosts.map((post) => (
          <Link href={post.url} key={post.url}>
            <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {post.publishedAt}
              </p>
              <p className="mt-3">{post.description}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
