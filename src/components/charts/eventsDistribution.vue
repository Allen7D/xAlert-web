<template>
  <div :class="className" :id="id" :style="{height: '280px',width: '100%'}" :data="data"></div>
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
        },
        data: {
          type: Object,
          default: () => {
            return {
              high: 0,
              medium: 0,
              low: 0
            }
          }
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
            series: [
              {
                name: '关键操作：按规则细分',
                type: 'pie',
                radius: '75%',
                center: ['35%', '47%'],
                data: [
                  {value: this.data.high, name: '高危'},
                  {value: this.data.medium, name: '中危'},
                  {value: this.data.low, name: '低危'}
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
        this.chart.setOption(this.option)
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
