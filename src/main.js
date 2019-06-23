import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/global.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1'

axios.interceptors.request.use(function (config) {
  let t = sessionStorage.getItem('token')
  if (t) {
    config.headers = {
      Authorization: t
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
