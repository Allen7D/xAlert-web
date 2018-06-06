<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  import { getColor, filterChart } from '@/utils/index'
    export default {
      extends: Chart,
      props: {
        data: {
          type: Array
        }
      },
      data() {
        return {
          chart: null
        }
      },
      computed: {
        localData() {
          return filterChart(this.data, 'value', 5)
        },
        params() {
          let i = 0
          return this.localData.map((item) => {
            return {name: item.name, color: getColor()[i++], select: true}
          })
        },
        option() {
          return {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} byte ({d}%)'
            },
            legend: {
              show: false
            },
            color: getColor(),
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '65%',
                center: ['45%', '60%'],
                data: this.localData,
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
      }
    }
</script>
