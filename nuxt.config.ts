// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // GitHub Pages configuration
  ssr: false,
  app: {
    baseURL: process.env.GITHUB_ACTIONS ? '/nuxt3-smart-hub/' : '/',
    buildAssetsDir: '/_nuxt/'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    //'@nuxtjs/svg-sprite'
    'nuxt-svgo',
    '@nuxtjs/google-fonts'
  ],

  // dir: {
  //   public: '~/../public'
  // },

  vue: {
    compilerOptions: {
      comments: true
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // svgSprite: {
  //   input: '~/assets/icons/duotone',
  //   output: '~/assets/sprites/',
  //   //defaultSprite: 'icons', // например 'icons'
  //   //spriteClassPrefix: 'sprite-', // prefix
  //   elementClass: null,
  //   iconsPath: false, // отключает страницу /_icons
  //   svgoConfig: {
  //     /* кастомные SVGO-плагины */
  //   }
  //   //publicPath: '/'
  // }

  svgo: {
    global: false,
    defaultImport: 'component',
    autoImportPath: 'assets/icons/',
    customComponent: '@/components/base/Icon',
    componentPrefix: 'i'
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: '200..800'
    }
  }
})
