import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import {RouteNames} from './routes'
import ButtonSixthPage from "@/components/pages/ButtonSixthPage.vue"
import TwelfthButtonPage from '../components/pages/TwelfthButtonPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/twelfth_button',
    name: RouteNames.TWELFTH_BUTTON,
    component: TwelfthButtonPage
  },
  {
    path: '/button_sixth',
    name: RouteNames.BUTTON_SIXTH,
    component: ButtonSixthPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
