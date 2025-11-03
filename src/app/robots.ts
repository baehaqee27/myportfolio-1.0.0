// src/app/robots.ts
import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site'; // <-- Import URL kita

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Berlaku untuk semua 'robot' (Google, Bing, dll)
      allow: '/',     // Boleh 'crawl' semua halaman
      // (Nanti bisa ditambah 'disallow' kalau ada halaman admin)
    },
    sitemap: `${siteUrl}/sitemap.xml`, // <-- Tunjukin lokasi sitemap
  };
}