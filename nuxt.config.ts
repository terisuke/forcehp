// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: '1HTV8yF-Q7AfZr4jpzYcu1VsELa1j6X8qygzHMqpkKM' },
        { name: 'description', content: '株式会社フォースは、日本の中小企業や開業を目指している事業主のサポートと、高齢者・障碍者・子育て支援・外国国籍者など弱者に対する住居その他住まいに関しての援助・サポート支援を行う会社です。' },
        { name: 'robots', content: 'noindex, nofollow' },
        { property: 'og:site_name', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
        { property: 'og:title', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
        { property: 'og:image', content: 'https://storage.cloud.google.com/hp-source/assets/force_hero.png' },
        { property: 'og:description', content: '株式会社フォースは、日本の中小企業や開業を目指している事業主のサポートと、高齢者・障碍者・子育て支援・外国国籍者など弱者に対する住居その他住まいに関しての援助・サポート支援を行う会社です。' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://storage.cloud.google.com/hp-source/assets/force_hero.png' },
        { name: 'apple-mobile-web-app-title', content: '株式会社フォース | 福岡県福岡市にあるコンサルタント会社' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', href: 'https://storage.cloud.google.com/hp-source/assets/force_favicon1.png', sizes: '180x180' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?display=swap&family=Noto+Sans+JP:100,300,400,500,700,900|Open+Sans:300,400,500,600,700,800,300i,400i,500i,600i,700i,800i' },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  compatibilityDate: '2025-07-15',
})
