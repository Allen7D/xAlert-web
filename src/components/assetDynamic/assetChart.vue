<template>
  <div :style="itemHeight">
    <div class="title">{{title}}</div>
    <div class="item" :id="id" :style="[chartHeight, {width: '100%'}]"></div>
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
        default: '未名'
      },
      height: {
        type: Number,
        default: 300
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
  .title
    height 25px
    line-height 25px
    color black
    padding-left 20px
    font-weight bolder
  .item
    /*height: 330px*/
    margin-top 5px
    margin-left 20px
    margin-right 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
</style>
