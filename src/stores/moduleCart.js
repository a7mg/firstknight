import axios from 'axios';

const moduleCart ={
  state: {
    status: '',
    items : JSON.parse( localStorage.getItem('items') ) || {},
  },

  mutations: {
  	cart_request(state){
      state.status = 'loading'
    },
    cart_success(state, { items }){
      localStorage.setItem('items', JSON.stringify(items))

      state.status = 'success'
      state.items = items
    },
    cart_error(state){
      state.status = 'error'
    }
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
    }
  },

  getters: {
    cartItems: state => state.items
  }
}

export default moduleCart;