<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=multiple-x-axis
  import analysis from 'components/analysis/analysis'
  // import { getColor } from '@/utils/index'
  export default {
    extends: analysis,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
          },
          legend: {
            left: '50%',
            top: '5%',
            width: '36%',
            data: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6', '类型7', '类型8', '类型9', '类型10', '类型11', '类型12', '类型13', '类型14']
          },
          calculable: true,
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['很高', '高', '中', '低', '很低']
          },
          grid: {
            left: '45%',
            width: '50%',
            height: '55%',
            bottom: '15%'
          },
          series: [
            {
              name: '等级分布',
              type: 'pie',
              radius: '60%',
              center: ['20%', '50%'],
              data: [
                {value: 335, name: '中'},
                {value: 310, name: '高'},
                {value: 234, name: '很高'},
                {value: 135, name: '很低'},
                {value: 1548, name: '低'}
              ],
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
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型2',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型3',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型4',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型5',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型6',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型7',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型8',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型9',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型10',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型11',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型12',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390]
            },
            {
              name: '类型13',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            },
            {
              name: '类型14',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 202, 301, 134, 190]
            }
          ]
        }
      }
    }
  }
</script>
