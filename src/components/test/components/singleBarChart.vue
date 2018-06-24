<template>
  <div class="chart" :id="id" :style="[chartWidth, chartPosition]">
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  import { getColor } from '@/utils/index'
  export default {
    components: {
    },
    props: {
      id: {
        type: String,
        default: 'barChart'
      },
      data: {
        type: Array
      },
      width: {
        type: String,
        default: '100%'
      },
      float: {
        type: String,
        default: 'none'
      }
    },
    data() {
      return {
        chart: null,
        params: []
      }
    },
    computed: {
      chartWidth() {
        return {width: this.width}
      },
      chartPosition() {
        return {float: this.float}
      },
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
          grid: {
            left: '50%',
            width: '50%',
            top: '5%',
            bottom: '5%',
            containLabel: true
          },
          color: getColor(),
          xAxis: {
            type: 'category',
            data: this.xAxisdata,
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#4676FF'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#4676FF',
                fontSize: '12'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#4676FF'
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
              type: 'bar',
              data: this.seriesdata,
              barWidth: '50%',
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = ['#749f83', '#d48265', '#bda29a', '#c23531', '#2f4554', '#61a0a8', '#91c7ae', '#ca8622', '#6e7074', '#546570', '#c4ccd3']
                    return colorList[params.dataIndex]
                  }
                }
              }
            }
          ]
        }
      }
    },
    watch: {
      data() {
        this.drawChart()
      },
      $route(to, from) {
        setTimeout(() => {
          this.chart.resize()
        }, 500)
      }
    },
    methods: {
      drawChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
        this.params = this.updateparams()
        let data = this.params
        let chart = this.chart
        this.$emit('singleBarLegend', data)
        this.$emit('drawSingleBar', chart)
      },
      updateparams() {
        let i = 0
        return this.data.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      },
      destroyChart() {
        if (!this.chart) {
          return
        }
        const sidebarElm = document.getElementsByClassName('sidebar')[0]
        sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
        window.removeEventListener('resize', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
      }
    },
    mounted() {
      this.drawChart()
      // 监听窗口的变化
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 5)
      window.addEventListener('resize', this.__resizeHanlder)
      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
    },
    beforeDestroy() {
      this.destroyChart()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .chart
    height 280px
</style>

<!--<template>-->
  <!--<div :id="id" class="barChart" :style="[chartWidth, chartPosition]"></div>-->
<!--</template>-->

<!--<script type="text/ecmascript-6">-->
  <!--import { debounce } from '@/utils'-->
  <!--import { getColor } from '@/utils/index'-->
  <!--import echarts from 'echarts'-->
  <!--export default {-->
    <!--props: {-->
      <!--id: {-->
        <!--type: String,-->
        <!--default: 'singleBarChart'-->
      <!--},-->
      <!--width: {-->
        <!--type: String,-->
        <!--default: '100%'-->
      <!--},-->
      <!--float: {-->
        <!--type: String,-->
        <!--default: 'none'-->
      <!--},-->
      <!--data: Array-->
    <!--},-->
    <!--data() {-->
      <!--return {-->
        <!--chart: null,-->
        <!--params: []-->
      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--xAxisdata() {-->
        <!--return this.data.map((item, index) => {-->
          <!--return item.name-->
        <!--})-->
      <!--},-->
      <!--seriesdata() {-->
        <!--return this.data.map((item, index) => {-->
          <!--return item.value-->
        <!--})-->
      <!--},-->
      <!--chartWidth() {-->
        <!--return {width: this.width}-->
      <!--},-->
      <!--chartPosition() {-->
        <!--return {float: this.float}-->
      <!--},-->
      <!--option() {-->
        <!--return {-->
          <!--color: getColor(),-->
          <!--tooltip: {-->
            <!--trigger: 'axis',-->
            <!--axisPointer: {-->
              <!--type: 'shadow'-->
            <!--}-->
          <!--},-->
          <!--grid: [-->
            <!--{-->
              <!--left: '50%',-->
              <!--top: '5%',-->
              <!--bottom: '5%',-->
              <!--width: '55%',-->
              <!--containLabel: true-->
            <!--}-->
          <!--],-->
          <!--xAxis: [-->
            <!--{-->
              <!--type: 'category',-->
              <!--data: this.xAxisdata,-->
              <!--axisLine: {-->
                <!--lineStyle: {-->
                  <!--color: '#4676FF'-->
                <!--}-->
              <!--},-->
              <!--splitLine: {-->
                <!--show: false-->
              <!--},-->
              <!--axisLabel: {-->
                <!--textStyle: {-->
                  <!--color: '#4676FF',-->
                  <!--fontSize: '15'-->
                <!--}-->
              <!--},-->
              <!--axisTick: {-->
                <!--alignWithLabel: true,-->
                <!--lineStyle: {-->
                  <!--color: '#4676FF'-->
                <!--}-->
              <!--}-->
            <!--}-->
          <!--],-->
          <!--yAxis: [-->
            <!--{-->
              <!--type: 'value',-->
              <!--axisLine: {-->
                <!--lineStyle: {-->
                  <!--color: '#4676FF'-->
                <!--}-->
              <!--},-->
              <!--splitLine: {-->
                <!--show: true,-->
                <!--lineStyle: {-->
                  <!--color: 'rgba(70, 118, 255, 0.2)'-->
                <!--}-->
              <!--},-->
              <!--axisLabel: {-->
                <!--textStyle: {-->
                  <!--color: '#4676FF',-->
                  <!--fontSize: '15'-->
                <!--}-->
              <!--},-->
              <!--axisTick: {-->
                <!--lineStyle: {-->
                  <!--color: '#4676FF'-->
                <!--}-->
              <!--}-->
            <!--}-->
          <!--],-->
          <!--series: [-->
            <!--{-->
              <!--name: '事件类型',-->
              <!--type: 'bar',-->
              <!--barWidth: '30%',-->
              <!--data: this.seriesdata-->
            <!--}-->
          <!--]-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--watch: {-->
      <!--data() {-->
        <!--this.drawBarChart()-->
      <!--},-->
      <!--$route(to, from) {-->
        <!--setTimeout(() => {-->
          <!--this.chart.resize()-->
        <!--}, 500)-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--drawBarChart() {-->
        <!--let $chart = document.getElementById(this.randomId)-->
        <!--this.chart = echarts.init($chart)-->
        <!--this.chart.setOption(this.option)-->
        <!--this.params = this.updateParams()-->
        <!--let data = this.params-->
        <!--let chart = this.chart-->
        <!--this.$emit('pieLegend', data)-->
        <!--this.$emit('drawPie', chart)-->
      <!--},-->
      <!--updateParams() {-->
        <!--let i = 0-->
        <!--return this.data.map((item) => {-->
          <!--return {name: item.name, color: this.option.color[i++], select: true}-->
        <!--})-->
      <!--},-->
      <!--destroyChart() {-->
        <!--if (!this.chart) {-->
          <!--return-->
        <!--}-->
        <!--const sidebarElm = document.getElementsByClassName('sidebar')[0]-->
        <!--sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)-->
        <!--this.chart.dispose()-->
        <!--this.chart = null-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--this.drawBarChart()-->
      <!--// 监听窗口的变化-->
      <!--this.__resizeHanlder = debounce(() => {-->
        <!--if (this.chart) {-->
          <!--this.chart.resize()-->
        <!--}-->
      <!--}, 5)-->
      <!--window.addEventListener('resize', this.__resizeHanlder)-->
      <!--// 监听侧边栏的变化-->
      <!--const sidebarElm = document.getElementsByClassName('sidebar')[0]-->
      <!--sidebarElm.addEventListener('transitionend', this.__resizeHanlder)-->
    <!--},-->
    <!--beforeDestroy() {-->
      <!--this.destroyChart()-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
  <!--.barChart-->
    <!--height 300px-->
<!--</style>-->
