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
    redirect: '/integrate-monitor/overview'
  },
  {
    path: '/main',
    component: Layout
  },
  {
    path: '/integrate-monitor',
    component: Layout,
    redirect: 'noredirect',
    name: 'integrateMonitor',
    meta: {
      title: 'integrateMonitor',
      icon: 'integrateMonitor'
    },
    children: [
      {path: 'overview', component: _import('integrateMonitor/overview'), name: 'overview', meta: {title: 'overview', breadNumber: 2}},
      {path: 'assets', component: _import('integrateMonitor/assets'), name: 'assets', meta: {title: 'assets', breadNumber: 2}},
      {path: 'events', component: _import('integrateMonitor/events'), name: 'events', meta: {title: 'events', breadNumber: 2}},
      {path: 'flows', component: _import('integrateMonitor/flows'), name: 'flows', meta: {title: 'flows', breadNumber: 2}},
      {
        path: 'vulnerability',
        component: _import('integrateMonitor/vulnerability'),
        name: 'vulnerability',
        meta: {title: 'vulnerability', breadNumber: 2}
      }
    ]
  },
  {
    path: '/business-monitor',
    component: Layout,
    redirect: '/business-monitor/busniess',
    children: [{
      path: 'business',
      component: _import('businessMonitor/business'),
      name: 'businessMonitor',
      meta: {title: 'businessMonitor', icon: 'businessMonitor', breadNumber: 1}
    }]
  },
  {
    path: '/analysis',
    component: Layout,
    redirect: 'noredirect',
    name: 'analysis',
    meta: {
      title: 'analysis',
      icon: 'analysis'
    },
    children: [
      {path: 'assetManage', component: _import('analysis/assets'), name: 'assetManage', meta: {title: 'assetManage', breadNumber: 2}},
      {path: 'eventManage', component: _import('analysis/events'), name: 'eventManage', meta: {title: 'eventManage', breadNumber: 2}},
      {path: 'flowManage', component: _import('analysis/flows'), name: 'flowManage', meta: {title: 'flowManage', breadNumber: 2}},
      {
        path: 'vulnerabilityManage',
        component: _import('analysis/vulnerability'),
        name: 'vulnerabilityManage',
        meta: {title: 'vulnerabilityManage', breadNumber: 2}
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: '/log/logPage',
    children: [{
      path: 'logPage',
      component: _import('log/log'),
      name: 'log',
      meta: {title: 'log', icon: 'log', breadNumber: 1}
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap
})
