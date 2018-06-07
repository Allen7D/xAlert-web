<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    props: {
      data: {
        type: Array
      }
    },
    computed: {
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} 个 ({d}%)'
          },
          color: getColor(),
          series: [
            {
              name: '资产来源',
              type: 'pie',
              radius: '75%',
              center: ['45%', '50%'],
              data: this.data,
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
    data() {
      return {
        chart: null
      }
    }
  }
</script>
