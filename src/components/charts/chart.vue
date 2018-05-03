<template>
  <div class="item">
    <chart-header :title="title" :params="params" :chart="chart"></chart-header>
    <div :id="id" :style="{height: '280px',width: '100%'}"></div>
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
      title: {
        type: String,
        default: '未名'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
      }
    },
    mounted() {
      this.initChart()
      // 监听窗口的变化
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 50)
      window.addEventListener('resize', this.__resizeHanlder)
      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    height: 330px
    margin-bottom: 28px
    position: relative
    border: 1px solid $color-theme-d
</style>