<template>
  <div :class="className" :id="id" :style="{height: '280px',width: '100%'}"></div>
</template>

<script>
  // http://echarts.baidu.com/examples/editor.html?c=line-stack
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
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['业务网络1', '业务网络2', '业务网络3', '业务网络4', '业务网络5'],
            textStyle: {
              color: '#4676FF',
              fontSize: '15'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          yAxis: {
            type: 'value',
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
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          series: [
            {
              name: '业务网络1',
              type: 'line',
              stack: '总量',
              data: [20, 3, 1, 3, 9, 3, 1]
            },
            {
              name: '业务网络2',
              type: 'line',
              stack: '总量',
              data: [20, 8, 11, 24, 9, 3, 1]
            },
            {
              name: '业务网络3',
              type: 'line',
              stack: '总量',
              data: [10, 22, 20, 14, 9, 3, 10]
            },
            {
              name: '业务网络4',
              type: 'line',
              stack: '总量',
              data: [20, 32, 1, 34, 30, 30, 20]
            },
            {
              name: '业务网络5',
              type: 'line',
              stack: '总量',
              data: [20, 32, 21, 34, 19, 33, 12]
            }
          ]
        }
      }
    },
    mounted() {
      var base = +new Date(1967, 3, 30)
      var oneDay = 24 * 3600 * 1000
      var date = []
      var data = []
      var now = new Date(base += oneDay)
      function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
        date.push(now)
        data.push((Math.random() - 0.4) * 10 + data[data.length - 1])
        if (shift) {
          date.shift()
          data.shift()
        }
        now = new Date(+new Date(now) + oneDay)
      }
      for (var i = 1; i < 100; i++) {
        addData()
      }

      this.initChart()
      setInterval(function () {
        addData(true)
//        this.chart.setOption({
//          xAxis: {
//            data: date
//          },
//          series: [
//            {
//              name: '业务网络1',
//              data: data
//            },
//            {
//              name: '业务网络2',
//              data: data
//            },
//            {
//              name: '业务网络3',
//              data: data
//            },
//            {
//              name: '业务网络4',
//              data: data
//            },
//            {
//              name: '业务网络5',
//              data: data
//            }
//          ]
//        })
      }, 2000)
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

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
