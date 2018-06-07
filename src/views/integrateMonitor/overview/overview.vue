<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="安全事件" icon="icon-log" link="/event-dynamic/event-list" :data="event.total"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="漏洞数量" icon="icon-webloudongjiance" link="/vulne-dynamic/vulne-list" :data="6"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="网络资产" icon="icon-network-assets" link="/asset-dynamic/asset-list" :data="asset.total"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <indicator title="资产活动数量" icon="icon-networkAssets" :data="event.active"></indicator>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="40">
        <!--<el-col :xs="24" :sm="24" :lg="12">-->
          <!--<security-trend id="securityTrend" title="安全趋势"></security-trend>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :lg="12">-->
          <!--<asset-distribution id="assetDistribution" title="资产分布"></asset-distribution>-->
        <!--</el-col>-->
        <el-col :xs="24" :sm="24" :lg="24">
          <net-flow id="netFlow" title="应用层流量统计" :data="TotalInByL7" width="50%" float="left">
            <div style="padding: 20px 19px 0">
              <NetFlowTab :dataList="NetFlowTabList"></NetFlowTab>
            </div>
          </net-flow>
        </el-col>

      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <vulne-distribution id="vulnerabilityDistribution" title="漏洞分布"></vulne-distribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <event-distribution id="eventDistribution" title="安全事件分布" :data="eventChartData" titleType="simple" width="50%" float="left">
            <div style="padding: 45px 19px 0">
              <EventDistributionTab :dataList="eventDistributionList"></EventDistributionTab>
            </div>
          </event-distribution>
        </el-col>
      </el-row>
    </div>

    <div class="table-wrapper">
      <el-row :gutter="20">
        <el-col :xs="28" :sm="28" :lg="14">
          <table-wrapper title="资产发现" tableHeight="250px">
              <asset-discovery :dataList="assetDiscoveryData"></asset-discovery>
          </table-wrapper>
        </el-col>
        <el-col :xs="28" :sm="28" :lg="10">
          <table-wrapper title="漏洞发现" tableHeight="250px">
              <vulne-discovery :dataList="vulneDiscoveryData"></vulne-discovery>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>

    <div class="table-wrapper">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="24">
          <table-wrapper title="网络事件" tableHeight="250px">
            <net-event :dataList="this.event.list"></net-event>
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
  import EventDistributionTab from './components/eventDistributionTab'
  import NetFlow from './components/netFlow'
  import NetFlowTab from './components/netFlowTab'

  import TableWrapper from 'components/table/tableWrapper'
  import NetEvent from './components/netEvent'
  import AssetDiscovery from './components/assetDiscovery'
  import VulneDiscovery from './components/vulneDiscovery'

  import axios from 'axios'
  import flowApi from '@/api/flow'
  import keyopApi from '@/api/keyop'
  import assetApi from '@/api/asset'
  import constants from '@/utils/constants'
  export default {
    components: {
      Indicator,
      SecurityTrend,
      VulneDistribution,
      AssetDistribution,
      EventDistribution,
      EventDistributionTab,
      NetFlow,
      NetFlowTab,
      TableWrapper,
      NetEvent,
      AssetDiscovery,
      VulneDiscovery
    },
    data() {
      return {
        netEventData: [],
        assetDiscoveryData: [],
        TotalInByL7: [],
        NetFlowTabList: [],
        TotalOutByL7: [],
        vulneDiscoveryData: [],
        asset: {
          total: 0
        },
        event: {
          total: 0,
          high: 0,
          medium: 0,
          low: 0,
          active: 0,
          list: []
        }
      }
    },
    computed: {
      agents() {
        return this.$store.app.agents
      },
      totalAssets() {
        return this.$store.getters.totalAssets
      },
      securityEvent() {
        return this.$store.getters.securityEvent
      },
      eventChartData() {
        return [
          {value: this.event.high, name: '重大'},
          {value: this.event.medium, name: '较大'},
          {value: this.event.low, name: '一般'}
        ]
      },
      eventDistributionList() {
        return [
          {eventGrade: '重大', count: this.event.high},
          {eventGrade: '较大', count: this.event.medium},
          {eventGrade: '一般', count: this.event.low}
        ]
      }
//      totalFlowByteIn() {
//        return this.$store.getters.totalFlowByteIn
//      }
    },
    methods: {
      getFlowData(params) {
        // 流量的数据
        flowApi.fetchFlowRule(params).then(res => {
          const data = res.data.data.data
          this.TotalInByL7 = data.total.totalInByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
          this.NetFlowTabList = data.total.totalInByL7.map(function (item, index, array) {
            return {style: constants.L7_PROTO[item.key], flows: item.y}
          })

          this.TotalOutByL7 = data.total.totalOutByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
        })
      },
      getKeyopData() {
        // 最近一年的数据
        keyopApi.fetchKeyopEvent({range: 'LAST_YEAR'}).then(res => {
          const data = res.data.data.data
          this.event.list = data
          console.log('this.event.list', this.event.list)
          data.forEach((item, index, array) => {
            this.event.total += item.count.count
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              this.event.high += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              this.event.medium += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              this.event.low += item.count.count
            }
          })
        })
      },
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
        assetApi.fetchAssets({}, '/reload').then(res => {
          const data = res.data.data
          this.asset.total = data.length
        })
        // 资产活动数量
        assetApi.fetchActiveAssets({range: '1y'}).then(res => {
          this.event.active = res.data.data.length
        })

        // 轮巡 发现最新的前10资产
        setInterval(() => {
          assetApi.fetchActiveAssets({range: '1h'}).then(res => {
            const data = res.data.data
            this.assetDiscoveryData = data.slice(0, 10)
          })
        }, 10000)
      },
      getVulneDiscoveryData() {
        this.assetDiscoveryData = []
      }
    },
    created() {
      // 顶部，4个指标的数据
      // 中间，5个图表的数据
      this.getFlowData({eventId: 'ui-flows-summary'})
      this.getKeyopData()
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
