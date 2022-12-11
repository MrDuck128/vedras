// https://nuxt.com/docs/api/configuration/nuxt-config

import hr from './locales/hr.json'
import en from './locales/en.json'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['hr', 'en'],
    defaultLocale: 'hr',
    vueI18n: {
      legacy: false,
      locale: 'hr',
      messages: {
        hr,
        en
      }
    }
  }
})
