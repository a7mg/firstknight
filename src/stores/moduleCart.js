import axios from 'axios';
import {i18n} from '../i18n';

const moduleCart ={
  state: {
    status: '',
    message: '',
    errors: null,
    cart : {}
  },

  mutations: {
  	add_request(state) {
      state.status = 'loading'
    },
    add_error(state) {
      state.status = 'error'
    },
    load_cart(state, { cart }) {
      console.log(cart);
      
      state.status = 'success'
      state.cart = cart
    }
  },
  
  actions: {
    addToCart({commit, dispatch, rootState, rootGetters}, item) {
      if(!rootGetters.isLoggedIn) {
        $('.open-pop[data-target="login-pop"]').trigger('click')
      } else {
        commit('add_request')
        item.language_symbol = i18n.locale
        item.token = rootState.auth.token
        return new Promise((resolve, reject) => {
          axios({
            method: "POST",
            data: item,
            url: window.apiUrl+"add-cart"
          }).then(response => {
            if(response.data.status)
              dispatch('getCart')
            resolve(response.data)
          }).catch(err => {
            commit('add_error', err)
            reject(err)
          });
        })
      }
    },

    getCart({commit, rootState, rootGetters}) {
      let cart = {};
      if(rootGetters.isLoggedIn) {
        return new Promise((resolve, reject) => {
          axios({
            method: "POST",
            data: {language_symbol: i18n.locale, token: rootState.auth.token},
            url: window.apiUrl+"get-cart"
          }).then(response => {
            if(response.data.status) {
              let cartResp = response.data.data;
              if(cartResp.items.length != 0)
                cart=cartResp
              commit('load_cart', { cart })
            }
            resolve()
          }).catch(err => {
            commit('add_error', err)
            reject(err)
          });
        })
      } else {
        return commit('load_cart', { cart })
      }
    },

    deleteItem({commit, dispatch, rootState}, cartId) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          data: {language_symbol: i18n.locale, token: rootState.auth.token, cart_id: cartId},
          url: window.apiUrl+"delete-cart"
        }).then(response => {
          if(response.data.status)
            dispatch('getCart')
          resolve()
        }).catch(err => {
          commit('add_error', err)
          reject(err)
        });
      })
    }
  },

  getters: {
    cart: state => state.cart,
  }
}

export default moduleCart;