// velite.config.js

// PERBAIKAN: Gunakan sintaks CommonJS (require)
const { defineConfig, s } = require('velite')
const { format } = require('date-fns')

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
          date: s.coerce.date(),
          description: s.string(),
          thumbnail: s.string(),
          stack: s.array(s.string()),
          slug: s.path(),
          content: s.raw()
        })
        .transform((data) => { // Hapus ': any'
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/projects/${realSlug}`,
            // FIX TYPO: 'yyyy' bukan 'yyyS'
            publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
          }
        }),
    },
    // Koleksi 'posts'
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
        .transform((data) => { // Hapus ': any'
          const realSlug = data.slug.split('/').pop()
          return {
            ...data,
            slug: realSlug,
            url: `/blog/${realSlug}`,
            // FIX TYPO: 'yyyy' bukan 'yyyS'
            publishedAt: format(new Date(data.date), 'MMMM dd, yyyy'),
          }
        }),
    }
  },

  // Ini adalah KUNCI-nya. Semoga kali ini dibaca.
  esbuildOptions: (options) => { // Hapus ': any'
    options.external = [...(options.external ?? []), 'velite']
    return options
  },
})
