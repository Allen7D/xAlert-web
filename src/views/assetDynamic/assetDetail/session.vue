<template>
  <div class="main">
    <el-row class="header" :gutter="10">
      <el-col :span="2">
        <span style="font-weight: bolder">会话排行</span>
      </el-col>
      <el-col :span="14" :offset="8">
        <div class="time-picker" v-for="(item,index) in time" :key="index">{{item}}</div>
      </el-col>
    </el-row>
    <div class="table">
      <el-table :data="sessionData" tooltip-effect="dark" style="padding-bottom: 20px;padding-top: 7px"
                size="small">
        <el-table-column prop="device"  label="会话设备" width="250"></el-table-column>
        <el-table-column prop="IP" label="事件名称" width="250"></el-table-column>
        <el-table-column prop="protocol" label="应用层协议" width="250"></el-table-column>
        <el-table-column prop="flow" label="流量" width="200"></el-table-column>
      </el-table>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-pagination
            :current-page.sync="listQuery.page"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="listQuery.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data() {
      return {
        total: 100,
        sessionData: [],
        time: ['全部', '7天', '15天', '30天', '90天', '自定义'],
        listQuery: {
          limit: 10,
          page: 1
        }
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res) {
              const data = res.session
              this.sessionData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       device: item.time,
        //       IP: item.eventname,
        //       protocol: item.eventtype,
        //       flow: item.eventgrade,
        //     })
        //   })
        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .main
    width 1000px
    height 100%
    border-top 5px #00A0E9 solid
    border-bottom  2px #E6E6E6 solid
    border-left 2px #E6E6E6 solid
    border-right 2px #E6E6E6 solid
    padding-bottom 30px
    .header
      height 50px
      color black
      line-height 50px
      padding-left 42px
      .time-picker
        display inline-block
        width 70px
        height 25px
        line-height 25px
        background-color #E6E6E6
        font-size 15px
        color black
        margin 10px
        text-align center
    .table
      padding-left 30px
      color black
</style>
