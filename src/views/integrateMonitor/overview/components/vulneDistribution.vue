<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-y-category-stack
  import Chart from 'components/charts/chart'
  import {getColor} from '@/utils/index'
//  const label = {
//    normal: {
//      show: true,
//      position: 'insideRight'
//    }
//  }
  export default {
    extends: Chart,
    props: {
      data: Array,
      data2: Array
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      option() {
        return {
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
            data: this.data2,
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
          series: this.data
        }
      },
      params() {
        let i = 0
        return this.option.series.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      }
    }
  }
</script>
