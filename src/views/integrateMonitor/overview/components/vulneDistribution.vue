<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-y-category-stack
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  const label = {
    normal: {
      show: true,
      position: 'insideRight'
    }
  }
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            show: false
          },
          grid: {
            left: '5%',
            right: '5%',
            top: '5%',
            bottom: '5%',
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
            data: ['gushenxing-eth0', 'master-eth0', 'airport-eth0', 'iot-eth0', 'madical-eth0', 'cnc-eth0'],
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
              label: label,
              data: [1, 0, 0, 0, 0, 0]
            },
            {
              name: '高危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [1, 0, 0, 1, 0, 0]
            },
            {
              name: '中危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [2, 0, 1, 1, 1, 0]
            },
            {
              name: '低危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [1, 1, 0, 0, 1, 2]
            }
          ]
        }
      }
    },
    computed: {
      params() {
        let i = 0
        return this.option.series.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      }
    }
  }
</script>
