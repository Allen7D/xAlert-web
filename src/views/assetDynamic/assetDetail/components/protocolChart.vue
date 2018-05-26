<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import assetChart from 'components/assetDynamic/assetChart'
  import { getColor } from '@/utils/index'
  export default {
    extends: assetChart,
    data() {
      return {
        datas: [],
        chart: null,
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          grid: {
            left: '3%'
          },
          legend: {
            show: false,
            data: []
          },
          color: getColor(),
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '75%',
              center: ['40%', '50%'],
              data: [
                {value: 959, name: '很高'},
                {value: 844, name: '高'},
                {value: 713, name: '中'},
                {value: 654, name: '低'},
                {value: 508, name: '很低'}
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
