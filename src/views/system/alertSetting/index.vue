<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="告警联系人" name="alertContact">
        <alertTabWrapper title="添加联系人">
          <alertContactTab></alertContactTab>
        </alertTabWrapper>
      </el-tab-pane>
      <el-tab-pane label="告警设置" name="alertSetting">
        <alertTabWrapper title="新增告警项">
          <alertList></alertList>
        </alertTabWrapper>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import alertTabWrapper from 'components/table/alertTabWrapper'
  import alertContactTab from './components/alertContactTab'
  import alertList from './components/alertList'
  export default {
    components: {
      alertTabWrapper,
      alertContactTab,
      alertList
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
