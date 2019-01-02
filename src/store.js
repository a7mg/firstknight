import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import moduleAuth from './stores/moduleAuth'

const store = new Vuex.Store({
  modules: {
    auth: moduleAuth,
  }
})

export default store;