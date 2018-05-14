<template>
  <div class="item" :style="itemHeight">
    <div :id="id" ></div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import { getColor } from '@/utils/index'
  import echarts from 'echarts'
  export default {
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      height: {
        type: Number,
        default: 330
      }
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      itemHeight() {
        return {height: `${this.height}px`}
      },
      chartHeight() {
        return {height: `${this.height - 50}px`}
      }
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      drawChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              data: ['高危', '中危', '低危', '信息', '未定义']
            },
            series: [{
              name: '漏洞统计',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  fontSize: '15'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '25',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '高危'},
                {value: 335, name: '中危'},
                {value: 335, name: '低危'},
                {value: 335, name: '信息'},
                {value: 335, name: '未定义'}]
            }]
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    height: 330px
    margin-bottom 28px
    position: relative
</style>
