import Vue from 'vue'
import VueRouter from 'vue-router'
import classic from '../views/classic.vue'
import timeattack from '../views/timeattack.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/classic',
    name: 'classic',
    component: classic
  },
  {
    path: '/timeattack',
    name: 'timeattack',
    component: timeattack
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
