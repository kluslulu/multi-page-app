import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      name: 'christmas',
      component: () => import(/* webpackChunkName: "about" */ './pages/home.vue')
    },
    {
      path: '/christmas/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './pages/home.vue')
    },
    {
      path: '/christmas/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './pages/login.vue')
    }
  ]
})
