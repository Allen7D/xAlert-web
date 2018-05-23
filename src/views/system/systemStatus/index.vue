<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="管理平台" name="platform">
        <platform></platform>
        <div class="info-wrapper">
          <systemWrapper title="系统资源">
            <sysResource></sysResource>
          </systemWrapper>
        </div>
      </el-tab-pane>
      <el-tab-pane label="采集器" name="probe">
        <probe></probe>
        <div class="info-wrapper">
          <systemWrapper title="系统资源">
            <sysResource></sysResource>
          </systemWrapper>
        </div>
        <div class="chart-wrapper">
          <flow-stat title="实时流量统计" id="flowStat"></flow-stat>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import platform from './platform'
  import probe from './probe'
  import systemWrapper from 'components/table/systemWrapper'
  import sysResource from './components/sysResource'
  import flowStat from './components/flowStat'
  export default {
    components: {
      platform,
      probe,
      systemWrapper,
      sysResource,
      flowStat
    },
    data() {
      return {
        activeName: 'platform',
        selectVal: 'platform-one'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container {
    background-color #fff
    height 1300px
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
