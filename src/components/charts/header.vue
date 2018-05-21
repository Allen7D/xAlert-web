<template>
  <div class="header">
    <el-row type="flex">
      <el-col :span="5">
        <span>{{title}}</span>
      </el-col>
      <el-col :span="9">
        <line-legends v-if="title === '安全趋势'" :params="params" :chart="chart"></line-legends>
        <legend-wrappers v-else :chart="chart" :params="params"></legend-wrappers>
      </el-col>
      <el-col :span="10">
        <filter-wrapper v-if="title === '安全趋势'" :timeArr="timeList" :chart="chart"></filter-wrapper>
      </el-col>
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
      title: String
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
</style>
