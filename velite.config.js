// velite.config.js

// PERBAIKAN: Hapus 'date-fns'. Biarkan komponen Next.js yang format tanggal.
const { defineConfig, s } = require('velite')
// const { format } = require('date-fns') // <-- DIHAPUS

// PERBAIKAN: Gunakan 'module.exports'
module.exports = defineConfig({
  root: 'content',
  collections: {
    // Koleksi 'projects'
    projects: {
      name: 'Project',
      pattern: 'projects/**/*.mdx',
      schema: s.object({
          title: s.string(),
          date: s.coerce.date(), // <-- Field 'date' ini sudah cukup
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
            // publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'), // <-- DIHAPUS
          }
        }),
    },
    // Koleksi 'posts'
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s.object({
          title: s.string(),
          date: s.coerce.date(), // <-- Field 'date' ini sudah cukup
          description: s.string(),
          slug: s.path(),
          content: s.raw()
        })
        .transform((data) => {
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/blog/${realSlug}`,
            // publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'), // <-- DIHAPUS
          }
        }),
    }
  },

  // Ini biarkan saja, ini yang memperbaiki error pertama
  esbuildOptions: (options) => {
    options.external = [...(options.external ?? []), 'velite']
    return options
  },
})

