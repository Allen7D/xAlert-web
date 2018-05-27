<template>
  <div style="padding-top: 20px">
    <div class="title">{{title}}</div>
    <div class="item" :style="itemHeight">
      <div :id="id" :style="[chartHeight, chartWidth, chartPosition]"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  export default {
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 300
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
  .title
    height 25px
    line-height 25px
    color black
    font-weight bolder
  .item
    /*height: 330px*/
    margin-top 5px
    margin-right 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
</style>
