<template>
  <div>
    <div class="text-wrapper">
      <porbeList></porbeList>
    </div>
    <div class="info-wrapper">
      <systemWrapper title="系统资源">
        <sysResource></sysResource>
      </systemWrapper>
    </div>
    <div class="chart-wrapper">
      <flow-stat title="实时流量统计" id="flowStat"></flow-stat>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import porbeList from './components/probeList'
  import systemWrapper from 'components/table/systemWrapper'
  import flowStat from './components/flowStat'
  import sysResource from './components/sysResource'
  export default {
    components: {
      porbeList,
      systemWrapper,
      flowStat,
      sysResource
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .text-wrapper {
    width 800px
    height 420px
    background-color #eee
    margin-top 20px
    margin-left auto
    margin-right auto
    padding 20px
  }
  .info-wrapper {
    margin 0 auto
    width 840px
    // border 1px solid #f00
  }
  .chart-wrapper {
    margin 20px auto
    width 880px
  }
</style>
