<!--<template>-->
  <!--<div class="container">-->
    <!--<div class="tab-wrapper">-->
      <!--<el-tabs type="card" v-model="activeName">-->
        <!--<el-tab-pane label="资产情况" name="first">-->
          <!--资产情况-->
        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="仪表盘" name="second">-->
          <!--仪表盘-->
        <!--</el-tab-pane>-->
      <!--</el-tabs>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<template>
  <div class="container">
    <div class="chart-wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <assetTrend id="analysis-assetOnline" title="资产在线数据统计趋势"></assetTrend>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <assetTypeStatistics id="assetTypeStatistics" title="资产类型统计"></assetTypeStatistics>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <gradeDistribution id="gradeDestribution" title="等级分布"></gradeDistribution>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import assetStat from './components/assetStat'
  import assetTrend from './components/assetTrend'
  import assetOnline from './components/assetOnline'
  import assetTypeStatistics from './components/assetTypeStatistics'
  import gradeDistribution from './components/gradeDistribution'
  import axios from 'axios'
  export default {
    components: {
      assetStat,
      assetTrend,
      assetOnline,
      assetTypeStatistics,
      gradeDistribution
    },
    data() {
      return {
        totalAssets: 0,
        validAssets: 0,
        newAssets: 0,
        invalidAssets: 0,
        assetOnlineData: [],
        activeName: 'first'
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
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  /*.data-index
  .chart-wrapper
  .table-wrapper
    display: flex
    .item
      flex: 1
      align-items: space-around
      margin-right: 75px
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
        width: 314px
        height: 100px
        color: $color-theme
        .item-data
          color: $color-theme-d
          font-size: 28px

  .chart-wrapper
  .table-wrapper
    margin-top: 58px
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

  .table-wrapper
    margin-top: 65px
    .item
      height: 400px
      */
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .container
    .el-tabs--card > .el-tabs__header {
      border-bottom: none;
    }
  .container
    .el-tabs__header{
      margin 0;
      background-color: bisque
    }
</style>
