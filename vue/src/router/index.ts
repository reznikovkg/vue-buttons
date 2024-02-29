import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import {RouteNames} from './routes'
import ButtonSixthPage from "@/components/pages/ButtonSixthPage.vue"
import FourthButtonPage from "@/components/pages/FourthButtons.vue";
import TwelfthButtonPage from '../components/pages/TwelfthButtonPage.vue'
import FifthButtonPage from "@/components/pages/FifthButtonPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/fourth_button',
    name: RouteNames.FOURTH_BUTTON,
    component: FourthButtonPage
  },
    {
    path: '/button_sixth',
    name: RouteNames.BUTTON_SIXTH,
    component: ButtonSixthPage
  },
  {
    path: '/twelfth_button',
    name: RouteNames.TWELFTH_BUTTON,
    component: TwelfthButtonPage
  },
  {
    path: '/fifth_button',
    name: RouteNames.FIFTH_BUTTON,
    component: FifthButtonPage

  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
