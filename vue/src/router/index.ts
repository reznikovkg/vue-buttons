import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import SeventhButtons from "../components/pages/SeventhButtonPage.vue"
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/SeventhButtons',
    name: RouteNames.SEVENTH_BTN,
    component: SeventhButtons
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
