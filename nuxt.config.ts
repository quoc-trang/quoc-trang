// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-12-31",
});