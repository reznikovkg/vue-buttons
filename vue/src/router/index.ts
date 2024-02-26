import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import FourthButtonPage from "@/components/pages/FourthButtonPage.vue";
import {RouteNames} from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path:'/fourth_button',
    name:RouteNames.FOURTH_BUTTON,
    component: FourthButtonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
