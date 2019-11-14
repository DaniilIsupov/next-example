const NextI18Next = require('next-i18next').default
const initReactI18next = require('react-i18next')

module.exports = new NextI18Next({
    defaultLanguage: 'ru',
    fallbackLng: 'ru',
    // preload: ['ru'],
    otherLanguages: ['gb', 'ua'],
    defaultNS: 'common',
    use: [initReactI18next],
})