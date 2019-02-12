require('dotenv').config();
const pkg = require('./package')

module.exports = {
    mode: 'universal',
    env: {
        baseUrl: process.env.BASE_URL
    },
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - Colin Travis CM Challenge',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            {name: 'msapplication-TileColor', content: "#2d89ef"},
            {name: 'theme-color', content: '#ff0000'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#0f0c96'},

    /*
    ** Global CSS
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/vue-scroll-reveal', ssr: false},
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    css: [
        '@/assets/sass/app.scss',
        '@/assets/sass/vendor.scss'
    ],

    /*
    ** Build configuration
    */
    build:
        {
            /*
            ** Run ESLint on save
            */
            extend(config, {isDev, isClient, isServer}) {
                if (isDev && isClient) {
                    config.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/
                    })
                }
            }
        }

};
