<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日事件" icon="icon-log" :data="securityEventNum"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日漏洞" icon="icon-webloudongjiance" :data="6"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="今日资产发现" icon="icon-network-assets" :data="TodayAssetsNum"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="资产在线数量" icon="icon-networkAssets" :data="OnlineAssetsNum"></indicator>
        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <security-trend id="securityTrend" title="安全趋势"></security-trend>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <asset-online id="assetOnline" title="在线资产"></asset-online>
        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <protocol-chart id="protocolDistribution" title="TOP 20 应用层协议" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <protoco-table :dataList="protocolData"></protoco-table>
            </div>
          </protocol-chart>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <table-wrapper title="TOP 20 网络会话" tableHeight="250px">
            <net-session :dataList="netSessionData"></net-session>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="27" :sm="27" :lg="6">
          <asset-distribution id="assetDistribution" title="资产分布" :height="350"></asset-distribution>
        </el-col>
        <el-col :xs="27" :sm="27" :lg="9">
          <event-distribution-chart id="evnetDistributionChart" title="事件分布" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <event-distribution-table :dataList="evnetDistributionData"></event-distribution-table>
            </div>
          </event-distribution-chart>
        </el-col>
        <el-col :xs="27" :sm="24" :lg="9">
          <vulne-distribution-chart id="vulneDistributionChart" title="漏洞分布" :height="350" width="50%" float="left">
            <div style="padding: 30px 19px 0">
              <vulne-distribution-table :dataList="vulneDistributionData"></vulne-distribution-table>
            </div>
          </vulne-distribution-chart>
        </el-col>
      </el-row>
    </div>

    <div class="wrapper">
      <el-row :gutter="20">
        <el-col :xs="27" :sm="27" :lg="9">
          <table-wrapper title="网络事件" tableHeight="250px">
            <net-event :dataList="netEventData"></net-event>
          </table-wrapper>
        </el-col>
        <el-col :xs="27" :sm="27" :lg="6">
          <table-wrapper title="新增资产" tableHeight="250px">
            <additional-asset :dataList="additionalAssetData"></additional-asset>
          </table-wrapper>
        </el-col>
        <el-col :xs="27" :sm="27" :lg="9">
          <table-wrapper title="漏洞发现" tableHeight="250px">
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
  import { fetchKeyopEvent } from '@/api/keyop'
  import { fetchAssets, fetchActiveAssets } from '@/api/asset'

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
        totalAssets: 0,
        TodayAssetsNum: 0,
        OnlineAssetsNum: 0,
        netSessionData: [],
        protocolData: [],
        netEventData: [],
        evnetDistributionData: [],
        vulneDistributionData: [],
        additionalAssetData: [],
        vulneDiscoveryData: []
      }
    },
    computed: {
      ...mapState({
        currentAgent: (state) => state.app.currentAgent
      })
    },
    watch: {
      '$store.state.app.currentAgent': {
          handler: function(cur, pre) {
            console.log('cur', cur)
            this.getAssetData('/reload')
            this.getKeyopEventData()
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
        fetchAssets(params, surfix).then(res => {
          const OnlineAssets = res.data.data
          this.OnlineAssetsNum = OnlineAssets.length
        })
        fetchActiveAssets(params, '1d').then(res => {
          this.TodayAssetsNum = res.data.data.length
          console.log('res.data.data', res.data.data)
        })
      },
      getKeyopEventData() {
        const params = {
          probe: this.currentAgent.probe,
          iface: this.currentAgent.iface,
          range: 'LAST_DAY'
        }
        fetchKeyopEvent(params).then(res => {
          this.securityEvent = res.data.data.data
          this.securityEventNum = this.securityEvent.length
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
      getNetEventData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.netEventData = data.netEvent
            }
          })
      },
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
      this.getProtocolData()
      this.getNetSessionData()
      this.getNetEventData()
      this.getAdditionalAssetData()
      this.getVulneDiscoveryData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
    .wrapper
      margin-top: 18px
</style>
