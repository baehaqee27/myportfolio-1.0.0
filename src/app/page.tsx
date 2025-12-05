import { getPosts } from "@/lib/mdx";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Terminal, Cpu } from "lucide-react";
import HomeCodeShowcase from "@/components/HomeCodeShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mattrizz | Creative Web Developer",
  description:
    "Portfolio of Ahmad Rizal Baehaqi (Mattrizz). Specializing in Next.js, React, and modern web design.",
};

export default function HomePage() {
  const posts = getPosts();
  // Ambil 2 postingan terbaru
  const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Framer Motion",
    "Git",
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description:
        "Membangun website yang cepat, responsif, dan SEO-friendly menggunakan teknologi modern.",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "UI/UX Design",
      description:
        "Menciptakan antarmuka yang estetis dan pengalaman pengguna yang intuitif.",
    },
    {
      icon: <Terminal className="w-8 h-8 text-green-500" />,
      title: "Backend & API",
      description:
        "Mengembangkan sistem backend yang tangguh dan API yang scalable.",
    },
  ];

  return (
    <main className="overflow-hidden">
      <HeroSection />

      {/* SKILLS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            <span className="text-primary">Tech Stack</span> Andalan
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-default"
              >
                <span className="font-mono text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Layanan <span className="text-purple-500">Profesional</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODE & QUOTE SHOWCASE */}
      <section className="py-20 relative">
        <div className="container mx-auto p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Quote Side */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Filosofi <span className="text-primary">Coding</span>
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 italic rounded-r-xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
                "Programming isn't about what you know; it's about what you can
                figure out."
                <footer className="text-sm text-primary font-bold mt-4 not-italic">
                  — Chris Pine
                </footer>
              </blockquote>
              <p className="text-muted-foreground">
                Saya percaya bahwa kode yang baik bukan hanya tentang fungsi,
                tapi juga tentang keterbacaan, efisiensi, dan keindahan
                strukturnya.
              </p>
            </div>

            {/* Code Side */}
            <div className="relative group">
              <div className="absolute" />
              <HomeCodeShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* LATEST BLOG POSTS */}
      <section className="py-20 relative">
        <div className="container mx-auto p-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Tulisan <span className="text-green-500">Terbaru</span>
              </h2>
              <p className="text-muted-foreground">
                Berbagi wawasan seputar teknologi.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex group">
              <Link href="/blog">
                Lihat Semua{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <article className="glass-panel h-full p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-4">
                    <time className="text-sm font-mono text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog">Lihat Semua Tulisan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto p-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Siap Mewujudkan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Ide Liar Kamu?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Jangan biarkan ide cemerlangmu menguap begitu saja. Mari kita
            kolaborasi dan buat sesuatu yang luar biasa.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-8 text-lg bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all"
          >
            <Link href="/contact">
              Mulai Kolaborasi <Cpu className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
