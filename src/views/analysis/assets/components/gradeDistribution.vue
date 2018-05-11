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
          // baseOption: {
          //   tooltip: {
          //     trigger: 'item',
          //     formatter: '{a} <br/>{b} : {c} ({d}%)'
          //   },
          //   grid: {
          //     left: 20
          //   },
          //   legend: {
          //     show: false,
          //     data: ['中', '高', '很高', '很低', '低']
          //   },
          //   series: [
          //     {
          //       name: '等级分布',
          //       type: 'pie',
          //       radius: '55%',
          //       center: ['50%', '60%'],
          //       data: [
          //         {value: 335, name: '中', color: '#facd89'},
          //         {value: 310, name: '高', color: '#7171c6'},
          //         {value: 234, name: '很高', color: '#c23531'},
          //         {value: 135, name: '很低', color: '#87cb77'},
          //         {value: 1548, name: '低', color: '#68e4f4'}
          //       ],
          //       itemStyle: {
          //         emphasis: {
          //           shadowBlur: 10,
          //           shadowOffsetX: 0,
          //           shadowColor: 'rgba(0, 0, 0, 0.5)'
          //         }
          //       }
          //     }
          //   ]
          // },
          // options: [
          //   {
          //     tooltip: {
          //       trigger: 'axis',
          //       axisPointer: {
          //       type: 'shadow'
          //       }
          //     }
          //   },
          //   {
          //     legend: {
          //     data: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6', '类型7', '类型8', '类型9', '类型10']
          //     }
          //   },
          //   {
          //     grid: {
          //     left: '3%',
          //     right: '4%',
          //     bottom: '3%',
          //     containLabel: true
          //     }
          //   },
          //   {
          //     xAxis: {
          //     type: 'value'
          //     }
          //   },
          //   {
          //     yAxis: {
          //     type: 'category',
          //     data: ['很高', '高', '中', '低', '很低']
          //     }
          //   },
          //   {
          //     series: [
          //       {
          //         name: '类型1',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [320, 302, 301, 334, 390, 330, 320],
          //         color: '#00a0e9'
          //       },
          //       {
          //         name: '类型2',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [120, 132, 101, 134, 90, 230, 210],
          //         color: '#27279f'
          //       },
          //       {
          //         name: '类型3',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [220, 182, 191, 234, 290, 330, 310],
          //         color: '#22ac38'
          //       },
          //       {
          //         name: '类型4',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [150, 212, 201, 154, 190, 330, 410],
          //         color: '#f39800'
          //       },
          //       {
          //         name: '类型5',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [820, 832, 901, 934, 1290, 1330, 1320],
          //         color: '#00736d'
          //       },
          //       {
          //         name: '类型6',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [420, 132, 491, 334, 290, 330, 1020],
          //         color: '#9490ff'
          //       },
          //       {
          //         name: '类型7',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [800, 432, 501, 134, 1129, 330, 130],
          //         color: '#0075a9'
          //       },
          //       {
          //         name: '类型8',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [420, 732, 301, 534, 1190, 1030, 1720],
          //         color: '#7ecef4'
          //       },
          //       {
          //         name: '类型9',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [220, 632, 301, 734, 1290, 1030, 1320],
          //         color: '#5f52a0'
          //       },
          //       {
          //         name: '类型10',
          //         type: 'bar',
          //         stack: '总量',
          //         label: {
          //           normal: {
          //             show: true,
          //             position: 'insideRight'
          //           }
          //         },
          //         data: [520, 732, 1201, 1134, 190, 330, 1320],
          //         color: '#007130'
          //       }
          //     ]
          //   }
          // ]
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
