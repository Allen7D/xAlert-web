<template>
  <div class="container">
    <div class="data-index">
      <div class="item">
        <div class="title">
          <i class="icon-totalAssets"></i>
          <span>事件趋势</span>
        </div>
        <div class="content">
          <div class="number">
            <span class="item-data">13</span>
          </div>
        </div>
      </div>
      <div class="item combine">
        <div class="title">
          <i class="icon-webloudongjiance"></i>
          <span>近一周发现</span>
        </div>
        <div class="content big">
          <el-row :gutter="20" class="number">
            <el-col :span="5"><span>事件数量:</span><span class="item-data">6</span></el-col>
            <el-col :span="5"><span>特别重大:</span><span class="item-data">65</span></el-col>
            <el-col :span="5"><span>重大:</span><span class="item-data">666</span></el-col>
            <el-col :span="5"><span>较大:</span><span class="item-data">6852</span></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="chart-wraper chart-up">
      <div class="item">
        <div class="header">
          <span>事件趋势</span>
        </div>
        <lineChart id="eventsTrend" :style="{width: '100%', height: '280px'}"></lineChart>
      </div>
      <div class="item">
        <div class="header">
          <span>事件数量排名</span>
        </div>
        <bar id="eventsNum" :style="{width: '100%', height: '280px'}"></bar>
      </div>
    </div>
    <div class="chart-wraper chart-down">
      <div class="item">
        <div class="header">
          <span>事件等级分布</span>
        </div>
        <pieChart id="eventsGrade" :style="{width: '100%', height: '280px'}"></pieChart>
      </div>
      <div class="item">
        <div class="header">
          <span>事件类型排名</span>
        </div>
        <div class="chart-sort">
          <pie id="eventsSort" :style="{width: '38%', height: '280px'}"></pie>
          <barChart id="eventsSortBar" :style="{width: '60%', height: '280px'}"></barChart>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <div class="header">
          <span>事件列表</span>
        </div>
        <event-list-table ></event-list-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import pieChart from 'components/charts/eventsGrade'
  import pie from 'components/charts/eventsSort'
  import barChart from 'components/charts/eventsSortBar'
  import bar from 'components/charts/eventsNum'
  import lineChart from 'components/charts/eventsTrend'
  import eventListTable from 'components/table/eventListTable'
  export default {
    components: {
      pieChart,
      pie,
      barChart,
      bar,
      lineChart,
      eventListTable
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
        span
          margin-right: 50px
      .big
        width: 1547px !important

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
      .chart-sort
        display: flex

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
