import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import SecondButtonPage from "@/components/pages/SecondButtonPage.vue";
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/second_button',
    name: RouteNames.SECOND_BUTTON,
    component: SecondButtonPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
