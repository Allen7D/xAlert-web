<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="会话统计" name="first">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <new-table-wrapper title="会话排行" tableHeight="350px" wrapperHeight="500px">
              <sessRank :dataList="sessRankList"></sessRank>
            </new-table-wrapper>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <flowUsage id="flowUsage" title="流量使用" wrapperHeight="500px"></flowUsage>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="流量统计">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <sendSource id="sendSource" title="发送源">
                  </sendSource>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <sendSource id="acceptSource" title="接收源">
                  </sendSource>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="协议统计">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <app-proto id="appProto" title="应用协议">
                  </app-proto>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <tran-proto id="tranProto" title="传输层协议">
                  </tran-proto>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import newTableWrapper from 'components/table/newTableWrapper'
  import business from './components/business'
  import sessRank from './components/sessRank'
  import flowUsage from './components/flowUsage'
  import sendSource from './components/sendSource'
  import AcceptSource from './components/AcceptSource'
  import appProto from './components/appProtocol'
  import tranProto from './components/tranProtocol'
  import axios from 'axios'
  export default {
    components: {
      newTableWrapper,
      business,
      sessRank,
      flowUsage,
      sendSource,
      AcceptSource,
      appProto,
      tranProto
    },
    data() {
      return {
        activeName: 'first',
        sessRankList: []
      }
    },
    methods: {
      getSessRankList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.sessRankList = data.sessRank
            }
          })
      }
    },
    created() {
      this.getSessRankList()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .container {
    background-color #fff
  }
  .left {
    background-color #f5f5f5
    height 1164px
  }
  .container
    .el-tabs--card>.el-tabs__header
      margin-bottom 0
</style>
