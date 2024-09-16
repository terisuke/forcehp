export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
      title: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'google-site-verification', content: '1HTV8yF-Q7AfZr4jpzYcu1VsELa1j6X8qygzHMqpkKM' },
          { hid: 'description', name: 'description', content: '株式会社フォースは、日本の中小企業や開業を目指している事業主のサポートと、高齢者・障碍者・子育て支援・外国国籍者など弱者に対する住居その他住まいに関しての援助・サポート支援を行う会社です。' },
          { name: 'robots', content: 'noindex, nofollow' },
          { property: 'og:site_name', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
          { property: 'og:title', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
          { property: 'og:image', content: 'https://storage.cloud.google.com/hp-source/assets/force_hero.png' },
          { property: 'og:description', content: '株式会社フォースは、日本の中小企業や開業を目指している事業主のサポートと、高齢者・障碍者・子育て支援・外国国籍者など弱者に対する住居その他住まいに関しての援助・サポート支援を行う会社です。' },
          { property: 'og:type', content: 'website' },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:image', content: 'https://storage.cloud.google.com/hp-source/assets/force_hero.png' },
          { name: 'apple-mobile-web-app-title', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
      ],
      link: [
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', type: 'image/png', href: 'https://storage.cloud.google.com/hp-source/assets/force_favicon1.png', sizes: '180x180'},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?display=swap&family=Noto+Sans+JP:100,300,400,500,700,900|Open+Sans:300,400,500,600,700,800,300i,400i,500i,600i,700i,800i' },
          {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"}
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '~/assets/css/main.css',
      '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-awesome-swiper.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extend(config, ctx) {
      config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
      limit: 1000, // 1KB
      name: 'img/[name].[hash:7].[ext]'
      }
      })
      }
  },

  compatibilityDate: '2024-09-13'
});