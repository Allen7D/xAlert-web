<template>
  <div class="chart" :id="id" :style="[chartWidth, chartPosition]">
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import { getColor } from '@/utils/index'
  export default {
    components: {
    },
    props: {
      id: {
        type: String,
        default: 'pieChart'
      },
      data: {
        type: Array
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
        chart: null,
        params: []
      }
    },
    computed: {
      option() {
        return {
          color: getColor(),
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '事件等级分布',
              type: 'pie',
              radius: '75%',
              center: ['50%', '47%'],
              data: this.data,
              label: {
                fontSize: 15
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
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
        this.drawChart()
      },
      $route(to, from) {
        setTimeout(() => {
          this.chart.resize()
        }, 500)
      }
    },
    methods: {
      drawChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
        this.params = this.updateparams()
        let data = this.params
        let chart = this.chart
        this.$emit('pieLegend', data)
        this.$emit('drawPie', chart)
      },
      updateparams() {
        let i = 0
        return this.data.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      },
      destroyChart() {
        if (!this.chart) {
          return
        }
        const sidebarElm = document.getElementsByClassName('sidebar')[0]
        sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
        window.removeEventListener('resize', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
      }
    },
    mounted() {
      this.drawChart()
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
  .chart
    height 280px
</style>
