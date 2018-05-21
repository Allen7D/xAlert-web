<script>
  import analysis from 'components/analysis/analysis'
    export default {
      extends: analysis,
      data() {
        return {
          chart: null,
          option: {
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove'
            },
            series: [
              {
                type: 'sankey',
                layout: 'none',
                data: [{name: '数据1', value: 10}, {name: '数据2', value: 20}, {name: '数据3', value: 20}, {name: '数据4', value: 10}],
                links: [{source: '数据1', target: '数据3', value: 9}, {source: '数据2', target: '数据3', value: 11}, {source: '数据1', target: '数据4', value: 1}, {source: '数据2', target: '数据4', value: 9}],
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: '#aaa'
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5
                  }
                }
              }
            ]
          }
        }
      }
    }
</script>
