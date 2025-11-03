// velite.config.mjs
// KITA KEMBALI MENGGUNAKAN .mjs DAN 'import' (SESUAI DOKUMENTASI)
import { defineConfig, s } from 'velite'

// Gunakan 'export default'
export default defineConfig({
  root: 'content',
  collections: {
    // Koleksi 'projects'
    projects: {
      name: 'Project',
      pattern: 'projects/**/*.mdx',
      // Gunakan skema 's' yang benar
      schema: s.object({
          title: s.string(),
          date: s.isodate(), // Sesuai dokumentasi
          description: s.string(),
          thumbnail: s.string(),
          stack: s.array(s.string()),
          slug: s.path(), // Sesuai dokumentasi
          content: s.raw() // <-- PERUBAHAN DI SINI (dari s.mdx() menjadi s.raw())
        })
        .transform((data) => {
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/projects/${realSlug}`,
          }
        }),
    },
    // Koleksi 'posts'
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      // Gunakan skema 's' yang benar
      schema: s.object({
          title: s.string(),
          date: s.isodate(), // Sesuai dokumentasi
          description: s.string(),
          slug: s.path(), // Sesuai dokumentasi
          content: s.raw() // <-- PERUBAHAN DI SINI (dari s.mdx() menjadi s.raw())
        })
        .transform((data) => {
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/blog/${realSlug}`,
          }
        }),
    }
  },

  // --- PERUBAHAN DI BAWAH INI ---
  // Mengubah 'esbuildOptions' dari FUNGSI menjadi OBJEK
  esbuildOptions: {
    external: ['velite']
  },
})

