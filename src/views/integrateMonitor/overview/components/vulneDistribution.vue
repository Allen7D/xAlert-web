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
            data: ['业务一', '业务二', '业务三', '业务四', '业务五', '业务六', '业务七'],
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
              name: '高危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '中危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '低危',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '信息',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              name: '未定义',
              type: 'bar',
              stack: '总量',
              label: label,
              data: [820, 832, 901, 934, 1290, 1330, 1320]
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
