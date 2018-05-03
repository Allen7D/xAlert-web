<template>
  <div class="container">
    <div class="data-index">
      <div class="item">
        <div class="title">
          <i class="icon-totalAssets"></i>
          <span>总资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">{{totalAssets || 0}}</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-discovery"></i>
          <span>近一周发现</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">8888</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-tick"></i>
          <span>确认资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">{{validAssets || 0}}</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-questionMark"></i>
          <span>未知资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">{{newAssets || 0}}</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-exclamationPoint"></i>
          <span>可疑资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">{{invalidAssets || 0}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="item">
        <div class="header">
          <span>资产统计</span>
        </div>
        <asset-stat id="assetsOnline" :style="{height:'280px', width:'100%'}"></asset-stat>
      </div>
      <div class="item">
        <div class="header">
          <span>资产趋势</span>
        </div>
        <asset-trend id="assetTrend" :style="{height:'280px', width:'100%'}"></asset-trend>
      </div>
    </div>
    <div class="table-wrapper">
      <div class="item">
        <div class="header">
          <span>实时活动资产</span>
        </div>
        <asset-online :dataList="assetOnlineData"></asset-online>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import assetStat from './components/assetStat'
  import assetTrend from './components/assetTrend'
  import assetOnline from './components/assetOnline'

  import axios from 'axios'
  export default {
    components: {
      assetStat,
      assetTrend,
      assetOnline
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
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .data-index
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
</style>
