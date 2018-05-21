<script type="text/ecmascript-6">
  import analysis from 'components/analysis/analysis'

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
            data: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6', '类型7', '类型8', '类型9', '类型10'],
            axisLine: {
              lineStyle: {
                color: '#a0a0a0'
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: '500px',
                color: '#a0a0a0'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#a0a0a0'
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
          series: [{
            data: [41, 46, 41, 42, 49, 51, 76, 67, 45, 43],
            type: 'bar',
            color: '#00a0e9',
            barWidth: '30%'
          }]
        }
      }
    }
  }
</script>
