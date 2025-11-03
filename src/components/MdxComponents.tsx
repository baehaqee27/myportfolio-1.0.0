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
  img: MdxImg, // <-- KITA OVERRIDE 'img' (lowercase)
};
