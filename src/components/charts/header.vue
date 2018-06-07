<template>
  <div class="header">
    <el-row type="flex">
      <el-col :span="5">
        <span>{{title}}</span>
      </el-col>
      <template v-if="title === '安全趋势'">
        <el-col :span="9">
          <line-legends :params="params" :chart="chart"></line-legends>
        </el-col>
        <el-col :span="10">
          <filter-wrapper :timeArr="timeList" :chart="chart"></filter-wrapper>
        </el-col>
      </template>
      <template v-else-if="titleType === 'simple'">
        <legend-wrappers :chart="chart" :params="params"></legend-wrappers>
      </template>

      <template v-else>
        <el-col :span="4">
        <legend-wrappers :chart="chart" :params="params" v-if="params.length"></legend-wrappers>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import lineLegends from 'components/charts/lineLegends'
  import legendWrappers from 'components/charts/legends'
  import filterWrapper from 'components/charts/filter'
  export default {
    components: {
      legendWrappers,
      filterWrapper,
      lineLegends
    },
    props: {
      params: Array,
      chart: Object,
      title: String,
      titleType: String
    },
    data() {
      return {
        timeList: [
          {
            select: true,
            name: '24h',
            time: 1000 * 3600 * 24
          },
          {
            select: false,
            name: '7天',
            time: 1000 * 3600 * 24 * 7
          },
          {
            select: false,
            name: '30天',
            time: 1000 * 3600 * 24 * 30
          },
          {
            select: false,
            name: '90天',
            time: 1000 * 3600 * 24 * 90
          },
          {
            select: false,
            name: '半年',
            time: 1000 * 3600 * 24 * 180
          }]
      }
    },
    methods: {
      legendToggle(item) {
        item.select = !item.select
        this.chart.dispatchAction({
          type: 'legendToggleSelect',
          name: item.name
        })
      },
      highlight(item) {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesName: item.name
        })
        this.chart.dispatchAction({
          type: 'highlight',
          name: item.name
        })
      },
      donwplay(item) {
        this.chart.dispatchAction({
          type: 'downplay',
          seriesName: item.name
        })
        this.chart.dispatchAction({
          type: 'downplay',
          name: item.name
        })
      }
      }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header
    padding-left: 16px
    height: 50px
    line-height: 50px
    border-top: 1px solid $color-theme-d
    border-right: 1px solid $color-theme-d
    border-left: 8px solid  $color-theme-d
    border-bottom: 2px solid  $color-theme-d
    .title
      flex 0 0 180px
    .legend-wrappers
      flex: 0 0 60%
      display: flex
      flex-wrap: wrap
      align-content: space-around
      align-items: center
      .legends
        height 30%
        display: flex
        align-items: center
        margin-right 5px
        .legend
          border-radius: 1px
          width: 24px
          height: 7px
          cursor: pointer
          align-items: center
        .text
          margin-left 2px
          font-size: 12px
          line-height 25px
          cursor: pointer
          align-items: center
</style>
