<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="安全事件" icon="icon-log" :data="securityEvent"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="漏洞数量" icon="icon-webloudongjiance" :data="6"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="网络资产" icon="icon-network-assets" :data="totalAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="资产活动数量" icon="icon-networkAssets" :data="66"></indicator>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <chart-wrapper title="安全趋势">
            <template slot="chart">
              <trend-line id="security-trend"></trend-line>
            </template>
          </chart-wrapper>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <asset-distribution id="asset-distribution" title="资产分布"></asset-distribution>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="8">
          <chart-wrapper title="安全事件分布">
            <div slot="chart">
              <events-distribution id="eventsDistribution" :data="target"></events-distribution>
            </div>
          </chart-wrapper>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <overview-vulnerability id="overviewVulnerability" title="漏洞分布"></overview-vulnerability>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <net-flow id="netFlow" title="网络流量"></net-flow>
        </el-col>
      </el-row>
    </div>

    <div class="list">
      <el-row :gutter="20">
        <el-col :xs="30" :sm="30" :lg="10">
          <table-wrapper title="网络事件" tableHeight="250px">
              <net-event :list="netEventData"></net-event>
          </table-wrapper>
        </el-col>
        <el-col :xs="18" :sm="18" :lg="6">
          <table-wrapper title="资产发现" tableHeight="250px">
              <asset-discovery :list="assetDiscoveryData"></asset-discovery>
          </table-wrapper>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <table-wrapper title="漏洞发现" tableHeight="250px">
              <vulnerability-discovery :list="vulnerabilityDiscoveryData"></vulnerability-discovery>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Indicator from 'components/indicator/indicator'

  import ChartWrapper from 'components/charts/chartWrapper'
  import TrendLine from 'components/charts/line'
  import OverviewVulnerability from 'components/charts/overviewVulnerability'
  import AssetDistribution from 'components/charts/bar'
  import EventsDistribution from 'components/charts/eventsDistribution'
  import NetFlow from 'components/charts/netFlow'

  import TableWrapper from 'components/table/tableWrapper'
  import NetEvent from 'components/table/netEventTable'
  import AssetDiscovery from 'components/table/assetDiscoveryTable'
  import VulnerabilityDiscovery from 'components/table/vulnerabilityDiscoveryTable'

  import axios from 'axios'

  export default {
    components: {
      Indicator,
      ChartWrapper,
      TableWrapper,
      TrendLine,
      OverviewVulnerability,
      AssetDistribution,
      EventsDistribution,
      NetFlow,
      NetEvent,
      AssetDiscovery,
      VulnerabilityDiscovery
    },
    data() {
      return {
        params: [],
        securityEvent: 0,
        totalAssets: 0,
        target: {
          high: 0,
          medium: 0,
          low: 0
        },
        netEventData: [],
        assetDiscoveryData: [],
        vulnerabilityDiscoveryData: []
      }
    },
    methods: {
      getNetEventData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.netEventData = data.netEvent
            }
          })
      },
      getAssetDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.assetDiscoveryData = data.assetDiscovery
            }
          })
      },
      getVulnerabilityDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.vulnerabilityDiscoveryData = data.vulnerabilityDiscovery
            }
          })
      }
    },
    created() {
      // 顶部，4个指标的数据
      // 中间，5个图表的数据
      // 底部，3个列表的数据
      this.getNetEventData()
      this.getAssetDiscoveryData()
      this.getVulnerabilityDiscoveryData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
    .chart-wrapper
    .list
      margin-top: 18px
</style>
