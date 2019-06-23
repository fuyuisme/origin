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
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/users',
          component: () => import('./views/User.vue')
        },
        {
          path: '/roles',
          component: () => import('./views/Role.vue')
        },
        {
          path: '/rights',
          component: () => import('./views/Right.vue')
        },
        {
          path: '/goods',
          component: () => import('./views/Good.vue')
        },
        {
          path: '/params',
          component: () => import('./views/Param.vue')
        },
        {
          path: '/categories',
          component: () => import('./views/Categorie.vue')
        },
        {
          path: '/orders',
          component: () => import('./views/Order.vue')
        },
        {
          path: '/reports',
          component: () => import('./views/Report.vue')
        }
      ]
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
