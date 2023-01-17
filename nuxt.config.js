export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DESCRIPTION TEXT' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Maurice Putz' },
      { name: 'theme-color', content: '#6549D5' },

      { name: 'og:type', property: 'og:type', content: 'website' },
      { name: 'og:url', property: 'og:url', content: 'SEO DOMAIN TEXT' },
      { name: 'og:image', property: 'og:image', content: 'SEO DOMAIN TEXTseo-image-ccc.png' },
      { name: 'og:title', property: 'og:title', content: 'TITLE TEXT' },
      { hid: 'og:description', name: 'og:description', content: 'DESCRIPTION TEXT IMAGE PATH FULL DOMAIN' },

      { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', property: 'twitter:url', content: 'SEO DOMAIN TEXT' },
      { name: 'twitter:title', property: 'twitter:title', content: 'TITLE TEXT' },
      { name: 'twitter:description', content: 'DESCRIPTION TEXT' },
      { name: 'twitter:image', property: 'twitter:image', content: 'SEO DOMAIN TEXT IMAGE PATH FULL DOMAIN' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' },
      { rel: 'icon', sizes: '192x192', purpose: 'maskable', href: '/favicon/android-chrome-192x192.png' },
      { rel: 'icon', sizes: '512x512', href: '/favicon/android-chrome-512x512.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon/favicon-32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon/favicon-16.png' },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
    ],
    script: [
      // FOR INTEGRATION GOOGLE TAG EASY IN HEADER -> NOT GDPR CONFORM
      // {
      //   src: "https://www.googletagmanager.com/gtag/js?id=GOOGLE-TAG-ID",
      //   async: true,
      // },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    { path: '~/components/global', extensions: ['vue'] },
    { path: '~/components/common', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-cookie-control', {
      controlButton: true,
      blockIframe: false,
      acceptNecessary: false,
      barPosition: 'bottom-left',
    }]
  ],

  cookies: {
    //IF COSTUME TEXT IN COOKIES WANTED
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    fallback: true,
  },
}