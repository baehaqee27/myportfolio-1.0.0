// src/components/MdxComponents.tsx
import Image from "next/image";

// Ini adalah komponen pengganti tag <img> standar
const MdxImg = (props: any) => {
  // Kita pakai wrapper + 'fill' biar responsif & "cachy"
  return (
    <span className="block relative my-6 aspect-video overflow-hidden rounded-lg border">
      <Image
        src={props.src}
        alt={props.alt}
        fill // 'fill' akan ngisi <span>
        className="object-cover"
      />
    </span>
  );
};

// Kumpulkan semua komponen kustom di sini
export const mdxComponents = {
  img: MdxImg,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 italic rounded-r-lg"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="overflow-auto p-4 rounded-lg border border-white/10 my-6 bg-[#282a36] shadow-lg"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="font-mono text-sm bg-primary/10 text-primary px-1 py-0.5 rounded"
      {...props}
    />
  ),
};
