<template>
  <div class="item" :style="itemHeight">
    <AnalysisHead :title="title" :params="params" :chart="chart"></AnalysisHead>
    <div :id="id" :style="[chartHeight, {width: '100%'}]"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import AnalysisHead from 'components/analysis/analysisHead'
  export default {
    components: {
      AnalysisHead
    },
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      title: {
        type: String,
        default: '未名'
      },
      height: {
        type: Number,
        default: 500
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
    /*height: 330px*/
    margin 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
</style>
