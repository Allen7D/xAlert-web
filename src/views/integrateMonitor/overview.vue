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
              <net-event :data="netEventData"></net-event>
          </table-wrapper>
        </el-col>
        <el-col :xs="18" :sm="18" :lg="6">
          <table-wrapper title="资产发现" tableHeight="250px">
              <asset-discovery :data="assetDiscovery"></asset-discovery>
          </table-wrapper>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <table-wrapper title="漏洞发现" tableHeight="250px">
              <vulnerability-discovery></vulnerability-discovery>
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
        assetDiscovery: {
          time: null,
          ip: null,
          status: null
        },
        netEventData: null
      }
    },
    methods: {
      receive(data) {
        this.params = data.params
      }
    },

    created() {
      axios.get('/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0')
        .then((res) => {
          var m = new Map()
          let data = res.data.data.data
          for (let i = 0; i < data.length; i++) {
            var mKey = data[i].rule.severity
            var mValue = data[i].count
            this.securityEvent += mValue
            if (mKey === 'HIGH') {
              if (m.get('HIGH') != null) {
                m.set('HIGH', m.get('HIGH') + data[i].count)
              } else {
                m.set('HIGH', data[i].count)
              }
            } else if (mKey === 'MEDIUM') {
              if (m.get('MEDIUM') != null) {
                m.set('MEDIUM', m.get('MEDIUM') + mValue)
              } else {
                m.set('MEDIUM', mValue)
              }
            } else {
              if (m.get('LOW') != null) {
                m.set('LOW', m.get('LOW') + mValue)
              } else {
                m.set('LOW', mValue)
              }
            }
          }
          this.target.high = m.get('HIGH')
          this.target.medium = m.get('MEDIUM')
          this.target.low = m.get('LOW')
        })
        .catch((err) => {
          console.log(err)
        })

      // axios.get('/api/assets/assets?probe=gushenxing&iface=eth0')
        axios.get('/api/ui/data?eventId=ui-dashboard-summary&probe=gushenxing&iface=eth0')
        .then((res) => {
          let data = res.data.data.data
          this.totalAssets = data.assetSummary.NEW.length + data.assetSummary.VALID.length + data.assetSummary.INVALID.length + data.assetSummary.IGNORED.length
        })
        .catch((err) => {
          console.log(err)
        })
        axios.get('/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0')
          .then((res) => {
            this.netEventData = res.data.data
          })
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
