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
            show: false,
            data: [{name: '特别重大'}, {name: '重大'}, {name: '较大'}, {name: '一般'}]
          },
          color: getColor(),
          series: [
            {
              name: '应用层协议',
              type: 'pie',
              radius: '75%',
              center: ['45%', '50%'],
              data: [
                {value: 959, name: '特别重大'},
                {value: 844, name: '重大'},
                {value: 713, name: '较大'},
                {value: 654, name: '一般'}
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
