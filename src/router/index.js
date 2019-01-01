import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Service from '@/components/Service'
import Profile from '@/components/Profile'
import Error from '@/components/Error'

Vue.use(Router)
const routes = [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'services/:slug', name: 'Service', component: Service },
      { path: 'profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
      { path: '*', name: 'Error', component: Error }
    ]
  },
  // { path: '/furniture/exhibitions', name: 'ReadyMade', component: ReadyMade },
  // { path: '/furniture/maintenance', name: 'CustoiimMade', component: CustoiimMade },
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

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })
export default router;
