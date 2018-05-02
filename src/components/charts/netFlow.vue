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
              data: [{name: 'http'}, {name: 'https'}, {name: 'TCP/IP'}, {name: 'NetBEUI'},
                {name: 'iec104'}, {name: 'modbus'}, {name: '其他'}]
            },
            color: getColor(),
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                center: ['35%', '50%'],
                data: [
                  {value: 959, name: 'http'},
                  {value: 844, name: 'https'},
                  {value: 713, name: 'TCP/IP'},
                  {value: 654, name: 'NetBEUI'},
                  {value: 508, name: 'iec104'},
                  {value: 487, name: 'modbus'},
                  {value: 400, name: '其他'}
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
      },
      computed: {
        params() {
          let i = 0
          return this.option.series[0].data.map((item) => {
            return {name: item.name, color: this.option.color[i++], select: true}
          })
        }
      }
    }
</script>
