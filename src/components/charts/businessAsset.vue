<template>
  <div :class="className" :id="id" :style="{height: '280px',width: '100%'}"></div>
</template>

<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-y-category-stack
  import echarts from 'echarts'

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data() {
      return {
        chart: null,
        option: {
          legend: {
            data: ['业务1', '业务2', '业务3', '业务4', '业务5', '业务6'],
            align: 'left',
            left: 90,
            textStyle: {
              color: '#4676FF',
              fontSize: '15'
            }
          },
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
            bottom: '3%',
            containLabel: true
          },
          series: [
            {
              name: '业务1',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务2',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务3',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务4',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务5',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务6',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            }
          ]
        }
      }
    },
    mounted() {
      for (let i = 0; i < 6; i++) {
        this.option.series[0].data.push(Math.round(Math.random() * 10))
        this.option.series[1].data.push(Math.round(Math.random() * 10))
        this.option.series[2].data.push(Math.round(Math.random() * 10))
        this.option.series[3].data.push(Math.round(Math.random() * 10))
        this.option.series[4].data.push(Math.round(Math.random() * 10))
        this.option.series[5].data.push(Math.round(Math.random() * 10))
      }
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
