import Vue from 'vue'
import Router from 'vue-router'
import {i18n, languages, savedLang} from '../i18n'
import store from '../store'

import Home from '@/components/Home'
import Service from '@/components/Service'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ReadyMade from '@/components/readyMade'
import Products from '@/components/Products'
import ProductDetails from '@/components/ProductDetails'
import Profile from '@/components/Profile'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Error from '@/components/Error'

Vue.use(Router)

let subPath = ''
if(window.location.hostname != 'localhost')
  subPath = '/first-knight'

const routes = [
  {
    path: subPath+'/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'services/:slug', name: 'Service', component: Service },
      { path: 'furniture/readyMade', name: 'ReadyMade', component: ReadyMade },
      { path: 'furniture/readyMade/:slug/:catId', name: 'Products', component: Products },
      { path: 'furniture/readyMade/product/:slug/:productId', name: 'ProductDetails', component: ProductDetails },
      { path: 'furniture/:slug', name: 'CustomMade', component: Service },
      { path: 'cart', name: 'Cart', component: Cart },
      { path: 'Checkout', name: 'Checkout', component: Checkout },
      { path: 'about', name: 'About', component: About },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
      { path: '*', name: 'Error', component: Error }
    ]
  }
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  if(!languages.includes(lang))
    return next(subPath+'/'+savedLang)
  if(i18n.locale !== lang) i18n.locale = lang;
  return next();
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('')
  } else {
    next() 
  }
})
export default router;
