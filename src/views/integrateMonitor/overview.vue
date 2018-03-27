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
        <div id="myChart-securityTrends" :style="{width: '734px', height: '280px'}">123</div>
      </div>
      <div class="item">
        <div class="header">
          <span>资产分布</span>
        </div>
        <div id="myChart-assetsAllocation" :style="{width: '734px', height: '280px'}"></div>
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
        <barChart id="overviewVulnerability" :style="{width: '100%', height: '280px'}"></barChart>
      </div>
      <div class="item">
        <div class="header">
          <span>网络流量</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item net-event">网络事件</div>
      <div class="item asset">资产发现</div>
      <div class="item vulnerability">漏洞发现</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import barChart from 'components/charts/overviewVulnerability'
  export default {
    components: {
      barChart
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
      margin-right: 90px
      position: relative
      .title
        position: absolute
        top: -13px
        left: 27px
        width: 128px
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
        /*beveled-corners($color-background-d, 0, 14px)*/
        .item-data
          color: $color-theme-d
          font-size: 28px
  .chart-wraper
    margin-top: 58px
    .item
      height: 330px
      /*beveled-corners($color-background-d, 0, 14px, 0, 0)*/
      border: 1px solid $color-theme-d
      /*background-size: 50% 100% !important*/
      .header
        padding-left: 16px
        height: 50px
        line-height: 50px
        border-top: 1px solid $color-theme-d
        border-right: 1px solid $color-theme-d
        border-left: 8px solid  $color-theme-d
        border-bottom: 2px solid  $color-theme-d
</style>
