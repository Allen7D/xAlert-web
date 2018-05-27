<template>
  <div class="container">
    <el-row>
      <el-col :span="3" class="left">
        <business title="业务"></business>
        <eventCountStat></eventCountStat>
      </el-col>
      <el-col :span="21">
        <el-row>
          <el-col :xs="24" :sm="24" :lg="24">
            <threeColTabWrapper title="事件类型排名" wrapperHeight="400px">
              <eveStyLeftTab :dataList="eveStyLeftList"></eveStyLeftTab>
              <eveStyCenterTab :dataList="eveStyCenterList" slot="center"></eveStyCenterTab>
              <eveStyRightTab :dataList="eveStyRightList" slot="right"></eveStyRightTab>
            </threeColTabWrapper>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :lg="24">
            <eventStat id="eventStat" title="事件统计" :height="400" width="100%"></eventStat>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :lg="24">
            <new-table-wrapper title="事件列表">
              <eventList :dataList="eventDataList"></eventList>
            </new-table-wrapper>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import business from './components/business'
  import eventCountStat from './components/eventCountStat'
  import threeColTabWrapper from 'components/table/threeColTabWrapper'
  import newTableWrapper from 'components/table/newTableWrapper'
  import eveStyLeftTab from './components/eveStyLeftTab'
  import eveStyCenterTab from './components/eveStyCenterTab'
  import eveStyRightTab from './components/eveStyRightTab'
  import eventStat from './components/eventStat'
  import eventList from './components/eventList'
  import axios from 'axios'
  export default {
    components: {
      business,
      eventCountStat,
      threeColTabWrapper,
      newTableWrapper,
      eveStyLeftTab,
      eveStyCenterTab,
      eveStyRightTab,
      eventStat,
      eventList
    },
    data() {
      return {
        eventDataList: [],
        eveStyLeftList: [],
        eveStyCenterList: [],
        eveStyRightList: []
      }
    },
    methods: {
      getEventDataList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.events
              this.eventDataList = data.eventData
            }
          })
      },
      getEveStyLeftList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.events
              this.eveStyLeftList = data.eveStyLeft
            }
          })
      },
      getEveStyCenterList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.events
              this.eveStyCenterList = data.eveStyCenter
            }
          })
      },
      getEveStyRightList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.events
              this.eveStyRightList = data.eveStyRight
            }
          })
      }
    },
    created() {
      this.getEventDataList()
      this.getEveStyLeftList()
      this.getEveStyCenterList()
      this.getEveStyRightList()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container {
    background-color #fff
  }
  .left {
    background-color #f5f5f5
    height 1350px
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .container
    .el-tabs--card>.el-tabs__header {
      margin-bottom 0
    }
</style>
