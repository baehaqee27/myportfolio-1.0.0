export const siteConfig = {
  name: "Mattrizz",
  url: "https://mattrizz-portfolio.vercel.app",
  ogImage: "https://mattrizz-portfolio.vercel.app/og.jpg",
  description:
    "Portofolio resmi Ahmad Rizal Baehaqi (Mattrizz). Web Developer yang berdedikasi menciptakan pengalaman digital yang seamless, aesthetic, dan performan menggunakan teknologi modern seperti Next.js.",
  links: {
    twitter: "https://twitter.com/mattrizz",
    github: "https://github.com/mattrizz",
    linkedin: "https://linkedin.com/in/mattrizz",
    instagram: "https://instagram.com/mattrizz",
    email: "mailto:baehaqee@gmail.com",
  },
  author: {
    name: "Ahmad Rizal Baehaqi",
    handle: "@mattrizz",
    role: "Web Developer",
    bio: "Halo! Saya Ahmad Rizal Baehaqi, seorang Web Developer yang memiliki ketertarikan mendalam pada dunia digital. Saya berdedikasi penuh untuk mengubah setiap ide kreatif menjadi sebuah website yang tidak hanya memiliki tampilan visual yang memukau, tetapi juga performa yang cepat dan responsif. Saya selalu mengikuti perkembangan teknologi terbaru untuk memastikan hasil karya saya tetap relevan, modern, dan tentunya memberikan pengalaman terbaik bagi setiap penggunanya.",
    avatar: "/images/profile.png",
  },
  keywords: [
    "rzlbaihaqi",
    "baehaqee",
    "rizal baihaqi",
    "ahmad rizal baehaqi",
    "mattrizz",
    "Web Developer Indonesia",
    "Next.js Developer",
    "Frontend Engineer",
    "React Developer",
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
