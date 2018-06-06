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
        return filterChart(this.data, 'value', 5)
      },
      xAxisdata() {
        return this.localData.map((item, index) => {
            return item.name
        })
      },
      seriesdata() {
        return this.localData.map((item, index) => {
            return item.value
        })
      },
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} '
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: this.xAxisdata,
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
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
              type: 'log',
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '15'
                },
                formatter: function(value) {
                  let item
                  item = value / 1000000
                  return item + 'kb'
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
            left: '7%',
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
              data: this.seriesdata,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = [
                      '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae',
                      '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
                    return colorList[params.dataIndex]
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
</script>
