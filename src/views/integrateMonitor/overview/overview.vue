<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="安全事件" icon="icon-log" link="/event-dynamic/event-list" :data="securityEvent"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="漏洞数量" icon="icon-webloudongjiance" link="/vulne-dynamic/vulne-list" :data="6"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="网络资产" icon="icon-network-assets" link="/asset-dynamic/asset-list" :data="totalAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="资产活动数量" icon="icon-networkAssets" :data="66"></indicator>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <security-trend id="securityTrend" title="安全趋势"></security-trend>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <asset-distribution id="assetDistribution" title="资产分布"></asset-distribution>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="8">
          <event-distribution id="eventDistribution" title="安全事件分布"></event-distribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <vulne-distribution id="vulnerabilityDistribution" title="漏洞分布"></vulne-distribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <net-flow id="netFlow" title="网络流量"></net-flow>
        </el-col>
      </el-row>
    </div>

    <div class="table-wrapper">
      <el-row :gutter="20">
        <el-col :xs="30" :sm="30" :lg="10">
          <table-wrapper title="网络事件" tableHeight="250px">
              <net-event :dataList="netEventData"></net-event>
          </table-wrapper>
        </el-col>
        <el-col :xs="30" :sm="30" :lg="6">
          <table-wrapper title="资产发现" tableHeight="250px">
              <asset-discovery :dataList="assetDiscoveryData"></asset-discovery>
          </table-wrapper>
        </el-col>
        <el-col :xs="30" :sm="30" :lg="8">
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
  import VulneDistribution from './components/vulneDistribution'
  import AssetDistribution from './components/assetDistribution'
  import EventDistribution from './components/eventDistribution'
  import NetFlow from './components/netFlow'

  import TableWrapper from 'components/table/tableWrapper'
  import NetEvent from './components/netEvent'
  import AssetDiscovery from './components/assetDiscovery'
  import VulneDiscovery from './components/vulneDiscovery'

  import axios from 'axios'

  export default {
    components: {
      Indicator,
      SecurityTrend,
      VulneDistribution,
      AssetDistribution,
      EventDistribution,
      NetFlow,
      TableWrapper,
      NetEvent,
      AssetDiscovery,
      VulneDiscovery
    },
    data() {
      return {
        securityEvent: 0,
        totalAssets: 0,
        netEventData: [],
        assetDiscoveryData: [],
        vulneDiscoveryData: []
      }
    },
    methods: {
      getNetEventData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.netEventData = data.netEvent
            }
          })
      },
      getAssetDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.assetDiscoveryData = data.assetDiscovery
            }
          })
      },
      getVulneDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.vulneDiscoveryData = data.vulneDiscovery
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
      this.getVulneDiscoveryData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
    .chart-wrapper
    .table-wrapper
      margin-top: 18px
</style>
