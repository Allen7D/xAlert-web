<template>
  <div class="chart" :id="id" :style="[chartWidth, chartPosition]">
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import { getColor } from '@/utils/index'
  export default {
    props: {
      id: {
        type: String,
        default: 'barChart'
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
        params: [],
        option: {
          color: getColor(),
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: ['打印机', '路由器', '电脑', '手机', '平板电脑', '其他'],
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#4676FF'
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: '500px',
                color: '#4676FF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#4676FF'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#4676FF',
                fontSize: '15'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '很高',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '高',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '中',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '低',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '很低',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '未知',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            }
          ]
        }
      }
    },
    computed: {
      chartWidth() {
        return {width: this.width}
      },
      chartPosition() {
        return {float: this.float}
      }
    },
    created() {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          this.option.series[j].data.push(Math.round(Math.random() * 10))
        }
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
        this.$emit('complexBarLegend', data)
        this.$emit('drawComplexBar', chart)
      },
      updateparams() {
        let i = 0
        return this.option.series.map((item) => {
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
  .chart
    height 300px
</style>
