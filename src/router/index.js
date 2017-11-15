import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Table from '@/components/table'
import user from '@/components/user'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/list',
      name: 'list',
      component: Table
    },
    {
      path: '/user/add',
      name: 'user',
      component: user
    },
    {
      path: '/user/:id',
      name: 'userEdit',
      component: UserEdit,
      props: true
    }
  ]
})
