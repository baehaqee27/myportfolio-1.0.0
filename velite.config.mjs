// velite.config.mjs
import { defineConfig, defineCollection, s } from 'velite'
import { format } from 'date-fns'

// 1. Definisikan skema 'projects' (INI UDAH ADA, BIARIN AJA)
const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s.object({
      title: s.string(),
      date: s.coerce.date(),
      description: s.string(),
      thumbnail: s.string(),
      stack: s.array(s.string()),
      slug: s.path(),
      content: s.raw()
    })
    .transform((data) => {
      const realSlug = data.slug.split('/').pop()
      return {
        ...data,
        slug: realSlug,
        url: `/projects/${realSlug}`,
        publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
      }
    }),
})

// 2. TAMBAHKAN SKEMA BARU: 'posts' (mirip banget!)
const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx', // <-- Lokasi foldernya
  schema: s.object({
      title: s.string(),
      date: s.coerce.date(),
      description: s.string(), // Deskripsi singkat/excerpt
      slug: s.path(),
      content: s.raw()
    })
    .transform((data) => {
      const realSlug = data.slug.split('/').pop()
      return {
        ...data,
        slug: realSlug,
        url: `/blog/${realSlug}`, // <-- URL-nya /blog/
        publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
      }
    }),
})

// 3. Daftarkan 'posts' di 'collections'
export default defineConfig({
  root: 'content',
  collections: { projects, posts }, // <-- TAMBAHKAN 'posts' DI SINI
})