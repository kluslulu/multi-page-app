import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/pages/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    name: 'nofound',
    path: '/nofound',
    component(resolve: any) {
      require(['@/components/404.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/nofound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
