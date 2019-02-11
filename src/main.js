const apiUrl = "https://dev.media-sci.com/first_knight/public/api/";
window.apiUrl = apiUrl;
Vue.prototype.$apiUrl = apiUrl;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {i18n} from './i18n'
import store from './store'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios;
import Meta from 'vue-meta'
Vue.use(Meta)


import VueProgressBar from 'vue-progressbar'
const options = {
  color: 'grey',
  thickness: '5px'
}
Vue.use(VueProgressBar, options)

// The animation plugin "SCROLL MAGIC"
// import '../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min'
import './assets/js/fk'

let langClass = {
  'mr-auto': 'ml-auto',
  'ml-auto': 'mr-auto',
  'text-right': 'text-left',
  'text-left': 'text-right',
}
/************************/
// Main App Start
/************************/
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  i18n, // Langauge
  store, // VueX
  router,
  template: '<App/>',
  components: { App },
  data() {
    return {
      settings: {},
      services: {},
      locale: i18n.locale, // For watch change lang
      apiUrl: apiUrl
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
    this.changeLang(i18n.locale, true);
    this.getSettings();
    this.$store.dispatch('getCart');
  },
  watch: {
    locale (val) {
      this.changeLang(val);
    }
  },
  methods: {
    changeLang (val, created) {
      this.$i18n.locale = val
      this.$router.replace({ params: {lang: val} })
      $('html').attr('lang', val)
      localStorage.setItem('language', val)
      this.getServices() // For update menu services language

      // change bootstrap class by array langClass
      if((created && val=='ar') || !created) {
        this.changeClasses()
      }
    },
    changeClasses() {
      setTimeout(()=>{
        $('.lang-chang').each((i, n) => {
          $(n).removeClass('lang-chang');
        })
        if(typeof langClass === 'object') {
          Object.keys(langClass).map((key, index)=>{
            $('.'+String(key)+':not(.lang-chang)').addClass(String(langClass[key])+' lang-chang').removeClass(String(key));
          })
        }
      }, 1)
    },
    getSettings() {
      axios({
        method: "POST",
        data: {language_symbol: i18n.locale},
        url: apiUrl+"get-settings"
      }).then(response => {
        this.settings = response.data.data.settings;
        // i18n.setLocaleMessage('ar', response.data.data.trans.ar)
        // i18n.setLocaleMessage('en', response.data.data.trans.en)
      }, error => {
        console.error(error);
      });
    },
    getServices() {
      this.$axios({
          method: "POST",
          data: { language_symbol: i18n.locale },
          url: apiUrl+"get-services"
      }).then(response => {
          if(response.data.data)
              this.services = response.data.data;
      }, error => {
          console.error(error);
      });
    }
  }
})
