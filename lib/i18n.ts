import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

i18n.use(initReactI18next)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`../locales/${language}/${namespace}.json`)
        )
    )
    .init({
        fallbackLng: 'ru',
        supportedLngs: ['kz', 'en', 'ru'],
        ns: ['common'],
        defaultNS: 'common',
        react: { useSuspense: false },
        interpolation: { escapeValue: false },
    })

export default i18n
