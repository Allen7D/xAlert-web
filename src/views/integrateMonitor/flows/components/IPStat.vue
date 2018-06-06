<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-tick-align
  import Chart from 'components/charts/chart'
  import { filterChart } from '@/utils/index'
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
      localData() {
        return filterChart(this.data, 'value', 20)
      },
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['行李分拣', '自助值机', '行李分拣', '自助值机', '监控', '监控'],
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '10'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '15'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              }
            }
          ],
          grid: {
            left: '2%',
            width: '60%',
            height: '70%',
            bottom: '15%'
          },
          series: [
            {
              name: '流量统计',
              type: 'pie',
              radius: '75%',
              center: ['85%', '60%'],
              data: this.localData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: '流量统计',
              type: 'bar',
              barWidth: '40%',
              data: [100, 52, 200, 334, 390, 77],
              color: '#4676ff'
            }
          ]
        }
      }
    }
  }
</script>
