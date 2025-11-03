import { MetadataRoute } from 'next';
// IMPOR DARI FOLDER '.velite' (HASIL BUILD)
// 1. Impor tipe 'Project' dari Velite (DENGAN PATH YANG BENAR)
import { projects, type Project } from '../../.velite'; 
import { siteUrl } from '@/lib/site'; 

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Buat URL statis (Home, Kontak)
  // TAMBAHKAN TIPE EKSPLISIT DI SINI
  const staticRoutes: MetadataRoute.Sitemap = [
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
  // TAMBAHKAN TIPE EKSPLISIT DI SINI
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project: Project) => ({
    url: `${siteUrl}${project.url}`, // project.url udah bener ('/projects/slug')
    lastModified: new Date(project.date), // Pakai tanggal proyek
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Gabungin semuanya
  return [...staticRoutes, ...projectRoutes];
}

