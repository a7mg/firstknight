import axios from 'axios';

const moduleAuth ={
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
          const token = user.token

          if(response.data.status) {
            localStorage.setItem('authUser', JSON.stringify(user))
            localStorage.setItem('token', token)
            commit('auth_success', { token, user })
            $('.close-pop').trigger('click');
            // resolve(response)
          }

          // Just For loading and messages
          const loginStatic = {}
          loginStatic.loading = null
          loginStatic.status = response.data.status
          loginStatic.message = (!response.data.status)?response.data.data[0]:response.data.message
          resolve(loginStatic)
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          localStorage.removeItem('authUser')
          reject(err)
        });
      })
    },
    
    register({commit}, user){
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          data: user,
          url: window.apiUrl+"register"
        }).then(response => {
          // Just For loading and messages
          const registerStatic = {}
          registerStatic.loading = null
          registerStatic.status = response.data.status

          if(response.data.status) {
            const user = response.data.data
            const token = user.token
            localStorage.setItem('authUser', JSON.stringify(user))
            localStorage.setItem('token', token)
            commit('auth_success', { token, user })
            $('.close-pop').trigger('click');
          } else {
            registerStatic.messages = response.data.data;
          }
          resolve(registerStatic)
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          localStorage.removeItem('authUser')
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
}

export default moduleAuth;