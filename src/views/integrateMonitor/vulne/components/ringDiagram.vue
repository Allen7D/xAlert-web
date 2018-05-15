<!--http://echarts.baidu.com/examples/editor.html?c=pie-doughnut-->
<template>
  <div class="item">
    <div :id="id" :style="{height:height}" ref="myEchart"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props: {
      id: {
        type: String,
        default: 'yourID'
      },
      height: {
        type: String,
        default: '330px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
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
        this.chart = echarts.init(this.$refs.myEchart)
        // 把配置和数据放这里
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '漏洞统计',
              type: 'pie',
              radius: ['40%', '65%'],
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
                {value: 235, name: '高危'},
                {value: 178, name: '中危'},
                {value: 243, name: '低危'},
                {value: 135, name: '信息'},
                {value: 335, name: '未定义'}]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    margin-bottom 18px
    position: relative
    top: -40px
</style>
