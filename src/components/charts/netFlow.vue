<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import echarts from 'echarts'
  import { debounce } from '@/utils'
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
        }
      },
      data() {
        return {
          chart: null,
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
                data: [
                  {value: 959, name: 'http'},
                  {value: 844, name: 'https'},
                  {value: 713, name: 'TCP/IP'},
                  {value: 654, name: 'NetBEUI'},
                  {value: 508, name: 'iec104'},
                  {value: 487, name: 'modbus'},
                  {value: 400, name: '其他'}
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
      },
      mounted() {
        this.initChart()
        this.__resizeHanlder = debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 50)
        window.addEventListener('resize', this.__resizeHanlder)
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
        }
      }
    }
</script>

<style scoped>

</style>
