import constants from '@/utils/constants'

const keyopRule = {
  state: {
    keyopRules: {},
    keyopRuleList: [],
    keyop: {}
  },
  mutations: {
    addKeyopRule: (state) => {
      state.keyopRules.push({
        isOpen: true,
        new: true,
        probe: state.currentAgent.probe,
        iface: state.currentAgent.iface,
        name: '',
        srcIp: '*',
        dstIp: '*',
        signatureId: state.keyopRuleList[0].signatureId,
        title: state.keyopRuleList[0].title,
        path: state.keyopRuleList[0].path,
        content: state.keyopRuleList[0].content,
        histogramOption: 'ONE_MINUTE_LAST_HOUR',
        severity: constants.SEVERITY.LOW
      })
    },
    initKeyopRule: (state, ruleList) => {
      state.keyopRules = ruleList
    },
    fetchKeyopRuleList: (state, ruleList) => {
      state.keyopRuleList = ruleList
    },
    fetchKeyopRule: (state, data) => {
      state.keyop = data
    }
  },
  actions: {
    addKeyopRuleAsync({commit}) {
      commit('addKeyopRule')
    },
    initKeyopRuleAsync({commit}, ruleList) {
      commit('initKeyopRule', ruleList)
    },
    fetchKeyopRuleListAsync({commit}, ruleList) {
      commit('fetchKeyopRuleList', ruleList)
    }
  }
}

export default keyopRule
