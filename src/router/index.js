import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
// import Swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
