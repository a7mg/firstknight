import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import moduleAuth from './stores/moduleAuth'
import moduleCart from './stores/moduleCart'

const store = new Vuex.Store({
  modules: {
    auth: moduleAuth,
    cart: moduleCart,
  }
})

export default store;