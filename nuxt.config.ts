// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-29",
  devtools: { enabled: true },
  css: ["@/styles/main.scss"],
  modules: [
    "@nuxt/image",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],
  image: {
    format: ["webp", "jpg"],
    screens: {
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
