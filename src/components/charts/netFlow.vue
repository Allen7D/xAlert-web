<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" :data="netFlowData"></div>
</template>

<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import echarts from 'echarts'
  import { getNetFlow } from '@/api/article'
    export default {
      props: {
        className: {
          type: String,
          default: 'chart'
        },
        id: {
          type: String,
          default: 'chart'
        },
        width: {
          type: String,
          default: '200px'
        },
        height: {
          type: String,
          default: '200px'
        },
        netFlowData: {
          type: Object,
          default: () => {
            return {
              name: 0,
              value: 0
            }
          }
        }
      },
      data() {
        return {
          chart: null,
          listQuery: {
            page: 1,
            limit: 10
          },
          option: {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            // legend: {
            //   orient: 'vertical',
            //   left: 'left',
            //   data: ['业务网络1', '业务网络2', '业务网络3', '业务网络4', '业务网络5']
            // },
            // textStyle: {
            //   fontSize: 14
            // },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                center: ['35%', '50%'],
                data: [],
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
      },
      mounted() {
        this.initChart()
        setInterval(() => {
          this.getChart()
        }, 8000)
      },
      beforeDestroy() {
        if (!this.chart) {
          return
        }
        this.chart.dispose()
        this.chart = null
      },
      methods: {
        initChart() {
          this.chart = echarts.init(document.getElementById(this.id))
          this.chart.setOption(this.option)
        },
        getChart() {
          getNetFlow(this.listQuery).then(response => {
            console.log('netFlowData', response.data.data.data.total.totalInByL7)
            const items = response.data.data.data.total.totalInByL7
            const objLength = response.data.data.data.total.totalInByL7.length
            for (var i = 0; i < objLength; i++) {
              // let mName = items[i].key
              // let mValue = items[i].y
              // this.option.series[0].data[i].shift()
              this.option.series[0].data[i].push({ name: items[i].key, value: items[i].y })
              // this.option.series[0].data[i].value = items[i].y
            }
            this.chart.setOption(this.option)
          })
        }
      }
    }
</script>

<style scoped>

</style>
