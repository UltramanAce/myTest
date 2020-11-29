import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import History from '@/pages/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/History',
      name: 'History',
      component: History
    }
  ]
})
