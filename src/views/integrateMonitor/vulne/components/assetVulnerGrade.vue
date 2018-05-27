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
            data: ['高危', '中危', '低危', '严重', '信息']
          },
          series: [
            {
              name: '漏洞等级分布',
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              data: [
                {value: 335, name: '高危'},
                {value: 310, name: '中危'},
                {value: 234, name: '低危'},
                {value: 135, name: '严重'},
                {value: 548, name: '信息'}
              ]
            }
          ]
        }
      }
    }
  }
</script>
