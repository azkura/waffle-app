import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "waffle-blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "my awesome waffle-nuxt-blog"}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster|Pacifico&display=swap'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //font-awesome
    [
      'nuxt-fontawesome', {
        imports: [
            {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
            },

            {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
            }
        ]
      }
],
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
