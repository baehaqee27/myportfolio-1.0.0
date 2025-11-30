import { getPosts } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tulisan, tutorial, dan sharing seputar web dev dan teknologi.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  // Sortir post biar yang terbaru di atas
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="relative w-full py-20 md:py-32 min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundBeams />

      <div className="container mx-auto p-8 relative z-10 max-w-4xl">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground drop-shadow-2xl">
            Blog Saya
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Semua tulisan seputar teknologi dan coding ada di sini.
          </p>
        </header>

        {/* List Postingan */}
        <section className="space-y-6">
          {sortedPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block group"
            >
              <article className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] border border-white/5 group-hover:border-primary/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {post.date}
                  </time>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Baca Selengkapnya <span className="ml-2">→</span>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
