<template>
  <div class="item" :style="itemHeight">
    <div :title="title" class="header">
      <div class="title">{{title}}</div>
    </div>
    <div :id="id" :style="[chartHeight,{width: '100%'}]"></div>
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
        default: 350
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
    border-radius 5px
  .header
    display: flex
    padding-left: 20px
    height: 45px
    line-height: 45px
    background-color #e6e6e6
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    .title
      flex 0 0 300px
      color #333333
      font-size 18px
      font-weight: bold
</style>
