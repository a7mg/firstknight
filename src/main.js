const apiUrl = "https://dev.media-sci.com/first_knight/public/api/";
window.apiUrl = apiUrl;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {i18n} from './i18n'
import store from './store'
import router from './router'
import axios from 'axios'
// Vue.prototype.$axios = Axios;
import Meta from 'vue-meta'
Vue.use(Meta)

// The animation plugin "SCROLL MAGIC"
// import '../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min'
import './assets/js/fk'

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
      locale: i18n.locale,
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
    this.changeLang(i18n.locale);

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
  watch: {
    locale (val) {
      this.changeLang(val);
    }
  },
  methods: {
    changeLang (val) {
      $('html').attr('lang', val)
      localStorage.setItem('language', val)
    }
  }
})
