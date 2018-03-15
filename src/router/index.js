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
        path: '',
        redirect: '/main'
    },
    {
        path: '/main',
        component: Layout
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: constantRouterMap
})
