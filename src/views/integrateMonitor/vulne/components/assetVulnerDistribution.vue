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
            data: ['业务网络1', '业务网络2', '业务网络5', '业务网络4', '业务网络3']
          },
          series: [
            {
              name: '资产漏洞分布',
              type: 'pie',
              radius: '55%',
              center: ['25%', '50%'],
              data: [
                {value: 335, name: '业务网络1'},
                {value: 310, name: '业务网络2'},
                {value: 234, name: '业务网络5'},
                {value: 135, name: '业务网络4'},
                {value: 548, name: '业务网络3'}
              ]
            }
          ]
        }
      }
    }
  }
</script>
