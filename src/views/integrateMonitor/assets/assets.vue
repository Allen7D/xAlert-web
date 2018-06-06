<template>
  <div class="container">
    <!--5个指标容器-->
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="4">
          <indicator title="总资产" icon="icon-totalAssets" :data="assetData.totalAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="1">
          <indicator title="近一周发现" icon="icon-totalAssets" :data="assetData.totalRecentWeekAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="2">
          <indicator title="确认资产" icon="icon-totalAssets" :data="assetData.totalConfirmedAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="3">
          <indicator title="未知资产" icon="icon-totalAssets" :data="assetData.totalNewAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="4">
          <indicator title="可疑资产" icon="icon-totalAssets" :data="assetData.totalAssetsAlerts"></indicator>
        </el-col>
      </el-row>
    </div>
    <!--2个图表容器-->
    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetStat id="assetStat" title="在线资产统计" :data="assetStatData" titleType="simple" :height="330" width="50%" float="left">
            <div style="padding: 20px 19px 0">
              <assetStatTable :dataList="assetStatData"></assetStatTable>
            </div>
          </assetStat>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <assetTrend id="assetTrend" title="在线资产趋势"></assetTrend>
        </el-col>
      </el-row>
    </div>
    <!--一个列表容器-->
    <div class="wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <table-wrapper title="实时活动资产" tableHeight="350px" wrapperHeight="450px">
            <assetOnline :dataList="assetData.data" v-if="assetData.data.length > 0"></assetOnline>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import assetStat from './components/assetStat'
  import assetTrend from './components/assetTrend'
  import assetOnline from './components/assetOnline'
  import Indicator from 'components/indicator/indicator'
  import TableWrapper from 'components/table/tableWrapper'
  import assetStatTable from './components/assetStatTable'
  import axios from 'axios'
//  import {mapGetters} from 'vuex'
  import assetApi from '@/api/asset'
  import constants from '@/utils/constants'
  export default {
    components: {
      Indicator,
      assetStat,
      assetTrend,
      assetOnline,
      TableWrapper,
      assetStatTable
    },
    data() {
      return {
        assetData: {
          data: {},
          totalAssets: 0,
          totalRecentWeekAssets: 0,
          totalConfirmedAssets: 0,
          totalAssetsAlerts: 0,
          totalNewAssets: 0
        },
        assetStatData: [],
        assetOnlineData: []
      }
    },
//    computed: {
//      ...mapGetters(['assets']),
//      unkownAssets() {
//        return this.assets.totalAssets - this.assets.totalAssetsAlerts - this.assets.totalValidAssets
//      }
//    },
    methods: {
      getAssetData() {
        assetApi.fetchAssets({}, '/reload').then(res => {
          const data = res.data.data
          this.assetData.data = data
          const stat = {}
          let set = new Set()
          data.forEach((item, index) => {
            if (set.has(`${item.probe}-${item.iface}`)) {
              stat[`${item.probe}-${item.iface}`] += 1
            } else {
              set.add(`${item.probe}-${item.iface}`)
              stat[`${item.probe}-${item.iface}`] = 1
            }
          })
          for (let key in stat) {
            this.assetStatData.push({name: key, value: stat[key]})
          }
        })
        assetApi.fetchActiveAssets({}, '1w').then(res => {
          this.assetData.totalRecentWeekAssets = res.data.data.length
        })
      },
      getAssetsSummaryData() {
        assetApi.fetchAssetsSummary({eventId: 'ui-dashboard-summary'}).then(res => {
          const data = res.data.data.data
          const assetSummary = data.assetSummary
          this.assetData.totalAssets = assetSummary[constants.ASSETS.STATUS_NEW].length + assetSummary[constants.ASSETS.STATUS_VALID].length +
            assetSummary[constants.ASSETS.STATUS_INVALID].length + assetSummary[constants.ASSETS.STATUS_IGNORED].length
          this.assetData.totalAssetsAlerts = assetSummary[constants.ASSETS.ALERT_MULTIPLE_MAC].length + assetSummary[constants.ASSETS.ALERT_MULTIPLE_OS].length
          this.assetData.totalNewAssets = assetSummary[constants.ASSETS.STATUS_NEW].length
          this.assetData.totalConfirmedAssets = this.assetData.totalAssets - this.assetData.totalNewAssets
        })
      },
      getTotalAssetData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.totalAssetData = data
            }
          })
      },
      getRecentWeekData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.recentWeekData = data.recentWeek
            }
          })
      },
      getConfirmAssetData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.confirmAssetData = data.confirmAsset
            }
          })
      },
      getUnkownAssetData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.unkownAssetData = data.unkownAsset
            }
          })
      },
      getsuspiAssetData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.suspiAssetData = data.suspiAsset
            }
          })
      },
      getAssetOnlineData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.assetOnlineData = data.assetOnline
            }
          })
      },
      getAssetStatData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.assetStatData = data.assetStat
            }
          })
      }
    },
    created() {
      this.getAssetData()
      this.getAssetsSummaryData()
//      this.getTotalAssetData()
//      this.getRecentWeekData()
//      this.getConfirmAssetData()
//      this.getUnkownAssetData()
//      this.getsuspiAssetData()
//      this.getAssetOnlineData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
      margin-top: 20px

  .container
    .wrapper
      margin-top: 73px
</style>
