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
          color: getColor(),
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
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
              data: ['访问行为', '流量', '关键操作', '其他'],
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
              name: '事件类型',
              type: 'bar',
              barWidth: '30%',
              data: [4, 5, 17, 1]
            },
            {
              name: '事件类型',
              type: 'pie',
              radius: '70%',
              center: ['15%', '45%'],
              data: [
                {value: 4, name: '访问行为'},
                {value: 5, name: '流量'},
                {value: 17, name: '关键操作'},
                {value: 1, name: '其他'}
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