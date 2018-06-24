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
        default: 'lineChart'
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
          legend: {
            show: false,
            data: ['行李分拣', '业务3']
          },
          grid: {
            left: '5%',
            right: '5%',
            top: '5%',
            bottom: '5%',
            containLabel: true
          },
          color: getColor(),
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
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
          yAxis: [
            {
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
            }
          ],
          series: [
            {
              name: '行李分拣',
              type: 'line',
              smooth: true,
              data: [2, 125, 39, 26, 28, 70, 175, 182, 48, 18, 6, 2]
            },
            {
              name: '业务3',
              type: 'line',
              smooth: true,
              data: [3, 5, 11, 18, 148, 69, 231, 46, 55, 98, 10, 0]
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
        this.$emit('legend', data)
        this.$emit('draw', chart)
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
  @import "~common/stylus/variable"
  .chart
    height 280px
</style>
