import constants from '@/utils/constants'
import lang from '@/lang/en'

const firewallRule = {
  state: {
    firewallRules: []
  },
  mutations: {
    ADD_FIREWALL_RULE: (state, {probe, iface}) => {
      state.firewallRules.push({
        isOpen: true,
        new: true,
        probe,
        iface,
        name: lang.common.rule + state.firewallRules.length,
        srcIp: '*',
        srcIpNegate: false,
        srcPort: '*',
        srcPortNegate: false,
        dstIp: '*',
        dstIpNegate: false,
        dstPort: '*',
        dstPortNegate: false,
        protocolL4: ['ANY'],
        protocolL4Negate: false,
        protocolL7: ['ANY'],
        protocolL7Negate: false,
        histogramOption: 'ONE_MINUTE_LAST_HOUR',
        severity: constants.SEVERITY.LOW
      })
    },
    initFirewallRule: (state, ruleList) => {
      state.firewallRules = ruleList
    }
  },
  actions: {
    addFirewallRule({commit, rootState}) {
      const {probe, iface} = rootState.app.currentAgent
      commit('ADD_FIREWALL_RULE', {probe, iface})
    },
    initFirewallRuleAsync({commit}, ruleList) {
      commit('initFirewallRule', ruleList)
    }
  }
}

export default firewallRule