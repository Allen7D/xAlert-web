import Cookies from 'js-cookie'
import constants from '@/utils/constants'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'en',
    agents: [],
    currentAgent: {
      name: '',
      probe: '',
      iface: ''
    },
    records: {},
    security: {},
    protocolL4Map: constants.L4_PROTO,
    protocolL7Map: constants.L7_PROTO
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    fetchAgents: (state, agents) => {
      state.agents = agents
    },
    setCurrentAgent: (state, agent) => {
      state.currentAgent.name = agent.name
      state.currentAgent.probe = agent.probe
      state.currentAgent.iface = agent.iface
    },
    addRecord: (state, {key, record}) => {
      state.records[key] = record
    },
    fetchSecurity: (state, data) => {
      state.security = data
    }
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({commit}, language) {
      commit('SET_LANGUAGE', language)
    },
    fetchAgentsAsync({state, commit}, agents) {
      commit('fetchAgents', agents)
      if (!state.currentAgent.probe) {
        commit('setCurrentAgent', agents[0])
      }
    },
    addRecordAsync({commit}, data) {
      commit('addRecord', data)
    }
  }
}

export default app
