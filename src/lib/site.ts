// src/lib/site.ts

// GANTI INI dengan URL aslimu nanti pas deploy
export const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://mattrizz-portfolio.vercel.app' // <-- URL PRODUKSI
  : 'http://localhost:3000';         // <-- URL DEVELOPMENT

export const siteConfig = {
  name: "PortofolioKu (Mattrizz)",
  url: siteUrl,
  description: "Portofolio web Ahmad Rizal Baehaqi (Mattrizz), seorang Web Developer.",
};