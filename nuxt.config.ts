// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      Montserrat: {
        wght: "200..900",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
