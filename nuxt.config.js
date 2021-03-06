export default {
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/css/main.scss'],
  components: [
    '~/components/templates',
    '~/components/widgets',
    '~/components/atoms',
    '~/components/molecules',
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
    'nuxt-i18n'
  ],
  plugins: [
    '~/plugins/i18n'
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'en',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh-CN.js',
        name: '简体中文'
      }
    ]
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  build: {
  }
}
