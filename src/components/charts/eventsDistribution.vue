<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" :data="eventsDistributionData"></div>
</template>

<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
    import echarts from 'echarts'
    import { fetchList } from '@/api/article'
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
        eventsDistributionData: {
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
                name: '关键操作：按规则细分',
                type: 'pie',
                radius: '75%',
                center: ['35%', '47%'],
                data: [
                  {value: this.eventsDistributionData.high, name: '高危'},
                  {value: this.eventsDistributionData.medium, name: '中危'},
                  {value: this.eventsDistributionData.low, name: '低危'}
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
          // console.log(this.data)
        },
        getChart() {
          fetchList(this.listQuery).then(res => {
            // console.log('eventsDistributionData', res.data.data.data)
            var m = new Map()
            for (let i = 0; i < res.data.data.data.length; i++) {
              var mKey = res.data.data.data[i].rule.severity
              var mValue = res.data.data.data[i].count
              if (mKey === 'HIGH') {
                if (m.get('HIGH') != null) {
                  m.set('HIGH', m.get('HIGH') + res.data.data.data[i].count)
                } else {
                  m.set('HIGH', res.data.data.data[i].count)
                }
              } else if (mKey === 'MEDIUM') {
                if (m.get('MEDIUM') != null) {
                  m.set('MEDIUM', m.get('MEDIUM') + mValue)
                } else {
                  m.set('MEDIUM', mValue)
                }
              } else {
                if (m.get('LOW') != null) {
                  m.set('LOW', m.get('LOW') + mValue)
                } else {
                  m.set('LOW', mValue)
                }
              }
            }
            this.eventsDistributionData.high = m.get('HIGH')
            this.eventsDistributionData.medium = m.get('MEDIUM')
            this.eventsDistributionData.low = m.get('LOW')
            // console.log(m.get('HIGH'))
            // console.log(m.get('MEDIUM'))
            // console.log(m.get('LOW'))
            this.option.series[0].data[0].value = this.eventsDistributionData.high
            this.option.series[0].data[1].value = this.eventsDistributionData.medium
            this.option.series[0].data[2].value = this.eventsDistributionData.low
            this.chart.setOption(this.option)
          })
        }
      }
    }
</script>

<style scoped>

</style>
