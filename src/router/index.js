import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
// import { component } from 'vue/types/umd'
import Welcome from '../components/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  }, // made an addition here (set the Welcome component to the Home route)
  
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },

  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
