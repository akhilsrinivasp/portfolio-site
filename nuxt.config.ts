// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Akhil - Portfolio',
      meta: [ { charset: 'utf-8' } ],
      link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  css: [
    '/assets/css/styles.css'
  ],
  googleFonts: {
    families: {
      'Montserrat': true,
      'Marck Script': true,
    },
    display: 'swap',
    prefetch: true,
  },
})
