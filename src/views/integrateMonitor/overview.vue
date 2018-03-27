<template>
  <div class="container">
    <div class="data-index">
      <div class="item">
        <div class="title">
          <i class="icon-log"></i>
          <span>安全事件</span>
        </div>
        <div class="content">
          <div class="number">
            <span>数量:</span>
            <span class="item-data">13</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-webloudongjiance"></i>
          <span>漏洞数量</span>
        </div>
        <div class="content">
          <div class="number">
            <span>数量:</span>
            <span class="item-data">6</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-network-assets"></i>
          <span>网络资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span>数量:</span>
            <span class="item-data">532</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class="icon-networkAssets"></i>
          <span>资产活动数量</span>
        </div>
        <div class="content">
          <div class="number">
            <span>数量:</span>
            <span class="item-data">65</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-wraper chart-up">
      <div class="item">
        <div class="header">
          <span>安全趋势</span>
        </div>
        <trend-line id="security-trend" :style="{width: '100%', height: '280px'}"></trend-line>
      </div>
      <div class="item">
        <div class="header">
          <span>资产分布</span>
        </div>
        <bar id="asset-distribution" :style="{width: '100%', height: '280px'}"></bar>
      </div>
    </div>
    <div class="chart-wraper chart-down">
      <div class="item">
        <div class="header">
          <span>安全事件分布</span>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <span>漏洞分布</span>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <span>网络流量</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item net-event">
        <div class="header">
          <span>网络事件</span>
        </div>
        <net-event-table></net-event-table>
      </div>
      <div class="item asset">
        <div class="header">
          <span>资产发现</span>
        </div>
        <asset-discovery-table></asset-discovery-table>
      </div>
      <div class="item vulnerability">
        <div class="header">
          <span>漏洞发现</span>
        </div>
        <vulnerability-discovery-table></vulnerability-discovery-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TrendLine from 'components/charts/line'
  import Bar from 'components/charts/bar'
  import NetEventTable from 'components/table/netEventTable'
  import AssetDiscoveryTable from 'components/table/assetDiscoveryTable'
  import VulnerabilityDiscoveryTable from 'components/table/vulnerabilityDiscoveryTable'

  export default {
    components: {
      TrendLine,
      Bar,
      NetEventTable,
      AssetDiscoveryTable,
      VulnerabilityDiscoveryTable
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .container
    .data-index
    .chart-wraper
    .list
      display: flex
      .item
        flex: 1
        align-items: space-around
        margin-right: 90px
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

    .chart-wraper
      .item
        height: 330px

    .list
      .item
        height: 350px
</style>
