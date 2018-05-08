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
                name: '关键操作：按规则细分',
                type: 'pie',
                radius: '75%',
                center: ['35%', '47%'],
                data: [
                  {value: 11, name: '高危'},
                  {value: 19, name: '中危'},
                  {value: 17, name: '低危'}
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