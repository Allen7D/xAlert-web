import constants from '@/utils/constants'
import lang from '@/lang/en'

const flowRule = {
  state: {
    flowRules: {},
    flow: {}
  },
  mutations: {
    addFlowRule: (state) => {
      state.flowRules.push({
        isOpen: true,
        new: true,
        probe: state.currentAgent.probe,
        iface: state.currentAgent.iface,
        name: lang.common.rule + state.flowRules.length,
        ip: '*',
        port: '*',
        direction: constants.FLOW.DIRECTION_IN,
        histogramOption: 'ONE_MINUTE_LAST_HOUR',
        severity: constants.SEVERITY.LOW,
        alertSpikeOn: false,
        alertSpike: {
          timeframeNumber: 1,
          timeframeUnit: constants.ELASTICALERT_TIMEFRAME_OPTION[2],
          height: 2
        },
        cronAlertSpikeOn: false,
        cronAlertSpike: {
          timeframeNumber: 1,
          timeframeUnit: constants.ELASTICALERT_TIMEFRAME_OPTION[2],
          timeframeInterval: constants.ELASTICALERT_TIMEFRAME_OPTION[3],
          timeframeSamplingCount: 1,
          height: 2
        }
      })
    },
    initFlowRule: (state, ruleList) => {
      state.flowRules = ruleList
    },
    fetchFlow: (state, data) => {
      state.flow = data
    }
  },
  actions: {
    addFlowRuleAsync({ commit }) {
      commit('addFlowRule')
    },
    initFlowRuleAsync({commit}, ruleList) {
      commit('initFlowRule', ruleList)
    }
  }
}

export default flowRule
