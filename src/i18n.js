import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from 'app/locales/en/translation.json'
import translationRU from 'app/locales/ru/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },

  ru: {
    translation: translationRU,
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: window.navigator
      ? window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage
      : 'en',
    debug: true,
    resources,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
