// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { projects } from 'velite'; 
import { siteUrl } from '@/lib/site'; 

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Buat URL statis (Home, Kontak)
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Buat URL dinamis dari Velite
  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}${project.url}`, // project.url udah bener ('/projects/slug')
    lastModified: new Date(project.date), // Pakai tanggal proyek
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Gabungin semuanya
  return [...staticRoutes, ...projectRoutes];
}