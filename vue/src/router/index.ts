import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import {RouteNames} from './routes'
import FifthButtonPage from "@/components/pages/FifthButtonPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/FifthButton',
    name: RouteNames.FifthButton,
    component: FifthButtonPage

  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
