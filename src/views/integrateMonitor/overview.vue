<template>
  <div class="container">
    <div class="data-index">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="item">
            <div class="title">
              <i class="icon-log"></i><span>安全事件</span>
            </div>
            <div class="content">
              <span>数量:</span><span class="item-data">{{securityEvent || 0}}</span>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="item">
            <div class="title">
              <i class="icon-webloudongjiance"></i><span>漏洞数量</span>
            </div>
            <div class="content">
              <span>数量:</span><span class="item-data">6</span>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="item">
            <div class="title">
              <i class="icon-network-assets"></i><span>网络资产</span>
            </div>
            <div class="content">
              <span>数量:</span><span class="item-data">{{totalAssets || 0}}</span>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="item">
            <div class="title">
              <i class="icon-networkAssets"></i><span>资产活动数量</span>
            </div>
            <div class="content">
              <span>数量:</span><span class="item-data">65</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper chart-up">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="item">
            <div class="header">
              <span>安全趋势</span>
            </div>
            <trend-line id="security-trend" :style="{width: '100%', height: '280px'}"></trend-line>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="item">
            <div class="header">
              <span>资产分布</span>
            </div>
            <bar id="asset-distribution" :style="{width: '100%', height: '280px'}"></bar>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper chart-down">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="item">
            <div class="header">
              <span>安全事件分布</span>
            </div>
            <events-distribution id="eventsDistribution" :style="{width: '100%', height: '280px'}"
                                 :data="target"></events-distribution>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="item">
            <div class="header">
              <span>漏洞分布</span>
            </div>
            <barChart id="overviewVulnerability" :style="{width: '100%', height: '280px'}"></barChart>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="item">
            <div class="header">
              <span>网络流量</span>
            </div>
            <net-flow id="netFlow" :style="{width: '100%', height: '280px'}"></net-flow>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="list">
      <el-row :gutter="20">
        <el-col :xs="30" :sm="30" :lg="10">
          <div class="item">
            <div class="header">
              <span>网络事件</span>
            </div>
            <net-event-table :data="netEventData"></net-event-table>
          </div>
        </el-col>
        <el-col :xs="18" :sm="18" :lg="6">
          <div class="item">
            <div class="header">
              <span>资产发现</span>
            </div>
            <asset-discovery-table :data="assetDiscovery"></asset-discovery-table>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="item">
            <div class="header">
              <span>漏洞发现</span>
            </div>
            <vulnerability-discovery-table></vulnerability-discovery-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import TrendLine from 'components/charts/line'
  import barChart from 'components/charts/overviewVulnerability'
  import Bar from 'components/charts/bar'
  import EventsDistribution from 'components/charts/eventsDistribution'
  import NetFlow from 'components/charts/netFlow'
  import NetEventTable from 'components/table/netEventTable'
  import AssetDiscoveryTable from 'components/table/assetDiscoveryTable'
  import VulnerabilityDiscoveryTable from 'components/table/vulnerabilityDiscoveryTable'

  import axios from 'axios'

  export default {
    components: {
      TrendLine,
      barChart,
      Bar,
      EventsDistribution,
      NetFlow,
      NetEventTable,
      AssetDiscoveryTable,
      VulnerabilityDiscoveryTable
    },
    data() {
      return {
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
    created() {
      axios.get('/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0')
        .then((res) => {
          var m = new Map()
          for (let i = 0; i < res.data.data.data.length; i++) {
            var mKey = res.data.data.data[i].rule.severity
            var mValue = res.data.data.data[i].count
            this.securityEvent += mValue
            if (mKey === 'HIGH') {
              if (m.get('HIGH') != null) {
                m.set('HIGH', m.get('HIGH') + res.data.data.data[i].count)
              } else {
                m.set('HIGH', res.data.data.data[i].count)
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
          console.log(m.get('HIGH'))
          console.log(m.get('MEDIUM'))
          console.log(m.get('LOW'))
        })
        .catch((err) => {
          console.log(err)
        })
      // axios.get('/api/assets/assets?probe=gushenxing&iface=eth0')
        axios.get('/api/ui/data?eventId=ui-dashboard-summary&probe=gushenxing&iface=eth0')
        .then((res) => {
          this.totalAssets = res.data.data.data.assetSummary.NEW.length + res.data.data.data.assetSummary.VALID.length + res.data.data.data.assetSummary.INVALID.length + res.data.data.data.assetSummary.IGNORED.length
        })
        .catch((err) => {
          console.log(err)
        })
        axios.get('/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0')
          .then((res) => {
            this.netEventData = res.data.data
            console.log('***********', this.netEventData)
          })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .container
    .data-index
    .chart-wrapper
    .list
      margin-top: 18px
      .item
        margin-bottom: 28px
        position: relative
        .title
          position: absolute
          top: -13px
          left: 27px
          width: 130px
          height: 26px
          beveled-corners($color-theme, 5px)
          color: $color-theme-r
          font-size: 16px
          text-align: center
          line-height: 26px
        .content
          font-size: 20px
          font-weight: 700
          padding-left: 27px
          line-height: 100px
          border: 1px solid $color-theme-d
          max-width: 314px
          height: 100px
          color: $color-theme
          .item-data
            color: $color-theme-d
            font-size: 28px
    .chart-wrapper
    .list
      .item
        border: 1px solid $color-theme-d
        .header
          padding-left: 16px
          height: 50px
          line-height: 50px
          border-top: 1px solid $color-theme-d
          border-right: 1px solid $color-theme-d
          border-left: 8px solid  $color-theme-d
          border-bottom: 2px solid  $color-theme-d
    .chart-wrapper
      .item
        height: 330px
    .list
      .item
        height: 350px
</style>
