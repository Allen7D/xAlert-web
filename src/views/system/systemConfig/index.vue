<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="管理平台" name="platform">
        <platform></platform>
      </el-tab-pane>
      <el-tab-pane label="采集器" name="probe">
        <div class="left">
          <collector title="采集器"></collector>
        </div>
        <div class="right">
          <basic-info title="基本信息"></basic-info>
        </div>
      </el-tab-pane>
      <el-tab-pane label="日期时间配置" name="timeConfig">
        <div class="timeConfig-wrapper">
          <systemWrapper title="校时" wrapperHeight="400px">
            <prooTime></prooTime>
          </systemWrapper>
        </div>
      </el-tab-pane>
      <el-tab-pane label="系统升级" name="sysUpdate">
        <div class="sysUpdate-wrapper">
          <systemWrapper title="手动升级" wrapperHeight="225px">
            <manuUpdate></manuUpdate>
          </systemWrapper>
          <systemWrapper title="自动升级" wrapperHeight="250px">
            <autoUpdate></autoUpdate>
          </systemWrapper>
          <systemWrapper title="升级记录" wrapperHeight="350px" tableHeight="200px">
            <updateLog :tableData="updateData"></updateLog>
          </systemWrapper>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import platform from './platform'
  import collector from './components/collector'
  import basicInfo from './components/basicInfo'
  import systemWrapper from 'components/table/systemWrapper'
  import prooTime from './components/prooTime'
  import manuUpdate from './components/manuUpdate'
  import autoUpdate from './components/autoUpdate'
  import updateLog from './components/updateLog'
  import axios from 'axios'
  export default {
    components: {
      platform,
      collector,
      basicInfo,
      systemWrapper,
      prooTime,
      manuUpdate,
      autoUpdate,
      updateLog
    },
    data() {
      return {
        activeName: 'platform',
        updateData: []
      }
    },
    methods: {
      getUpdateData() {
        axios.get('/api/system/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.systemConfig
              this.updateData = data.updateLog
            }
          })
      }
    },
    created() {
      this.getUpdateData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container {
    background-color #fff
    height 1300px
  }
  .timeConfig-wrapper {
    // border 1px solid #6e6e6e
    height 800px
    margin 20px auto
  }
  .sysUpdate-wrapper {
    margin 20px auto
  }
  .timeConfig-wrapper
  .sysUpdate-wrapper{
    width 900px
  }
  .left {
    width 413px
    margin-left: 245px
    margin-top: 25px
    float left
  }
  .right {
    width 536px
    margin-top 25px
    margin-left 13px
    float left
  }
</style>
