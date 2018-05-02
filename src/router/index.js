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
    redirect: 'noredirect',
    name: 'integrateMonitor',
    meta: {
      title: '综合监控',
      icon: 'icon-home'
    },
    children: [
      {path: 'overview', component: _import('integrateMonitor/overview'), name: 'overview', meta: {title: '安全总览', breadNumber: 2}},
      {path: 'assets', component: _import('integrateMonitor/assets'), name: 'assets', meta: {title: '网络资产', breadNumber: 2}},
      {path: 'events', component: _import('integrateMonitor/events'), name: 'events', meta: {title: '事件监测', breadNumber: 2}},
      {path: 'flows', component: _import('integrateMonitor/flows'), name: 'flows', meta: {title: '流量监测', breadNumber: 2}},
      {
        path: 'vulnerability',
        component: _import('integrateMonitor/vulnerability'),
        name: 'vulnerability',
        meta: {title: '漏洞监测', breadNumber: 2}
      }
    ]
  },
  {
    path: '/custom-monitor',
    component: Layout,
    redirect: 'noredirect',
    name: 'customMonitor',
    meta: {
      title: '业务监控',
      icon: 'icon-pc'
    },
    children: [
      {path: 'business', component: _import('customMonitor/business'), name: 'customMonitor', meta: {title: '业务监控', breadNumber: 2}},
      {path: 'business2', component: _import('customMonitor/business'), name: 'customMonitor2', meta: {title: '业务监控2', breadNumber: 2}}
    ]
  },
  {
    path: '/analysis',
    component: Layout,
    redirect: 'noredirect',
    name: 'analysis',
    meta: {
      title: '管理分析',
      icon: 'icon-analysis'
    },
    children: [
      {path: 'assetManage', component: _import('analysis/assets'), name: 'assetManage', meta: {title: '资产', breadNumber: 2}},
      {path: 'eventManage', component: _import('analysis/events'), name: 'eventManage', meta: {title: '事件', breadNumber: 2}},
      {path: 'flowManage', component: _import('analysis/flows'), name: 'flowManage', meta: {title: '流量', breadNumber: 2}},
      {
        path: 'vulnerabilityManage',
        component: _import('analysis/vulnerability'),
        name: 'vulnerabilityManage',
        meta: {title: '漏洞', breadNumber: 2}
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: 'noredirect',
    name: 'log',
    meta: {title: '日志', icon: 'icon-securityIncident'},
    children: [
      {path: 'logPage', component: _import('log/log'), name: 'log', meta: {title: '日志', breadNumber: 2}},
      {path: 'logPage2', component: _import('log/log'), name: 'log2', meta: {title: '日志2', breadNumber: 2}}
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: 'noredirect',
    name: 'system',
    meta: {title: '系统配置', icon: 'icon-setting'},
    children: [
      {path: 'system', component: _import('system/index'), name: 'system2', meta: {title: '系统配置', breadNumber: 2}},
      {path: 'system2', component: _import('system/index'), name: 'system2', meta: {title: '系统配置2', breadNumber: 2}}
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap
})
