import { codeToHtml } from "shiki";

export default async function HomeCodeShowcase() {
  const code = `const developer = {
  name: "Mattrizz",
  role: "Web Developer",
  skills: ["Next.js", "React", "TypeScript"],
  status: "Ready to Collaborate 🚀"
};`;

  const html = await codeToHtml(code, {
    lang: "typescript",
    theme: "dracula",
  });

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-xl overflow-hidden bg-[#282a36] shadow-[0_0_50px_rgba(0,240,255,0.1)] border border-white/10">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-auto text-xs text-muted-foreground font-mono">
            developer.ts
          </div>
        </div>

        {/* Code Content */}
        <div
          className="p-6 text-sm font-mono overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
