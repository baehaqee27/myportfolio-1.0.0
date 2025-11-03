import { MetadataRoute } from 'next';
import { projects, type Post, posts } from '../../.velite'; // <-- 1. Impor 'posts' dan 'Post'
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Buat URL statis (Home, Kontak)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily', // <-- 2. Diubah dari 'yearly' menjadi 'daily'
      priority: 1,
    },
    {
      url: `${siteUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // <-- 3. Diubah dari 'monthly' menjadi 'yearly'
      priority: 0.8,
    },
  ];

  // 2. Buat URL dinamis dari Proyek
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}${project.url}`,
    lastModified: new Date(project.date),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. BUAT URL DINAMIS DARI BLOG (INI YANG BARU)
  const postRoutes: MetadataRoute.Sitemap = posts.map((post: Post) => ({
    url: `${siteUrl}${post.url}`, // Asumsi 'post.url' ada di Velite (/blog/slug)
    lastModified: new Date(post.date),
    changeFrequency: 'monthly', // Blog biasanya diupdate bulanan
    priority: 0.7,
  }));

  // 4. Gabungin semuanya
  return [...staticRoutes, ...projectRoutes, ...postRoutes]; // <-- 4. Tambahkan postRoutes
}

