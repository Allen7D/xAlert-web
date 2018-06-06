<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-tick-align
  import Chart from 'components/charts/chart'
  export default {
    extends: Chart,
    props: {
      data: {
        type: Array
      }
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      option() {
        return {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            top: '10%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['系统1', '系统2', '系统3', '系统4', '系统5', '系统6', '系统7', '系统8', '系统9', '系统10'],
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
          ],
          yAxis: [
            {
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
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [100, 52, 200, 334, 390, 188, 88, 85, 555, 333]
            }
          ]
        }
      }
    }
  }
</script>
