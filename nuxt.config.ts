// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/color-mode",
  ],
  googleFonts: {
    families: {
      "DM+Sans": {
        wght: [200, 300, 500, 700],
      },
    },
  },
  css: ["~/assets/css/main.css"],
});
