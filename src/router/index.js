import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
// import Swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // ,
    // {
    //   path: '/swiper',
    //   name: 'swiper',
    //   component: Swiper
    // }
  ]
})
