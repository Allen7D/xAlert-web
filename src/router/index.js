import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/layout'
import TestTable from 'components/table/table'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: _import('login/login'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/testTable', component: TestTable, hidden: true},
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
      {path: 'overview', component: _import('integrateMonitor/overview/overview'), name: 'overview', meta: {title: '安全总览', breadNumber: 2}},
      {path: 'assets', component: _import('integrateMonitor/assets/assets'), name: 'assets', meta: {title: '网络资产', breadNumber: 2}},
      {path: 'events', component: _import('integrateMonitor/events/events'), name: 'events', meta: {title: '事件监测', breadNumber: 2}},
      {path: 'flows', component: _import('integrateMonitor/flows/flows'), name: 'flows', meta: {title: '流量监测', breadNumber: 2}},
      {path: 'vulne', component: _import('integrateMonitor/vulne/vulne'), name: 'vulne', meta: {title: '漏洞监测', breadNumber: 2}}
    ]
  },
  {
    path: '/custom-monitor',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: '业务监控'
    },
    children: [{path: 'index', component: _import('customMonitor/customMonitor'), name: 'customMonitor', meta: {title: '业务监控', icon: 'icon-pc', breadNumber: 2}}]
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
      {path: 'assetManage', component: _import('analysis/assets/assets'), name: 'assetManage', meta: {title: '资产', breadNumber: 2}},
      {path: 'eventManage', component: _import('analysis/events/events'), name: 'eventManage', meta: {title: '事件', breadNumber: 2}},
      {path: 'flowManage', component: _import('analysis/flows/flows'), name: 'flowManage', meta: {title: '流量', breadNumber: 2}},
      {path: 'vulneManage', component: _import('analysis/vulne/vulne'), name: 'vulneManage', meta: {title: '漏洞', breadNumber: 2}}
    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: 'noredirect',
    name: 'log',
    meta: {title: '日志', icon: 'icon-securityIncident'},
    children: [
      {path: 'system-log', component: _import('log/systemLog/systemLog'), name: 'systemLog', meta: {title: '系统日志', breadNumber: 2}},
      {path: 'user-log', component: _import('log/userLog/userLog'), name: 'userLog', meta: {title: '用户日志', breadNumber: 2}},
      {path: 'event-log', component: _import('log/eventLog/eventLog'), name: 'eventLog', meta: {title: '事件日志', breadNumber: 2}}
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: 'noredirect',
    name: 'system',
    meta: {title: '系统配置', icon: 'icon-setting'},
    children: [
      {path: 'system-status', component: _import('system/systemStatus/index'), name: 'systemStatus', meta: {title: '系统状态', breadNumber: 2}},
      {path: 'system-config', component: _import('system/systemConfig/index'), name: 'systemConfig', meta: {title: '系统配置', breadNumber: 2}},
      {path: 'alert-setting', component: _import('system/alertSetting/index'), name: 'alertSetting', meta: {title: '报警设置', breadNumber: 2}},
      {path: 'user-manage', component: _import('system/userManage/userManage'), name: 'userManage', meta: {title: '用户管理', breadNumber: 2}},
      {path: 'security-policy', component: _import('system/securityPolicy/securityPolicy'), name: 'securityPolicy', meta: {title: '安全策略', breadNumber: 2}}
    ]
  },
  {
    path: '/asset-dynamic',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    name: 'assetDynamic',
    meta: {title: '资产动态'},
    children: [
      {
        path: 'asset-detail',
        component: _import('assetDynamic/assetDetail/assetDetail'),
        name: 'assetDetail',
        // redirect: '/asset-dynamic/asset-detail/event',
        redirect: '/asset-dynamic/gitasset-detail/event',
        meta: {title: '资产详情', breadNumber: 2},
        children: [
          {path: 'event', component: _import('assetDynamic/assetDetail/event'), name: 'event'},
          {path: 'vulne', component: _import('assetDynamic/assetDetail/vulne'), name: 'vulne'},
          {path: 'flow', component: _import('assetDynamic/assetDetail/flow'), name: 'flow'},
          {path: 'session', component: _import('assetDynamic/assetDetail/session'), name: 'session'}
          ]
      },
      {path: 'asset-list', component: _import('assetDynamic/assetList/assetList'), name: 'assetList', meta: {title: '资产列表', breadNumber: 2}},
      {path: 'asset-setting', component: _import('assetDynamic/assetSetting/assetSetting'), name: 'assetSetting', meta: {title: '资产配置', breadNumber: 2}},
      {path: 'asset-online', component: _import('assetDynamic/assetOnline/assetOnline'), name: 'assetOnline', meta: {title: '在线资产', breadNumber: 2}}
    ]
  },
  {
    path: '/event-dynamic',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    name: 'eventDynamic',
    meta: {title: '事件动态'},
    children: [
      {path: 'event-detail', component: _import('eventDynamic/eventDetail/eventDetail'), name: 'eventDetail', meta: {title: '事件详情', breadNumber: 2}},
      {path: 'event-list', component: _import('eventDynamic/eventList/eventList'), name: 'eventList', meta: {title: '事件列表', breadNumber: 2}}
    ]
  },
  {
    path: '/vulne-dynamic',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    name: 'vulneDynamic',
    meta: {title: '漏洞动态'},
    children: [
      {path: 'vulne-detail', component: _import('vulneDynamic/vulneDetail/vulneDetail'), name: 'vulneDetail', meta: {title: '漏洞详情', breadNumber: 2}},
      {path: 'vulne-list', component: _import('vulneDynamic/vulneList/vulneList'), name: 'vulneList', meta: {title: '漏洞列表', breadNumber: 2}}
    ]
  },
  {
    path: '/net-flow',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    name: 'netFlow',
    meta: {title: '网络流量'},
    children: [
      {path: 'protocol-detail', component: _import('netFlow/protocolDetail'), name: 'protocolDetail', meta: {title: '协议详情', breadNumber: 2}}
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap
})
