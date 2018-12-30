// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueLocalStorage from 'vue-localstorage'
// import VueCookies from 'vue-cookies'
Vue.use(VueLocalStorage)

import axios from 'axios'
// Vue.prototype.$axios = Axios;

import Meta from 'vue-meta'
Vue.use(Meta)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// import Vuex from 'vuex'
// Vue.use(Vuex)

// The animation plugin "SCROLL MAGIC"
// import '../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min'
import './assets/js/fk'

let storage = Vue.localStorage;
const baseUrl = "https://dev.media-sci.com/first_knight/public/api/";

/************************/
// Language Section
/************************/
const languages = ['en', 'ar'];
const savedLang = (storage.get('language'))?storage.get('language'):languages[0];
// let messages = {}
const messages = {
  en: {
    message: {
      menu: 'menu',
      search: 'search',
      login: 'login',
      cart: 'cart',
      services: 'services',
      furniture: 'furniture',
      weHave: 'We Have',
      noRule: 'No Rule',
      viewMore: 'view more',
      home: 'home',
      about: 'about',
      contactUs: 'contact us',
      myCart: 'my cart',
      emptyCart: 'Your shopping cart is empty',
      continueShopping: 'continue shopping',
      email: 'e-mail',
      password: 'password',
      register: 'register',
      forgetPassword: 'forget password',
      creatAccount: 'create account',
      newsletter: 'sign up for our newsletter',
      subscribe: 'subscribe',
      yourEmailAddress: 'Your Email address',
      followUs: 'follow us',
      rights: 'All rights reserved, First Knight 2018',
      powered: 'Powered by',

      name: 'name',
      phone: 'phone number',
      c_password: 'confirm password'
    }
  },
  ar: {
    message: {
      menu: 'القائمة',
      search: 'بحث',
      login: 'دخول',
      cart: 'السلة',
      services: 'الخدمات',
      furniture: 'الأثاث',
      weHave: 'ليس لدينا',
      noRule: 'أي قواعد',
      viewMore: 'المزيد',
      home: 'الرئيسية',
      about: 'عننا',
      contactUs: 'اتصل بنا',
      myCart: 'سلتي',
      emptyCart: 'سلة التسوق الخاصة بك فارغة',
      continueShopping: 'مواصلة التسوق',
      email: 'البريد الإلكتروني',
      password: 'كلمة السر',
      register: 'تسجيل',
      forgetPassword: 'نسيت كلمة المرور',
      creatAccount: 'إنشاء حساب',
      newsletter: 'سجل للحصول على اخر اخبارنا',
      subscribe: 'اشترك',
      yourEmailAddress: 'عنوان بريدك الإلكتروني',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة ، فيرست نايت 2018',
      powered: 'بواسطة',

      name: 'الإسم',
      phone: 'رقم الهاتف',
      c_password: 'تأكيد كلمة السر'
    }
  }
}
const i18n = new VueI18n({
  locale: savedLang,
  messages,
})
/************************/
// Language Section End
/*****************************************************************************/

/************************/
// Router Language
/************************/
router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  if(!languages.includes(lang)) return next(savedLang);
  if(i18n.locale !== lang) i18n.locale = lang;
  return next();
})
/************************/
// Router Language End
/*****************************************************************************/


/************************/
// VueX Store
/************************/
// const store = new Vuex.Store({
//   state: {
//     // count: 0,
//   },
//   mutations: {
//   	// increment: state => state.count++,
//     // decrement: state => state.count--
//   }
// })
/************************/
// VueX Store End
/*****************************************************************************/



/************************/
// Main App Start
/************************/
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  i18n,
  // store,
  router,
  template: '<App/>',
  components: { App },
  data() {
    return {
      settings: {},
      locale: i18n.locale,
      baseUrl: baseUrl
    }
  },
  metaInfo() {
    return {
      title: (this.settings.title_home_page)?this.settings.title_home_page:'- First Knight -',
      meta: [
          { name: 'description', content: this.settings.meta_description },
          { name: 'keywords', content: this.settings.meta_keywords }
      ]
    }
  },
  created() {
    this.changeLang(i18n.locale);

    axios({
      method: "POST",
      data: {language_symbol: i18n.locale},
      url: baseUrl+"get-settings"
    }).then(response => {
      this.settings = response.data.data.settings;
      // i18n.setLocaleMessage('ar', response.data.data.trans.ar)
      // i18n.setLocaleMessage('en', response.data.data.trans.en)
    }, error => {
      console.error(error);
    });
  },
  watch: {
    locale (val) {
      this.changeLang(val);
    }
  },
  methods: {
    changeLang (val) {
      $('html').attr('lang', val)
      storage.set('language', val)
    }
  }
})
