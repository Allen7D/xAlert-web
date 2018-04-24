<template>
  <div class="container">
    <div class="data-index">
      <data-display-box :iconClass="'icon-totalAssets'" :dataName="'总资产'" :handleData="totalAssets"></data-display-box>
      <data-display-box :iconClass="'icon-discovery'" :dataName="'近一周发现'" :handleData="otherData"></data-display-box>
      <data-display-box :iconClass="'icon-tick'" :dataName="'确认资产'" :handleData="validAssets"></data-display-box>
      <data-display-box :iconClass="'icon-questionMark'" :dataName="'未知资产'" :handleData="newAssets"></data-display-box>
      <data-display-box :iconClass="'icon-exclamationPoint'" :dataName="'可疑资产'" :handleData="invalidAssets"></data-display-box>
    </div>
    <div class="chart-wraper chart-up">
      <div class="item">
        <div class="header">
          <span>资产统计</span>
        </div>
        <pieChart id="assetsOnline" :style="{height:'280px', width:'100%'}"></pieChart>
      </div>
      <div class="item">
        <div class="header">
          <span>资产趋势</span>
        </div>
        <lineChart id="assetTrend" :style="{height:'280px', width:'100%'}"></lineChart>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <div class="header">
          <span>实时活动资产</span>
        </div>
        <asset-online-table></asset-online-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import pieChart from 'components/charts/assetsOnline'
  import lineChart from 'components/charts/assetsTrend'
  import assetOnlineTable from 'components/table/assetOnlineTable'

  import axios from 'axios'
  import dataDisplayBox from 'components/dataDisplayBox/dataDisplayBox'
  import { getDataBox } from 'components/dataDisplayBox/handleDataDisplayBox'
  export default {
    components: {
      pieChart,
      lineChart,
      assetOnlineTable,
      dataDisplayBox
    },
    data() {
      return {
        totalAssets: 0,
        validAssets: 0,
        newAssets: 0,
        invalidAssets: 0
      }
    },
    created() {
      this.initData()
      // axios.get('/api/ui/data?eventId=ui-dashboard-summary&probe=gushenxing&iface=eth0')
      //   .then((res) => {
      //     this.totalAssets = res.data.data.data.assetSummary.NEW.length + res.data.data.data.assetSummary.VALID.length + res.data.data.data.assetSummary.INVALID.length + res.data.data.data.assetSummary.IGNORED.length
      //     this.validAssets = res.data.data.data.assetSummary.VALID.length
      //     this.newAssets = res.data.data.data.assetSummary.NEW.length
      //     this.invalidAssets = res.data.data.data.assetSummary.MULTIPLE_MAC.length
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    methods: {
      initData() {
        getDataBox('totalAssets').then((result) => {
          console.log('###########2#1', result)
          this.totalAssets = result.afterHandleData
          this.validAssets = result.afterValidAseet
          this.invalidAssets = result.afterInvalidAsset
          this.newAssets = result.afterNewAsset
        })
        getDataBox('otherData').then((result) => {
          console.log('###########1#2', result)
          this.otherData = result.afterHandleData
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .data-index
  .chart-wraper
  .list
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

  .chart-wraper
  .list
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

  .list
    margin-top: 65px
    .item
      height: 400px
</style>
