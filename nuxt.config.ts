// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  storybook: {
    // Options
    url:'http://localhost:6006',
    port:6006
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook']
})
