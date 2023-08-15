export default {

  /* =================================
    CONFIGURACION DE LA APLICACION WEB

    -contiene informacion sobre el seo 
    -contiene el modo de despliegue para el mismo ya sea "static" o "server"
  ====================================*/

  target: 'universal',

  head: {
    title: "UPEA | Universidad Publica de El Alto. ",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content: "...",
      },
      {
        hid: "description",
        name: "description",
        content: "informacion de las carreras de la universidad publíca de el alto",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      //{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],

    script: [
      {
        src: "/js/wow.min.js",
      },
      { src: "/js/isotope.pkgd.min.js" },
      { src: "/js/pace.min.js" },
      { src: "/js/splitting.min.js" },
      { src: "/js/simpleParallax.min.js" },
    ],
  },

  // configuracon  global para el modo dark
  css: ['@/assets/css/dark.css',],

  // plugins implementados en el desarrollo de esta aplicación
  plugins: [
    "~/plugins/particles.js",
    "~/plugins/vueAwesomeSwiper.js",
    "~/plugins/vueSlickCarousel.js",
    {
      src: "~/plugins/vueEllipseProgress.js",
      mode: "client",
    },
    {
      src: "~/plugins/vueTyper.js",
      mode: "client",
    },
    { src: '~/plugins/vue-pdf-embed.js', mode: 'client' },
  ],

  // implementacion de componentes en las distintas plantillas
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["vue-scrollto/nuxt", { duration: 1000 }],
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // parametros para axios para la configuracion de axios
  axios: {
    baseURL: "https://serviciopagina.upea.bo",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
    },
  },

  // ubicacion para el almacenamiento de la dist
  buildDir: "dist",
};
