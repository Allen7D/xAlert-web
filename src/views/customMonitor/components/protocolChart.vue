<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  import {getColor} from '@/utils/index'
  export default {
    extends: Chart,
    props: {
      data: {
        type: Array
      }
    },
    data() {
      return {
        chart: null,
        params: []
      }
    },
    computed: {
      localData() {
        return this.data
      },
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            show: false
          },
          color: getColor(),
          series: [
            {
              name: '应用层协议',
              type: 'pie',
              radius: '75%',
              center: ['45%', '50%'],
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
