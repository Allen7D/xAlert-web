<script type="text/ecmascript-6">
  import assetChart from 'components/assetDynamic/assetChart'

  export default {
    extends: assetChart,
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
            top: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['7/15', '7/16', '7/17', '7/18', '7/19', '7/20', '7/21'],
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
          series: [{
            data: [41, 46, 42, 49, 51, 76, 67],
            type: 'line',
            color: '#00a0e9'
          }]
        }
      }
    }
  }
</script>
