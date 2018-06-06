// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/stylus/index.styl'

import i18n from './lang'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

Vue.prototype.timeConvert = function (row) {
  return new Date(row.timestamp).toLocaleString('chinese', {hour12: false})
}