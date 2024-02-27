import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import {RouteNames} from './routes'
import ThirteenthButtonPage from "../components/ui/buttons/ThirteenthButton.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/thirteenth_button',
    name: RouteNames.THIRTEENTH_BUTTON,
    component: ThirteenthButtonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
