import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/layout'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: _import('login/login'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {
    path: '/',
    redirect: '/integrate-monitor/overview',
    hidden: true
  },
  {
    path: '/main',
    component: Layout,
    hidden: true
  },
  {
    path: '/integrate-monitor',
    component: Layout,
    name: 'integrateMonitor',
    meta: {
      title: '综合监控',
      icon: 'icon-home'
    },
    children: [
      {path: 'overview', component: _import('integrateMonitor/overview'), name: 'overview', meta: {title: '安全总览'}},
      {path: 'assets', component: _import('integrateMonitor/assets'), name: 'assets', meta: {title: '网络资产'}},
      {path: 'events', component: _import('integrateMonitor/events'), name: 'events', meta: {title: '事件监测'}},
      {path: 'flows', component: _import('integrateMonitor/flows'), name: 'flows', meta: {title: '流量监测'}},
      {
        path: 'vulnerability',
        component: _import('integrateMonitor/vulnerability'),
        name: 'vulnerability',
        meta: {title: '漏洞监测'}
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap
})
