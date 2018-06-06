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
      xAxisdata() {
        return this.data.map((item, index) => {
          return item.name
        })
      },
      seriesdata() {
        return this.data.map((item, index) => {
          return item.value
        })
      },
      option() {
        return {
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
              data: this.xAxisdata,
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
              barWidth: '50%',
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
