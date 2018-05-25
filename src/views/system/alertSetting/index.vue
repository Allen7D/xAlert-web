<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="告警联系人" name="alertContact">
        <alertContact></alertContact>
      </el-tab-pane>
      <el-tab-pane label="告警设置" name="alertSetting">
        <alertSetting></alertSetting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import alertContact from './alertContact'
  import alertSetting from './alertSetting'
  export default {
    components: {
      alertContact,
      alertSetting
    },
    data() {
      return {
        activeName: 'alertContact'
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
