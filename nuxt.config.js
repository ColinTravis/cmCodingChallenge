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
            {name: 'msapplication-TileColor', content: "#0f0c96"},
            {name: 'theme-color', content: '#0f0c96'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel:"stylesheet", href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900'},
            {rel:"stylesheet", href: 'https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700'}
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
