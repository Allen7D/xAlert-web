<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=multiple-x-axis
  import analysis from 'components/analysis/analysis'
  import { getColor } from '@/utils/index'

  export default {
    extends: analysis,
    data() {
      return {
        chart: null,
        option: {
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
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['9:00', '12:00', '15:00', '18:00', '21:00', '24:00', '3:00', '6:00', '9:00'],
            axisLine: {
              lineStyle: {
                color: '#a0a0a0'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#a0a0a0',
                inside: true
              }
            }
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: '#e5e5e5',
                  width: 1
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#a0a0a0'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#a0a0a0',
                  fontSize: '15'
                }
              },
              axisTick: {
                show: false
              }
            }
          ],
          color: getColor,
          series: [{
            data: [41, 46, 41, 42, 49, 51, 76, 67, 45, 43, 38, 45, 100],
            type: 'line',
            color: '#00a0e9'
            }]
        }
      }
    }
  }
</script>
