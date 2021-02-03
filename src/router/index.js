import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import noFound from '@/components/noFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: noFound
  },
  {
    path: '/',
    name: 'Home',
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 需要登录才可以访问
    if (!localStorage.getItem('token')) {
      // token存在条件
      const toLink = to.fullPath
      next({
        path: '/login', // 验证失败要跳转的页面
        query: {
          redirect: toLink, // 要传的参数
        },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
