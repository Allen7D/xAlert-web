import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    next({ path: '/' })
    NProgress.done()
  } else {
    if (store.getters.roles.length === 0) {
      store.dispatch('GetInfo').then(res => { // 拉取用户信息
        next()
      }).catch((err) => {
        store.dispatch('FedLogOut').then(() => {
          Message.error(err || '验证失败，请重新登录！')
          next({ path: '/' })
        })
      })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
