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
            data: ['很高', '高', '中', '低', '很低', '未知'],
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
              name: '很高',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '高',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '中',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '低',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '很低',
              type: 'bar',
              barWidth: '50%',
              stack: '资产',
              data: []
            },
            {
              name: '未知',
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