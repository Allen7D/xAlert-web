<template>
  <div class="item" :style="itemHeight">
    <chart-header :title="title" :params="params" :chart="chart" :titleType="titleType"></chart-header>
    <div :id="id" :style="[chartHeight, chartWidth, chartPosition]"></div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import ChartHeader from 'components/charts/header'
  export default {
    components: {
      ChartHeader
    },
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      data: {
        type: Array
      },
      title: {
        type: String,
        default: '未名'
      },
      titleType: {
        type: String,
        default: 'complex'
      },
      height: {
        type: Number,
        default: 330
      },
      width: {
        type: String,
        default: '100%'
      },
      float: {
        type: String,
        default: 'none'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      itemHeight() {
        return {height: `${this.height}px`}
      },
      chartHeight() {
        return {height: `${this.height - 50}px`}
      },
      chartWidth() {
        return {width: this.width}
      },
      chartPosition() {
        return {float: this.float}
      }
    },
    watch: {
      data() {
        this.initChart()
      },
      $route(to, from) {
        setTimeout(() => {
          this.chart.resize()
        }, 1000)
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
      },
      destroyChart() {
        if (!this.chart) {
          return
        }
        const sidebarElm = document.getElementsByClassName('sidebar')[0]
        sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
      }
    },
    mounted() {
      this.initChart()
      // 监听窗口的变化
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 5)
      window.addEventListener('resize', this.__resizeHanlder)
      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
    },
    beforeDestroy() {
      this.destroyChart()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    /*height: 330px*/
    margin-bottom: 28px
    position: relative
    border: 1px solid $color-theme-d
</style>
