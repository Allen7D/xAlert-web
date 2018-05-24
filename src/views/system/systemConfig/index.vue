<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="管理平台" name="platform">
        <platform></platform>
      </el-tab-pane>
      <el-tab-pane label="采集器" name="probe">
        <probe></probe>
      </el-tab-pane>
      <el-tab-pane label="日期时间配置" name="timeConfig">
        <dateConfig></dateConfig>
      </el-tab-pane>
      <el-tab-pane label="系统升级" name="sysUpdate">
        <systemUpdate></systemUpdate>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import platform from './platform'
  import probe from './probe'
  import dateConfig from './dateConfig'
  import systemUpdate from './systemUpdate'
  // import axios from 'axios'
  export default {
    components: {
      platform,
      probe,
      dateConfig,
      systemUpdate
    },
    data() {
      return {
        activeName: 'platform'
      }
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container {
    background-color #fff
    height 1300px
  }
</style>
