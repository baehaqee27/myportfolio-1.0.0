import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site'; // <-- Import URL kita

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Berlaku untuk semua 'robot' (Google, Bing, dll)
      allow: '/',     // Boleh 'crawl' semua halaman
      // TAMBAHKAN ATURAN DISALLOW (BEST PRACTICE)
      disallow: ['/_next/', '/_vercel/'], 
    },
    sitemap: `${siteUrl}/sitemap.xml`, // <-- Tunjukin lokasi sitemap
  };
}
