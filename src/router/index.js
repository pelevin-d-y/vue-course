import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/components/main')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/components/table')
    },
    {
      path: '/user/add',
      name: 'user',
      component: () => import('@/components/user')
    },
    {
      path: '/user/:id',
      name: 'userEdit',
      component: () => import('@/components/UserEdit'),
      props: true
    }
  ]
})
