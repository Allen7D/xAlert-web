<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="会话统计" name="session">
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
      <el-tab-pane label="流量统计" name="flowStat">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <sendSource id="sendSource" title="发送源" :height="500" width="40%" float="left">
                    <div style="padding: 35px 30px 0">
                      <sendSourceTable :dataList="sendSourceData"></sendSourceTable>
                    </div>
                  </sendSource>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <receiveSource id="acceptSource" title="接收源" :height="500" width="40%" float="left">
                    <div style="padding: 35px 30px 0">
                      <receiveSourceTable :dataList="receiveSourceData"></receiveSourceTable>
                    </div>
                  </receiveSource>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="协议统计" name="ProtoStat">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <app-proto id="appProto" title="应用协议" :height="500" width="40%" float="left">
                    <div style="padding: 35px 30px 0">
                      <appProtoTable :dataList="appProtoData"></appProtoTable>
                    </div>
                  </app-proto>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <tran-proto id="tranProto" title="传输层协议" :height="500" width="40%" float="left">
                    <div style="padding: 35px 30px 0">
                      <tranProtoTable :dataList="tranProtoData"></tranProtoTable>
                    </div>
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
  import sendSourceTable from './components/sendSourceTable'
  import receiveSource from './components/receiveSource'
  import receiveSourceTable from './components/receiveSourceTable'
  import appProto from './components/appProtocol'
  import appProtoTable from './components/appProtoTable'
  import tranProto from './components/tranProtocol'
  import tranProtoTable from './components/tranProtoTable'
  import axios from 'axios'
  export default {
    components: {
      newTableWrapper,
      business,
      sessRank,
      flowUsage,
      sendSource,
      sendSourceTable,
      receiveSource,
      receiveSourceTable,
      appProto,
      appProtoTable,
      tranProto,
      tranProtoTable
    },
    data() {
      return {
        activeName: 'session',
        sessRankList: [],
        sendSourceData: [],
        receiveSourceData: [],
        appProtoData: [],
        tranProtoData: []
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
      },
      getSendSourceData() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.sendSourceData = data.sendSource
            }
          })
      },
      getReceiveSourceData() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.receiveSourceData = data.receiveSource
            }
          })
      },
      getAppProtoData() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.appProtoData = data.appProto
            }
          })
      },
      getTranProtoData() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.tranProtoData = data.tranProto
            }
          })
      }
    },
    created() {
      this.getSessRankList()
      this.getSendSourceData()
      this.getReceiveSourceData()
      this.getAppProtoData()
      this.getTranProtoData()
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
