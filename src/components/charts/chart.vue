<template>
<<<<<<< HEAD
  <div class="item" :style="itemHeight">
    <chart-header :title="title" :params="params" :chart="chart"></chart-header>
    <div :id="id" :style="[chartHeight, {width: '100%'}]"></div>
=======
  <div class="item">
    <chart-header :title="title" :params="params" :chart="chart"></chart-header>
    <div :id="id" :style="{height: '280px',width: '100%'}"></div>
>>>>>>> 39f0290628c8494010d1e47936a70fae2b4486d1
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
<<<<<<< HEAD
      },
      height: {
        type: Number,
        default: 330
=======
>>>>>>> 39f0290628c8494010d1e47936a70fae2b4486d1
      }
    },
    data() {
      return {
        chart: null
      }
    },
<<<<<<< HEAD
    computed: {
      itemHeight() {
        return {height: `${this.height}px`}
      },
      chartHeight() {
        return {height: `${this.height - 50}px`}
      }
    },
=======
>>>>>>> 39f0290628c8494010d1e47936a70fae2b4486d1
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
<<<<<<< HEAD
    /*height: 330px*/
=======
    height: 330px
>>>>>>> 39f0290628c8494010d1e47936a70fae2b4486d1
    margin-bottom: 28px
    position: relative
    border: 1px solid $color-theme-d
</style>