import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import TwelveBtnPage from '../components/pages/TwelveBtnPage.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/TwelveBtn',
    name: RouteNames.TwelveBtn,
    meta: {page: 'TwelveBtn'},
    component: TwelveBtnPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
