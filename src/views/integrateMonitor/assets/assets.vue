<template>
  <div class="container">
    <!--5个指标容器-->
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="4">
          <indicator title="总资产" icon="icon-totalAssets" :data="totalAssetData" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="1">
          <indicator title="近一周发现" icon="icon-totalAssets" :data="recentWeekData" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="2">
          <indicator title="确认资产" icon="icon-totalAssets" :data="confirmAssetData" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="3">
          <indicator title="未知资产" icon="icon-totalAssets" :data="unkownAssetData"></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="4">
          <indicator title="可疑资产" icon="icon-totalAssets" :data="suspiAssetData"></indicator>
        </el-col>
      </el-row>
    </div>
    <!--2个图表容器-->
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetStat id="assetStat" title="在线资产统计" ></assetStat>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <assetTrend id="assetTrend" title="在线资产趋势"></assetTrend>
        </el-col>
      </el-row>
    </div>
    <!--一个列表容器-->
    <div class="table-wrapper">
      <el-row >
        <el-col :xs="24" :sm="24" :lg="24">
          <table-wrapper title="实时活动资产" tableHeight="250px">
            <assetOnline  :dataList="assetOnlineData"></assetOnline>
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
        totalAssetData: 0,
        recentWeekData: 0,
        confirmAssetData: 0,
        unkownAssetData: 0,
        suspiAssetData: 0,
        assetOnlineData: []
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
    .table-wrapper
    .chart-wrapper
      margin-top: 73px
</style>
