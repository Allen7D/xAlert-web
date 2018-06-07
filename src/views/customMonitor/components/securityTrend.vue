<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=multiple-x-axis
  import Chart from 'components/charts/chart'
  import { getColor, timeInterval } from '@/utils/index'
  export default {
    extends: Chart,
    props: {
      data: Object
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
              type: 'cross'
            }
          },
          legend: {
            show: false
          },
          grid: {
            left: '3%',
              right: '4%',
              bottom: '15%',
              containLabel: true
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 30,
              end: 80
            },
            {
              type: 'slider',
              show: 'true',
              start: 30,
              end: 80,
              fillerColor: 'rgba(81,217,255,0.5)'
            }
          ],
            xAxis: {
            type: 'category',
              boundaryGap: false,
              data: timeInterval(),
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
            color: getColor(),
            series: [
            {
              name: '事件数量',
              type: 'line',
              smooth: true,
              data: [2, 125, 39, 26, 28, 70, 175, 182, 48, 18, 6, 2]
            },
            {
              name: '漏洞数量',
              type: 'line',
              smooth: true,
              data: [3, 5, 11, 18, 148, 69, 231, 46, 55, 98, 10, 0]
            }
          ]
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
