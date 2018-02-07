import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 组件
import Login from 'components/login/login'
import Layout from 'components/layout/layout'
import Overview from 'components/integrate-monitor/overview'
import Assets from 'components/integrate-monitor/assets'
import Page404 from 'components/errorPage/404'

Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Layout
  },
  {
    path: '/integrateMonitor',
    children: [
      {
        path: 'overview',
        component: Overview
      }, {
        path: 'assets',
        component: Assets
      }
    ]
  },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})
