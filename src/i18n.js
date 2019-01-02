import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const languages = ['en', 'ar'];
const savedLang = (localStorage.getItem('language'))?localStorage.getItem('language'):languages[0];
import messages from './messages'

const i18n = new VueI18n({
    locale: savedLang,
    messages,
})

export {i18n, languages, savedLang};