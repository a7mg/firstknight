// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// localStorage
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
let storage = Vue.localStorage;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      // settings: settings,
      lang: ''
    }
  },
  router,
  template: '<App/>',
  components: { App },
  mounted() {
    this.lang = (storage.get('lang'))?storage.get('lang'):'en';
  },
  watch: {
    lang: function() {
      if(this.lang == 'en') {
        storage.set('lang', 'en');
        $('html')
            .attr('dir', 'ltr')
            .removeClass('rtl')
            .addClass('ltr');
      } else {
        storage.set('lang', 'ar');
        $('html')
          .attr('dir', 'rtl')
          .removeClass('ltr')
          .addClass('rtl');
      }
    }
  }
})
