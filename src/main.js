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

Vue.prototype.timeConvert = function (row) {
  return new Date(row.timestamp).toLocaleString('chinese', {hour12: false})
}

Vue.prototype.flowConvert = function (row) {
  let flow = row.value
  if (!flow) {
    return '0 b'
  }
  let t = Math.pow(1024, 4)
  let g = Math.pow(1024, 3)
  let m = Math.pow(1024, 2)
  let k = Math.pow(1024, 1)
  let tn = 0
  let gn = 0
  let mn = 0
  let kn = 0
  let str = ''
  while (flow >= t) {
    flow = flow - t
    tn++
  }
  if (tn > 0) {
    str = str + tn + 'T '
  }
  while (flow >= g) {
    flow = flow - g
    gn++
  }
  if (gn > 0) {
    str = str + gn + 'G '
  }
  while (flow >= m) {
    flow = flow - m
    mn++
  }
  if (mn > 0) {
    str = str + mn + 'M '
  }
  while (flow >= k) {
    flow = flow - k
    kn++
  }
  if (kn > 0) {
    str = str + kn + 'K '
  }
  if (flow > 0) {
    str = str + flow + 'b '
  }
  return str
}

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
  components: {App},
  template: '<App/>'
})
