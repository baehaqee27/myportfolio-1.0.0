// velite.config.ts

// PERBAIKAN: Impor 'defineConfig' dan 's'. (Tidak ada 'defineCollection')
import { defineConfig, s } from 'velite'
import { format } from 'date-fns'

// PERBAIKAN: Definisikan koleksi LANGSUNG di dalam 'defineConfig'
export default defineConfig({
  root: 'content',
  collections: {
    // Ini adalah koleksi 'projects' kamu
    projects: {
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
        .transform((data: any) => { // Beri tipe 'any' agar TypeScript tidak error
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/projects/${realSlug}`,
            publishedAt: format(new Date(data.date), 'MMMM dd, yyyS'),
          }
        }),
    },
    // Ini adalah koleksi 'posts' kamu
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s.object({
          title: s.string(),
          date: s.coerce.date(),
          description: s.string(),
          slug: s.path(),
          content: s.raw()
        })
        .transform((data: any) => { // Beri tipe 'any' agar TypeScript tidak error
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/blog/${realSlug}`,
            publishedAt: format(new Date(data.date), 'MMMM dd, yyyS'),
          }
        }),
    }
  },

  // Kita biarkan 'esbuildOptions' untuk jaga-jaga
  // dari error bundling Vercel.
  esbuildOptions: (options: any) => { // Beri tipe 'any'
    options.external = [...(options.external ?? []), 'velite']
    return options
  },
})

