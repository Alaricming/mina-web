import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Vuex from 'vuex'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

// Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
