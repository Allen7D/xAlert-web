<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-y-category-stack
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          legend: {
            show: false,
            data: ['业务1', '业务2', '业务3', '业务4', '业务5', '业务6'],
            align: 'left',
            left: 90,
            textStyle: {
              color: '#4676FF',
              fontSize: '15'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: ['打印机', '路由器', '电脑', '手机', '平板电脑', '其他'],
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#4676FF'
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: '500px',
                color: '#4676FF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          yAxis: {
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
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          color: getColor(),
          series: [
            {
              name: '业务1',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务2',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务3',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务4',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务5',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '业务6',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            }
          ]
        }
      }
    },
    computed: {
      params() {
        let i = 0
        return this.option.series.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      }
    },
    created() {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          this.option.series[j].data.push(Math.round(Math.random() * 10))
        }
      }
    }
  }
</script>