export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bytebase - Database Schema Change and Version Control",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Open source, web-based, zero-config, dependency-free database schema change and version control for Developers and DBAs",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  router: {
    linkExactActiveClass: "underline",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-plausible"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  plausible: {
    // see configuration section
    domain: "bytebase.com",
  },

  googleAnalytics: {
    id: "UA-202806916-1",
  },
};
