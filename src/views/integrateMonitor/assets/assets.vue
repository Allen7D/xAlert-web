<template>
  <div class="container">
    <!--5个指标容器-->
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="4">
          <indicator title="总资产" icon="icon-totalAssets" :data="8888" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="1">
          <indicator title="近一周发现" icon="icon-totalAssets" :data="8888" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="2">
          <indicator title="确认资产" icon="icon-totalAssets" :data="8888" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="3">
          <indicator title="未知资产" icon="icon-totalAssets" :data="8888" ></indicator>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="4" :push="4">
          <indicator title="可疑资产" icon="icon-totalAssets" :data="8888" ></indicator>
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
        totalAssets: 0,
        validAssets: 0,
        newAssets: 0,
        invalidAssets: 0,
        assetOnlineData: []
      }
    },
    methods: {
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
      this.getAssetOnlineData()
      // axios.get('/api/assets/assets?probe=gushenxing&iface=eth0')
      //   .then((res) => {
      //     this.totalAssets = res.data.data.data.length
      //   })
      axios.get('/api/ui/data?eventId=ui-dashboard-summary&probe=gushenxing&iface=eth0')
        .then((res) => {
          this.totalAssets = res.data.data.data.assetSummary.NEW.length + res.data.data.data.assetSummary.VALID.length + res.data.data.data.assetSummary.INVALID.length + res.data.data.data.assetSummary.IGNORED.length
          this.validAssets = res.data.data.data.assetSummary.VALID.length
          this.newAssets = res.data.data.data.assetSummary.NEW.length
          this.invalidAssets = res.data.data.data.assetSummary.MULTIPLE_MAC.length
        })
        .catch((err) => {
          console.log(err)
        })
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
