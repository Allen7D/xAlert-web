<script type="text/ecmascript-6">
  // 饼图和柱状图结合
  // http://echarts.baidu.com/examples/editor.html?c=watermark
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          color: getColor,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          title: {
            text: '事件类型TOP 5',
            x: '15%',
            y: '88%',
            textAlign: 'center',
            textStyle: {
              color: 'white'
            }
          },
          grid: [
            {
            left: '30%',
            top: '10%',
            bottom: '3%',
            width: '65%',
            containLabel: true
          }
          ],
          xAxis: [
            {
              type: 'category',
              data: ['事件类型1', '事件类型2', '事件类型3', '事件类型4', '事件类型5'],
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
                alignWithLabel: true,
                lineStyle: {
                  color: '#4676FF'
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
              barWidth: '30%',
              data: [100, 52, 200, 334, 390]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: '70%',
              center: ['15%', '45%'],
              data: [
                {value: 335, name: '类型1'},
                {value: 310, name: '类型2'},
                {value: 234, name: '类型3'},
                {value: 135, name: '类型4'},
                {value: 548, name: '类型5'}
              ],
              label: {
                fontSize: 15
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    }
  }
</script>