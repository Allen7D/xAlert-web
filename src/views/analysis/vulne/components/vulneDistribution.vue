<script type="text/ecmascript-6">
  // 饼图和柱状图结合
  // http://echarts.baidu.com/examples/editor.html?c=watermark
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
              type: 'shadow'
            }
          },
          grid: [
            {
              left: '30%',
              top: '10%',
              bottom: '3%',
              width: '30%',
              containLabel: true
            },
            {
              left: '70%',
              top: '10%',
              bottom: '3%',
              width: '30%',
              containLabel: true
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: ['很高', '高', '中', '低', '很低'],
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '15'
                }
              },
              axisTick: {
                alignWithLabel: true
              }
            },
            {
              type: 'category',
              data: ['类型1', '类型2', '类型3', '类型4', '类型5'],
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '15'
                }
              },
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '15'
                }
              }
            },
            {
              type: 'value',
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '15'
                }
              }
            }
          ],
          series: [
            {
              name: '很高',
              type: 'bar',
              barWidth: '50%',
              stack: '数量',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '高',
              type: 'bar',
              barWidth: '50%',
              stack: '数量',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '中',
              type: 'bar',
              barWidth: '50%',
              stack: '数量',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '低',
              type: 'bar',
              barWidth: '50%',
              stack: '数量',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '很低',
              type: 'bar',
              barWidth: '50%',
              stack: '数量',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '漏洞等级',
              type: 'pie',
              radius: '70%',
              center: ['15%', '45%'],
              data: [
                {value: 335, name: '中危'},
                {value: 310, name: '高危'},
                {value: 234, name: '严重'},
                {value: 135, name: '信息'},
                {value: 548, name: '低危'}
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
            },
            {
              name: '类型1',
              type: 'bar',
              barWidth: '50%',
              stack: '等级',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '类型2',
              type: 'bar',
              barWidth: '50%',
              stack: '等级',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '类型3',
              type: 'bar',
              barWidth: '50%',
              stack: '等级',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '类型4',
              type: 'bar',
              barWidth: '50%',
              stack: '等级',
              data: [37, 12, 24, 45, 10]
            },
            {
              name: '类型5',
              type: 'bar',
              barWidth: '50%',
              stack: '等级',
              data: [37, 12, 24, 45, 10]
            }
          ]
        }
      }
    }
  }
</script>
