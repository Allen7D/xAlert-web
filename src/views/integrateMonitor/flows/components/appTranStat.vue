<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-tick-align
  import Chart from 'components/charts/chart'
  import { filterChart } from '@/utils/index'
  export default {
    extends: Chart,
    props: {
      data: {
        type: Array
      },
      data2: {
        type: Array
      }
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      localDataInByL4() {
        return filterChart(this.data, 'value', 5)
      },
      localDataInByL7() {
        return filterChart(this.data2, 'value', 5)
      },
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}协议 : {c}  ({d}%)'
          },
          calculable: true,
          title: [
            {
              text: '应用层协议统计',
              top: '85%',
              left: '15%',
              textStyle: {
                color: '#fefefe',
                fontSize: '18'
              }
            },
            {
              text: '传输层协议统计',
              top: '85%',
              right: '15%',
              textStyle: {
                color: '#fefefe'
              }
            }
          ],
          series: [
            {
              name: '应用层协议统计',
              type: 'pie',
              radius: '60%',
              center: ['25%', '50%'],
              data: this.localDataInByL7,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: '传输层协议统计',
              type: 'pie',
              radius: '60%',
              center: ['75%', '50%'],
              data: this.localDataInByL4,
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
