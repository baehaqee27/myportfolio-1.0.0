// velite.config.ts

// --- PERBAIKAN 1: Ganti import ke 'velite/schema' ---
// Ini akan memperbaiki error TypeScript "has no exported member"
// @ts-ignore
import { defineConfig, defineCollection, s } from 'velite'
import { format } from 'date-fns'

// 1. Definisikan skema 'projects'
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
    // --- PERBAIKAN 2: Tambahkan ': any' pada 'data' ---
    .transform((data: any) => { // Ini untuk error 'implicit any type'
      const realSlug = data.slug.split('/').pop()
      return {
        ...data,
        slug: realSlug,
        url: `/projects/${realSlug}`,
        publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
      }
    }),
})

// 2. Definisikan skema 'posts'
const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
      title: s.string(),
      date: s.coerce.date(),
      description: s.string(),
      slug: s.path(),
      content: s.raw()
    })
    // --- PERBAIKAN 2: Tambahkan ': any' pada 'data' ---
    .transform((data: any) => { // Ini untuk error 'implicit any type'
      const realSlug = data.slug.split('/').pop()
      return {
        ...data,
        slug: realSlug,
        url: `/blog/${realSlug}`,
        publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
      }
    }),
})

// 3. Daftarkan 'collections' dan tambahkan 'esbuildOptions'
export default defineConfig({
  root: 'content',
  collections: { projects, posts },

  // --- PERBAIKAN 3: Perbarui esbuildOptions (SANGAT PENTING!) ---
  esbuildOptions: (options: any) => { // Tambahkan ': any' di sini
    // Kita exclude 'velite' (untuk error log 1, 3, 4)
    // DAN 'velite/schema' (untuk error log 2)
    options.external = [...(options.external ?? []), 'velite', 'velite/schema']
    return options
  },
})

