<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          color: getColor(),
          series: [
            {
              name: '资产来源',
              type: 'pie',
              radius: '75%',
              center: ['35%', '47%'],
              data: [
                {value: 12, name: '业务网络1'},
                {value: 25, name: '业务网络2'},
                {value: 10, name: '业务网络5'},
                {value: 37, name: '业务网络4'},
                {value: 11, name: '业务网络3'}
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
    }
  }
</script>
