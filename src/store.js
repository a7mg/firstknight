import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios';

const store = new Vuex.Store({
  state: {
    status: '',
    token : localStorage.getItem('token') || '',
    user : JSON.parse( localStorage.getItem('authUser') ) || {},
  },

  mutations: {
  	auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, { token, user }){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = ''
    },
  },
  
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          data: user,
          url: window.apiUrl+"login"
        }).then(response => {
          const user = response.data.data
          const token = response.data.data.token
          
          if(response.data.status) {
            localStorage.setItem('authUser', JSON.stringify(user))
            localStorage.setItem('token', token)
            commit('auth_success', { token, user })
            $('.close-pop').trigger('click');
            // resolve(response)
          } else {

          }
          // Just For loading and messages
          const loginArr = {}
          loginArr.loading = null
          loginArr.status = response.data.status
          loginArr.message = response.data.message
          resolve(loginArr)
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        });
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('authUser')
        resolve()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})

export default store;