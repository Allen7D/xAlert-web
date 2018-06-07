<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日事件" icon="icon-log" :data="securityEventNum"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日漏洞" icon="icon-webloudongjiance" :data="totalVulne"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日资产发现" icon="icon-network-assets" :data="TodayAssetsNum"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="资产在线数量" icon="icon-networkAssets" :data="OnlineAssetsNum"></indicator>
        </el-col>
      </el-row>
    </div>

    <!--<div class="wrapper">-->
      <!--<el-row :gutter="40">-->
        <!--<el-col :xs="24" :sm="24" :lg="24">-->
          <!--<security-trend id="securityTrend" title="安全趋势"></security-trend>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :lg="12">-->
          <!--<asset-online id="assetOnline" title="在线资产"></asset-online>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->

    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="14">
          <protocol-chart id="protocolDistribution" title="TOP 20 应用层协议" titleType="simple" :data="flowData.totalInByL7" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <protoco-table :dataList="flowData.totalInByL7"></protoco-table>
            </div>
          </protocol-chart>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="10">
          <!--<table-wrapper title="TOP 20 网络会话" tableHeight="250px">-->
            <!--<net-session :dataList="netSessionData"></net-session>-->
          <!--</table-wrapper>-->
          <table-wrapper title="新增资产" tableHeight="250px">
            <additional-asset :dataList="additionalAssetData"></additional-asset>
          </table-wrapper>

        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="40">
        <!--<el-col :xs="27" :sm="27" :lg="6">-->
          <!--<asset-distribution id="assetDistribution" title="资产分布" titleType="simple" :height="350"></asset-distribution>-->
        <!--</el-col>-->
        <el-col :xs="24" :sm="24" :lg="12">
          <event-distribution-chart id="evnetDistributionChart" :data="event.data" title="事件分布" titleType="simple" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <event-distribution-table :dataList="event.data"></event-distribution-table>
            </div>
          </event-distribution-chart>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <vulne-distribution-chart id="vulneDistributionChart" :data="vulne" title="漏洞分布" titleType="simple" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <vulne-distribution-table :dataList="vulne"></vulne-distribution-table>
            </div>
          </vulne-distribution-chart>
        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="14">
          <table-wrapper title="网络事件" tableHeight="350px" wrapperHeight="450px">
            <net-event :dataList="netEventData"></net-event>
          </table-wrapper>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="10">
          <table-wrapper title="漏洞发现" tableHeight="350px" wrapperHeight="450px">
            <vulne-discovery :dataList="vulneDiscoveryData"></vulne-discovery>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Indicator from 'components/indicator/indicator'

  import SecurityTrend from './components/securityTrend'
  import AssetOnline from './components/assetOnline'

  import ProtocolChart from './components/protocolChart'
  import ProtocoTable from './components/protocolTable'
  import NetSession from './components/netSession'

  import AssetDistribution from './components/assetDistribution'
  import EventDistributionChart from './components/eventDistributionChart'
  import EventDistributionTable from './components/eventDistributionTable'
  import VulneDistributionChart from './components/vulneDistributionChart'
  import VulneDistributionTable from './components/vulneDistributionTable'

  import TableWrapper from 'components/table/tableWrapper'
  import NetEvent from './components/netEvent'
  import AdditionalAsset from './components/additionalAsset'
  import VulneDiscovery from './components/vulneDiscovery'

  import axios from 'axios'
  import {mapState} from 'vuex'
  import assetApi from '@/api/asset'
  import flowApi from '@/api/flow'
  import keyopApi from '@/api/keyop'
  import constants from '@/utils/constants'
  import { vulneMock } from '@/utils/index'
  const vulneMockData = vulneMock()
  export default {
    components: {
      Indicator,
      SecurityTrend,
      AssetOnline,
      ProtocolChart,
      ProtocoTable,
      NetSession,
      AssetDistribution,
      EventDistributionChart,
      EventDistributionTable,
      VulneDistributionChart,
      VulneDistributionTable,
      TableWrapper,
      NetEvent,
      AdditionalAsset,
      VulneDiscovery
    },
    data() {
      return {
        securityEventNum: 0,
        securityEvent: [],
        TodayAssetsNum: 0,
        OnlineAssetsNum: 0,
        netSessionData: [],
        protocolData: [],
        netEventData: [],
        flowData: {
          totalInByL7: [],
          totalOutByL7: []
        },
        event: {
          data: [],
          timelist: []
        },
        evnetDistributionData: [],
        vulne: [],
        additionalAssetData: [],
        vulneDiscoveryData: []
      }
    },
    computed: {
      ...mapState({
        currentAgent: (state) => state.app.currentAgent
      }),
      totalVulne() {
        let sum = 0
        for (let i = 0; i < this.vulne.length; i++) {
          sum += this.vulne[i].value
        }
        return sum
      }
    },
    watch: {
      '$store.state.app.currentAgent': {
          handler: function(cur, pre) {
            this.vulne = vulneMockData[cur.probe]
            this.getAssetData('/reload')
            this.getKeyopEventData()
            this.getFlowData()
            this.getKeyopData()
          },
          deep: true
      }
    },
    methods: {
      getAssetData(surfix) {
        const params = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface
        }
        assetApi.fetchAssets(params, surfix).then(res => {
          const OnlineAssets = res.data.data
          this.OnlineAssetsNum = OnlineAssets.length
        })
        assetApi.fetchActiveAssets(params, '1d').then(res => {
          this.additionalAssetData = res.data.data
          this.TodayAssetsNum = this.additionalAssetData.length
        })
      },
      getKeyopEventData() {
        const params = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface,
          range: 'LAST_DAY'
        }
        keyopApi.fetchKeyopEvent(params).then(res => {
          this.securityEvent = res.data.data.data
          this.securityEventNum = this.securityEvent.length
        })
        const params2 = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface,
          range: 'LAST_YEAR'
        }
        // 事件序列的集合
        keyopApi.fetchKeyopEvent(params2).then(res => {
          const data = res.data.data.data
          this.netEventData = data
          data.forEach((item, index) => {
            this.event.timelist = this.event.timelist.concat(item.count.timestamps)
          })
          console.log('this.event.timelist', this.event.timelist)
        })
      },
      getFlowData() {
        const params = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface,
          eventId: 'ui-flows-summary'
        }
        flowApi.fetchFlowRule(params).then(res => {
          const data = res.data.data.data
          this.flowData.totalInByL7 = data.total.totalInByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
          this.flowData.totalOutByL7 = data.total.totalOutByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
        })
      },
      getKeyopData() {
        const params = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface,
          eventId: 'ui-keyop-summary'
        }
        keyopApi.fetchKeyopRule(params).then(res => {
          const data = res.data.data.data
          const widget = {}
          widget.severityData = {}
          widget.severityData[constants.SEVERITY.HIGH] = 0
          widget.severityData[constants.SEVERITY.MEDIUM] = 0
          widget.severityData[constants.SEVERITY.LOW] = 0
          data.forEach(function (item, index, array) {
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              widget.severityData.HIGH = widget.severityData.HIGH + item.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              widget.severityData.MEDIUM = widget.severityData.MEDIUM + item.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              widget.severityData.LOW = widget.severityData.LOW + item.count
            }
          })
          this.event.data = [
            {name: '重大', value: widget.severityData.HIGH},
            {name: '较大', value: widget.severityData.MEDIUM},
            {name: '一般', value: widget.severityData.LOW}
          ]
        })
      },
      getProtocolData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.protocolData = data.protocol
            }
          })
      },
      getNetSessionData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.netSessionData = data.netSession
            }
          })
      },
//      getNetEventData() {
//        axios.get('/api/customMonitor/table.json')
//          .then(res => {
//            res = res.data
//            if (res.ret && res.data) {
//              const data = res.data
//              this.netEventData = data.netEvent
//            }
//          })
//      },
      getAdditionalAssetData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.additionalAssetData = data.additionalAsset
            }
          })
      },
      getVulneDiscoveryData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.vulneDiscoveryData = data.vulneDiscovery
            }
          })
      }
    },
    mounted() {
      this.getAssetData('/reload')
      this.getKeyopEventData()
      this.getFlowData()
      this.getKeyopData()
      this.getProtocolData()
      this.getNetSessionData()
//      this.getNetEventData()
      this.getAdditionalAssetData()
      this.getVulneDiscoveryData()
      this.vulne = vulneMockData['master']
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
    .wrapper
      margin-top: 18px
</style>
