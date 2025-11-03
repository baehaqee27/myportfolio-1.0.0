// velite.config.js

// Gunakan sintaks CommonJS (require)
const { defineConfig, s } = require('velite')
// JANGAN import date-fns di sini

// Gunakan 'module.exports'
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
            // Hapus 'publishedAt', format tanggal di komponen React
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
            // Hapus 'publishedAt', format tanggal di komponen React
          }
        }),
    }
  },

  // Ini adalah KUNCI yang hanya berfungsi di file .js
  esbuildOptions: (options) => {
    options.external = [...(options.external ?? []), 'velite']
    return options
  },
})

