<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import {fetchAgents} from '@/api/agent'
  import {fetchSummary} from '@/api/summary'
  import {initFlowRule, fetchFlowRule} from '@/api/flow'
  import {initKeyopRule, fetchKeyopRule, fetchKeyopRuleList} from '@/api/keyop'
  import {initFirewallRule} from '@/api/firewall'
  import {fetchSeverity} from '@/api/severity'
  import constants from '@/utils/constants'
  export default {
    data() {
      return {
        currentAgent: {
          probe: 'gushenxing',
          iface: 'eth0'
        },
        summaryParams: {
          eventId: 'ui-dashboard-summary',
          probe: 'gushenxing',
          iface: 'eth0'
        },
        flowParams: {
          eventId: 'ui-flows-summary',
          probe: 'gushenxing',
          iface: 'eth0'
        },
        keyopParams: {
          eventId: 'ui-keyop-summary',
          probe: 'gushenxing',
          iface: 'eth0'
        },
        severityParams: {
          eventId: 'ui-monitor-traffic-summary',
          probe: 'gushenxing',
          iface: 'eth0'
        }
      }
    },
    methods: {
      getAgentsData() {
        fetchAgents().then(res => {
          const agents = res.data.data
          console.log('agents', agents)
          this.$store.dispatch('fetchAgentsAsync', agents)
        })
      },
      initCurrentAgentRule() {
        initFlowRule(this.currentAgent).then(res => {
          this.$store.dispatch('initFlowRuleAsync', res.data.data)
        })
        initKeyopRule(this.currentAgent).then(res => {
          this.$store.dispatch('initKeyopRuleAsync', res.data.data)
        })
        initFirewallRule(this.currentAgent).then(res => {
          this.$store.dispatch('initFirewallRuleAsync', res.data.data)
        })
      },
      getSummaryData(params) {
        fetchSummary(params).then(res => {
          const data = res.data.data.data
          const query = res.data.data.query
          const record = {}
          const assetSummary = data.assetSummary
          record.totalAssets = assetSummary[constants.ASSETS.STATUS_NEW].length + assetSummary[constants.ASSETS.STATUS_VALID].length +
                              assetSummary[constants.ASSETS.STATUS_INVALID].length + assetSummary[constants.ASSETS.STATUS_IGNORED].length
          record.totalAssetsAlerts = assetSummary[constants.ASSETS.ALERT_MULTIPLE_MAC].length + assetSummary[constants.ASSETS.ALERT_MULTIPLE_OS].length
          record.totalNewAssets = assetSummary[constants.ASSETS.STATUS_NEW].length
          record.totalValidAssets = assetSummary[constants.ASSETS.STATUS_VALID].length
          record.totalInvalidAssets = assetSummary[constants.ASSETS.STATUS_INVALID].length
          record.totalIgnoredAssets = assetSummary[constants.ASSETS.STATUS_IGNORED].length
          record.totalAssetsAlertsMac = assetSummary[constants.ASSETS.ALERT_MULTIPLE_MAC].length
          record.totalAssetsAlertsOs = assetSummary[constants.ASSETS.ALERT_MULTIPLE_OS].length

          record.assetsFlow = data.assetsFlow
          record.assetsHisto = data.assetsHisto

          const firewallRuleSummary = data.firewallRuleSummary
          record.totalFirewallRuleEvents = firewallRuleSummary.reduce(function (memo, item) {
            return memo + item.count
          }, 0)

          record.totalFirewallRuleEventsHigh = 0
          record.totalFirewallRuleEventsMedium = 0
          record.totalFirewallRuleEventsLow = 0

          firewallRuleSummary.forEach(function (item, index, array) {
            if (item.rule.severity === constants.SEVERITY.LOW) {
              record.totalFirewallRuleEventsLow = record.totalFirewallRuleEventsLow + item.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              record.totalFirewallRuleEventsMedium = record.totalFirewallRuleEventsMedium + item.count
            }
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              record.totalFirewallRuleEventsHigh = record.totalFirewallRuleEventsHigh + item.count
            }
          })

          const flowRuleSummary = data.flowRuleSummary
          record.totalFlowByteIn = flowRuleSummary.total.totalIn
          record.totalFlowByteOut = flowRuleSummary.total.totalOut

          const keyOpRuleSummary = data.keyOpRuleSummary
          record.totalKeyOpRuleEvents = keyOpRuleSummary.reduce(function (memo, item) {
            return memo + item.count
          }, 0)
          record.totalKeyOpRuleEventsHigh = 0
          record.totalKeyOpRuleEventsMedium = 0
          record.totalKeyOpRuleEventsLow = 0
          keyOpRuleSummary.forEach(function (item, index, array) {
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              record.totalKeyOpRuleEventsHigh = record.totalKeyOpRuleEventsHigh + item.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              record.totalKeyOpRuleEventsMedium = record.totalKeyOpRuleEventsMedium + item.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              record.totalKeyOpRuleEventsLow = record.totalKeyOpRuleEventsLow + item.count
            }
          })
          const key = query.probe + '-' + query.iface
          console.log(key, record)
          this.$store.dispatch('addRecordAsync', {key: key, record: record})
        })
      },
      getFlowData(params, uiKey) {
        fetchFlowRule(params).then(res => {
          const data = res.data.data.data
          const widget = {}
          widget[uiKey] = {}
          widget[uiKey].TotalIn = data.total.totalIn
          widget[uiKey].TotalOut = data.total.totalOut
          widget[uiKey].TotalInByL4 = data.total.totalInByL4.map(function (item, index, array) {
            return {key: constants.L4_PROTO[item.key], y: item.y}
          })
          widget[uiKey].TotalInByL7 = data.total.totalInByL7.map(function (item, index, array) {
            return {key: constants.L7_PROTO[item.key], y: item.y}
          })
          widget[uiKey].TotalInBySrcIp = data.total.totalInBySrcIp
          widget[uiKey].TotalInByDstIp = data.total.totalInByDstIp
          widget[uiKey].TotalOutByL4 = data.total.totalOutByL4.map(function (item, index, array) {
            return {key: constants.L4_PROTO[item.key], y: item.y}
          })
          widget[uiKey].TotalOutByL7 = data.total.totalOutByL7.map(function (item, index, array) {
            return {key: constants.L7_PROTO[item.key], y: item.y}
          })
          widget[uiKey].TotalOutBySrcIp = data.total.totalOutBySrcIp
          widget[uiKey].TotalOutByDstIp = data.total.totalOutByDstIp
          this.$store.commit('fetchFlow', widget[uiKey])
          console.log('getFlowData', data)
          console.log('getFlowData-widget', widget)
        })
      },
      getKeyopData(params, uiKey) {
        fetchKeyopRule(params).then(res => {
          const data = res.data.data.data
          const widget = {}
          widget[uiKey] = {}
          widget[uiKey].summaryData = data
          widget[uiKey].summaryTotal = data.reduce(function (memo, item) {
            return memo + item.count
          }, 0)
          widget[uiKey].severityData = {}
          widget[uiKey].severityData[constants.SEVERITY.HIGH] = 0
          widget[uiKey].severityData[constants.SEVERITY.MEDIUM] = 0
          widget[uiKey].severityData[constants.SEVERITY.LOW] = 0
          data.forEach(function (item, index, array) {
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              widget[uiKey].severityData.HIGH = widget[uiKey].severityData.HIGH + item.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              widget[uiKey].severityData.MEDIUM = widget[uiKey].severityData.MEDIUM + item.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              widget[uiKey].severityData.LOW = widget[uiKey].severityData.LOW + item.count
            }
          })
          this.$store.commit('fetchkeyopRule', widget[uiKey])
          console.log('getKeyopData', data)
          console.log('getKeyopData-widget', widget)
        })
      },
      getKeyopList() {
        fetchKeyopRuleList().then(res => {
          const availableRules = res.data.data
          const keyOpRuleList = []
          for (let key in availableRules) {
            keyOpRuleList.push(availableRules[key])
          }
          this.$store.dispatch('fetchKeyopRuleListAsync', keyOpRuleList)
        })
      },
      getSeverityData(params, uiKey) {
        fetchSeverity(params).then(res => {
          const data = res.data.data.data
          const widget = {}
          widget[uiKey] = {}
          widget[uiKey].summaryData = data
          widget[uiKey].summaryTotal = data.reduce(function (memo, item) {
            return memo + item.count
          }, 0)
          widget[uiKey].severityData = {}
          widget[uiKey].severityData[constants.SEVERITY.HIGH] = 0
          widget[uiKey].severityData[constants.SEVERITY.MEDIUM] = 0
          widget[uiKey].severityData[constants.SEVERITY.LOW] = 0
          data.forEach(function (item, index, array) {
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              widget[uiKey].severityData.HIGH = widget[uiKey].severityData.HIGH + item.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              widget[uiKey].severityData.MEDIUM = widget[uiKey].severityData.MEDIUM + item.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              widget[uiKey].severityData.LOW = widget[uiKey].severityData.LOW + item.count
            }
          })
          this.$store.commit('fetchSecurity', widget[uiKey])
          console.log('getSeverityData', data)
          console.log('getSeverityData-widget', widget)
          console.log(widget[uiKey].summaryTotal)
        })
      }
    },
    created() {
      this.getAgentsData()
      this.getSummaryData(this.summaryParams)
      this.getFlowData(this.flowParams, this.flowParams.eventId)
      this.getKeyopData(this.keyopParams, this.keyopParams.eventId)
      console.log(this.$t(`base.${constants.ELASTIC_TIMEFRAME_OPTION[0]}`))
      this.getKeyopList()
      this.initCurrentAgentRule()
      setInterval(() => {
        this.getSeverityData(this.severityParams, this.severityParams.eventId)
      }, 2000)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  html
    height: 100%
    box-sizing: border-box
  body
    height: 100% !important
</style>
