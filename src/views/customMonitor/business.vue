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
              <span class="item-data">{{totalAssets || 0}}</span>
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
              <span class="item-data">8888</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <i class="icon-network-assets"></i>
            <span>资产发现</span>
          </div>
          <div class="content">
            <div class="number">
              <span class="item-data">6672</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <i class="icon-networkAssets"></i>
            <span>资产在线数量</span>
          </div>
          <div class="content">
            <div class="number">
              <span class="item-data">532</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-wraper chart-up">
        <div class="item">
          <div class="header">
            <span>安全趋势</span>
          </div>
          <safe-trend id="safe-trend" :style="{height:'280px', width:'100%'}"></safe-trend>
          <!--<pieChart id="assetsOnline" :style="{height:'280px', width:'100%'}"></pieChart>-->
        </div>
        <div class="item">
          <div class="header">
            <span>在线资产统计</span>
          </div>
          <asset-distribution id="business-asset" :style="{height:'280px', width:'100%'}"></asset-distribution>
          <!--<lineChart id="assetTrend" :style="{height:'280px', width:'100%'}"></lineChart>-->
        </div>
      </div>
      <div class="list">
        <div class="item">
          <div class="header">
            <span>应用层协议</span>
          </div>
          <!--<asset-online-table></asset-online-table>-->
        </div>
        <div class="item">
          <div class="header">
            <span>网络会话</span>
          </div>
          <!--<asset-online-table></asset-online-table>-->
        </div>
      </div>
      <div class="chart-wraper">
        <div class="item">
          <div class="header">
            <span>事件分布</span>
          </div>
          <!--<pieChart id="assetsOnline" :style="{height:'280px', width:'100%'}"></pieChart>-->
        </div>
        <div class="item">
          <div class="header">
            <span>漏洞分布</span>
          </div>
          <!--<pieChart id="assetsOnline" :style="{height:'280px', width:'100%'}"></pieChart>-->
        </div>
        <div class="item">
          <div class="header">
            <span>资产分布</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import safeTrend from 'components/charts/businessSafeTrend'
    import assetDistribution from 'components/charts/businessAsset'
    // import TrendLine from 'components/charts/line'
    // import Bar from 'components/charts/bar'
    export default {
      components: {
        safeTrend,
        assetDistribution
      },
      data() {
        return {
          totalAssets: 0
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
    margin-top: 58px
    .item
      height: 330px
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
      border: 1px solid  $color-theme-d
      height: 400px
      .header
        padding-left: 16px
        height: 50px
        line-height: 50px
        border-top: 1px solid $color-theme-d
        border-right: 1px solid $color-theme-d
        border-left: 8px solid  $color-theme-d
        border-bottom: 2px solid  $color-theme-d
</style>
