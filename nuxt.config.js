export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr:true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alalmiya Alhoura',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link:[{ rel: 'icon', type: 'image/x-icon', href: '/favico.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos.js", ssr: false },
    { src: "@/plugins/slic.js", ssr: false },
    { src: "@/plugins/font-awesome.js", ssr: false },
    { src: "@/plugins/bootstrip.js", ssr: false },
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/line-awesome.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-izitoast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
