<template>
  <div class="item" :style="itemHeight">
    <chart-header :title="title" :params="params" :chart="chart" :titleType="titleType" :option="[seriesName, seriesName2, pieSize, labelFontSize, chartStyle, barWidth, gridLeft, gridRight, gridTop, gridBottom, gridWidth, gridHeight]"></chart-header>
    <div :id="id" :style="[chartHeight, chartWidth, chartPosition]"></div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import ChartHeader from 'components/charts/header'
  import { getColor, filterChart } from '@/utils/index'
  export default {
    components: {
      ChartHeader
    },
    props: {
      // 提示框标题
      seriesName: {
        type: String,
        default: '未名'
      },
      seriesName2: {
        type: String,
        default: '未名'
      },
      labelFontSize: {
        type: Number,
        default: 12
      },
      pieSize: {
        type: String,
        default: '60%'
      },
      // 扇形区域位置
      piePosition: {
        type: Array
      },
      piePosition2: {
        type: Array
      },
      chartStyle: {
        type: String
      },
      barWidth: {
        type: String,
        default: '50%'
      },
      gridLeft: {
        type: String
      },
      gridRight: {
        type: String
      },
      gridTop: {
        type: String
      },
      gridBottom: {
        type: String
      },
      gridWidth: {
        type: String
      },
      gridHeight: {
        type: String
      },
      id: {
        type: String,
        default: 'chart'
      },
      data: {
        type: Array
      },
      data2: {
        type: Array
      },
      title: {
        type: String,
        default: '未名'
      },
      titleType: {
        type: String,
        default: 'complex'
      },
      height: {
        type: Number,
        default: 330
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
      },
      xAxisdata() {
        return this.data.map((item, index) => {
          return item.name
        })
      },
      seriesdata() {
        return this.data.map((item, index) => {
          return item.value
        })
      },
      localData() {
        return filterChart(this.data, 'value', 10)
      },
      localDataInByL4() {
        return filterChart(this.data, 'value', 5)
      },
      localDataInByL7() {
        return filterChart(this.data2, 'value', 5)
      }
    },
    watch: {
      data() {
        this.drawPie()
      }
    },
    methods: {
      drawPie() {
        this.chart = echarts.init(document.getElementById((this.id)))
        if (this.chart === undefined) {
          console.error(`echarts init dom id ${this.id} failed`)
          return
        }
        switch (this.chartStyle) {
          case 'bar':
            this.chart.setOption(this.generatorBarOption())
            break
          case 'pie':
            this.chart.setOption(this.generatorPieOption())
            break
          case 'pieBar':
            this.chart.setOption(this.generatorPieBarOption())
            break
          case 'barPie':
            this.chart.setOption(this.generatorBarPieOption())
            break
          case 'doublePie':
            this.chart.setOption(this.generatorDoublePieOption())
            break
          default:
            console.error(`chartStyle ${this.chartStyle} is invalid`)
            break
        }
        let work = null
        window.addEventListener('resize', function () {
          if (work == null) {
            work = setTimeout(function () {
              this.chart.resize()
              work = null
            }, 100)
          }
        })
      },
      generatorBarOption() {
        return {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: this.gridLeft,
            right: this.gridRight,
            top: this.gridTop,
            bottom: this.gridBottom,
            containLabel: true
          },
          xAxis: [this.xAxisInitial()],
          yAxis: [this.yAxisInitial()],
          series: [this.barSeries()]
        }
      },
      generatorPieOption() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          color: getColor(),
          series: [this.pieSeries()]
        }
      },
      generatorPieBarOption() {
        return {
          color: getColor(),
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            axisPointer: {
              type: 'shadow'
            }
          },
          title: {
            text: '事件类型TOP 5',
            x: '15%',
            y: '88%',
            textAlign: 'center',
            textStyle: {
              color: 'white'
            }
          },
          grid: [
            {
              left: this.gridLeft,
              top: this.gridTop,
              bottom: this.gridBottom,
              width: this.gridWidth,
              containLabel: true
            }
          ],
          xAxis: [this.xAxisInitial()],
          yAxis: [this.yAxisInitial()],
          series: [
            this.barSeries(),
            this.pieSeries()
          ]
        }
      },
      generatorBarPieOption() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} '
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: this.xAxisdata,
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '10'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'log',
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '15'
                },
                formatter: function(value) {
                  let item
                  item = value / 1000000
                  return item + 'kb'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              }
            }
          ],
          grid: {
            left: this.gridLeft,
            width: this.gridWidth,
            height: this.gridHeight,
            bottom: this.gridBottom
          },
          series: [
            {
              name: this.seriesName,
              type: 'pie',
              radius: this.pieSize,
              center: this.piePosition,
              data: this.localData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            this.barSeries()
          ]
        }
      },
      generatorDoublePieOption() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}协议 : {c}  ({d}%)'
          },
          calculable: true,
          title: [
            {
              text: '应用层协议统计',
              top: '85%',
              left: '15%',
              textStyle: {
                color: '#fefefe',
                fontSize: '18'
              }
            },
            {
              text: '传输层协议统计',
              top: '85%',
              right: '15%',
              textStyle: {
                color: '#fefefe'
              }
            }
          ],
          series: [
            {
              name: this.seriesName,
              type: 'pie',
              radius: this.pieSize,
              center: this.piePosition,
              data: this.localDataInByL7,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: this.seriesName2,
              type: 'pie',
              radius: this.pieSize,
              center: this.piePosition2,
              data: this.localDataInByL4,
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
      xAxisInitial() {
        return {
          type: 'category',
          data: this.xAxisdata,
          axisTick: {
          alignWithLabel: true
        },
          axisLine: {
            lineStyle: {
              color: '#4676FF'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#4676FF',
                fontSize: '15'
            }
          }
        }
      },
      yAxisInitial() {
        return {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#4676FF'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(70, 118, 255, 0.2)'
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
      },
      pieSeries() {
        return {
          name: this.seriesName,
          type: 'pie',
          radius: this.pieSize,
          center: this.piePosition,
          data: this.data,
          label: {
            fontSize: this.labelFontSize
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      },
      barSeries() {
        return {
          name: this.seriesName,
          type: 'bar',
          barWidth: this.barWidth,
          data: this.data
        }
      },
      destroyChart() {
        if (!this.chart) {
          return
        }
        const sidebarElm = document.getElementsByClassName('sidebar')[0]
        sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
      }
    },
    mounted() {
      this.drawPie()
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
  .item
    /*height: 330px*/
    margin-bottom: 28px
    position: relative
    border: 1px solid $color-theme-d
</style>
