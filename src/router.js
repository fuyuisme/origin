import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const r = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})

r.beforeEach((to, from, next) => {
  // /login 允许访问
  if (to.path === '/login') return next()
  // 取出令牌
  let token = sessionStorage.getItem('token')
  // 如果有令牌
  if (token) return next()
  else return next('/login')
})
export default r
