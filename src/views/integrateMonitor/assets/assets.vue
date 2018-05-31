<template>
  <div class="container">
    <!--5个指标容器-->
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="4">
          <indicator title="总资产" icon="icon-totalAssets" :data="assets.totalAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="1">
          <indicator title="近一周发现" icon="icon-totalAssets" :data="assets.totalNewAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="2">
          <indicator title="确认资产" icon="icon-totalAssets" :data="assets.totalValidAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="3">
          <indicator title="未知资产" icon="icon-totalAssets" :data="unkownAssets"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="4">
          <indicator title="可疑资产" icon="icon-totalAssets" :data="assets.totalAssetsAlerts"></indicator>
        </el-col>
      </el-row>
    </div>
    <!--2个图表容器-->
    <div class="wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetStat id="assetStat" title="在线资产统计"></assetStat>
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
          <table-wrapper title="实时活动资产" tableHeight="250px">
            <assetOnline :dataList="assetOnlineData"></assetOnline>
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
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      Indicator,
      assetStat,
      assetTrend,
      assetOnline,
      TableWrapper
    },
    data() {
      return {
        assetOnlineData: []
      }
    },
    computed: {
      ...mapGetters(['assets']),
      unkownAssets() {
        return this.assets.totalAssets - this.assets.totalAssetsAlerts - this.assets.totalValidAssets
      }
    },
    methods: {
      getTotalAssetData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.totalAssetData = data.totalAsset
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
      }
    },
    created() {
      this.getTotalAssetData()
      this.getRecentWeekData()
      this.getConfirmAssetData()
      this.getUnkownAssetData()
      this.getsuspiAssetData()
      this.getAssetOnlineData()
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
