import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import CustomBtn from '../components/pages/ButtonPage.vue'
import { RouteNames } from './routes'
import ButtonPage from "@/components/pages/ButtonPage.vue";

Vue.use(VueRouter)
// const routes = [
//   {
//     path: '/',
//     name: RouteNames.HOME,
//     component: HomePage
//   },
//   {
//     path: '/custom_button',
//     name: RouteNames.CUSTOM_BUTTON,
//     component: CustomBtn
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
      {
        path: '/',
        name: RouteNames.HOME,
        component: HomePage
      },
    {
      path: '/btn',
      name: RouteNames.CUSTOM_BUTTON,
      component: ButtonPage
    }
  ]
})

export default router
