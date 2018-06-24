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
          grid: {
            left: '5%',
            right: '5%',
            top: '8%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(70, 118, 255, 0.2)'
              }
            },
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
          yAxis: {
            type: 'category',
            data: ['master-eth0', 'airport-eth0', 'iot-eth0', 'madical-eth0', 'cnc-eth0'],
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
          color: getColor(),
          series: [
            {
              name: '严重',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '高危',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '中危',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 132, 101, 134, 90]
            },
            {
              name: '低危',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220, 182, 191, 234, 290]
            },
            {
              name: '信息',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [150, 212, 201, 154, 190]
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
        this.$emit('stackBarLegend', data)
        this.$emit('drawStackBar', chart)
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
