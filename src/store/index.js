import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import firewallRule from './modules/firewallRule'
import flowRule from './modules/flowRule'
import keyopRule from './modules/keyopRule'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    firewallRule,
    flowRule,
    keyopRule
  },
  getters
})

export default store
