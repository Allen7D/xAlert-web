<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="管理平台" name="platform">
        <platform></platform>
      </el-tab-pane>
      <el-tab-pane label="采集器" name="probe">
        <probe></probe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import platform from './platform'
  import probe from './probe'
  export default {
    components: {
      platform,
      probe
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
</style>
