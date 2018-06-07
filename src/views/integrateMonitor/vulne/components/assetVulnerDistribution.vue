<script type="text/ecmascript-6">
  import Chart from 'components/charts/chart'
  // import { getColor } from '@/utils/index'

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
          legend: {
            show: false,
            data: ['gushenxing-eth0', 'master-eth0', 'airport-eth0', 'lot-eth0', 'medical-eth0', 'cnc-eth0']
          },
          series: [
            {
              name: '资产漏洞分布',
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              data: [
                {value: 5, name: 'gushenxing-eth0'},
                {value: 1, name: 'master-eth0'},
                {value: 1, name: 'airport-eth0'},
                {value: 3, name: 'lot-eth0'},
                {value: 2, name: 'medical-eth0'},
                {value: 1, name: 'cnc-eth0'}
              ]
            }
          ]
        }
      }
    }
  }
</script>
