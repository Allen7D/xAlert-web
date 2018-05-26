<script type="text/ecmascript-6">
  // 饼图和柱状图结合
  // http://echarts.baidu.com/examples/editor.html?c=watermark
  // 两个柱状图结合
  // http://echarts.baidu.com/examples/editor.html?c=dataset-series-layout-by&theme=light
  import analysis from 'components/analysis/analysis'
  export default {
    extends: analysis,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            show: false,
            data: ['严重', '高危', '中危', '低危', '信息']
          },
          xAxis: [
            {type: 'category', gridIndex: 0, data: ['很高', '高', '中', '低', '很低'], name: '资产等级', nameLocation: 'start', nameTextStyle: {fontSize: 13, color: 'black', padding: [60, -40, 3, 16]}},
            {type: 'category', gridIndex: 1, data: ['类型1', '类型2', '类型3', '类型4', '类型5'], name: '资产类型', nameLocation: 'start', nameTextStyle: {fontSize: 13, color: 'black', padding: [60, -40, 3, 16]}}
          ],
          yAxis: [
            {gridIndex: 0, type: 'value', name: '漏洞等级数量', nameLocation: 'start', nameTextStyle: {fontSize: 13, color: 'black', padding: [-270, 15, 3, 16]}},
            {gridIndex: 1, type: 'value', name: '漏洞等级数量', nameLocation: 'start', nameTextStyle: {fontSize: 13, color: 'black', padding: [-270, 15, 3, 16]}}
          ],
          grid: [
            {left: '30%', width: '30%'},
            {right: '3%', width: '30%'}
          ],
          series: [
            // These series are in the first grid.
            {name: '严重', type: 'bar', stack: '等级', barWidth: '50%', data: [23, 23, 23, 23, 23]},
            {name: '高危', type: 'bar', stack: '等级', barWidth: '50%', data: [9, 9, 9, 9, 9]},
            {name: '中危', type: 'bar', stack: '等级', barWidth: '50%', data: [18, 18, 18, 18, 18]},
            {name: '低危', type: 'bar', stack: '等级', barWidth: '50%', data: [32, 32, 32, 32, 32]},
            {name: '信息', type: 'bar', stack: '等级', barWidth: '50%', data: [9, 9, 9, 9, 9]},
            // These series are in the second grid.
            {name: '严重', type: 'bar', stack: '类型', barWidth: '50%', xAxisIndex: 1, yAxisIndex: 1, data: [23, 23, 23, 23, 23]},
            {name: '高危', type: 'bar', stack: '类型', barWidth: '50%', xAxisIndex: 1, yAxisIndex: 1, data: [9, 9, 9, 9, 9]},
            {name: '中危', type: 'bar', stack: '类型', barWidth: '50%', xAxisIndex: 1, yAxisIndex: 1, data: [18, 18, 18, 18, 18]},
            {name: '低危', type: 'bar', stack: '类型', barWidth: '50%', xAxisIndex: 1, yAxisIndex: 1, data: [32, 32, 32, 32, 32]},
            {name: '信息', type: 'bar', stack: '类型', barWidth: '50%', xAxisIndex: 1, yAxisIndex: 1, data: [9, 9, 9, 9, 9]},
            {
              name: '漏洞等级',
              type: 'pie',
              radius: '60%',
              center: ['13%', '45%'],
              data: [
                {value: 335, name: '中危'},
                {value: 310, name: '高危'},
                {value: 234, name: '严重'},
                {value: 135, name: '信息'},
                {value: 548, name: '低危'}
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
