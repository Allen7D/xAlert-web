<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        datas: [],
        chart: null,
        option: {
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
              data: [
                {value: 1, name: '严重'},
                {value: 1, name: '高危'},
                {value: 2, name: '中危'},
                {value: 1, name: '低危'}
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
