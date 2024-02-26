import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import TwelfthButtonPage from '../components/pages/TwelfthButtonPage.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/TwelfthButton',
    name: RouteNames.TwelfthButton,
    component: TwelfthButtonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
