<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" :data="data"></div>
</template>

<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import echarts from 'echarts'
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
        this.option.series.data.value[0].push(this.data.high)
        this.option.series.data.value[1].push(this.data.medium)
        this.option.series.data.value[2].push(this.data.low)
        this.chart.setOption(this.option)
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
          // console.log(this.data)
        }
      }
    }
</script>

<style scoped>

</style>
