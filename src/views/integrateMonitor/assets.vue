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
            <span class="item-data">8888</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class=""></i>
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
          <i class=""></i>
          <span>确认资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">6672</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class=""></i>
          <span>未知资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">532</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <i class=""></i>
          <span>可疑资产</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart chart-up">
      <div class="item">
        <div class="header">
          <span>资产统计</span>
        </div>
        <div id="myChart1" :style="{width: '734px', height: '280px'}">123</div>
      </div>
      <div class="item">
        <div class="header">
          <span>资产趋势</span>
        </div>
        <div id="myChart2" :style="{width: '734px', height: '280px'}"></div>
      </div>
    </div>
    <div class="list">
      <div class="item activity-assets">实时活动资产</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .data-index
  .chart
  .list
    display: flex
    .item
      flex: 1
      align-items: space-around
      /*margin-right: 90px*/
      position: relative
      .title
        position: absolute
        top: -13px
        left: 27px
        width: 127px
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
  .chart
    margin-top: 58px
    .item
      height: 330px
      border: 1px solid $color-theme-d
      /*background-size: 50% 100% !important*/
      .header
        padding-left: 16px
        height: 50px
        line-height: 50px
        border: 1px 1px 2px 8px solid $color-theme-d
</style>
