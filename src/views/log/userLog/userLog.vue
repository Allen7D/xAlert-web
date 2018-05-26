<template>
  <div style="background: white;padding-top: 20px">
    <div class="log">
      <div class="log-filter">
        <el-row style="margin-bottom: 15px">
          <el-col :span="12" :offset="2">
            <div class="text">用户名：</div>
            <div style="display: inline-block">
              <el-input size="mini"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom:15px">
          <el-col :span="12" :offset="2">
          <div class="text">开始时间：</div>
          <div style="display: inline-block"><time-picker :time="nowTime"></time-picker></div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 15px">
          <el-col :span="12" :offset="2">
            <div class="text">结束时间：</div>
            <div style="display: inline-block"><time-picker :time="nowTime"></time-picker></div>
          </el-col>
          <el-col :span="2" >
            <el-button type="primary" size="small">查询</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" size="small">导出</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="log-table">
        <div class="table-header">查询结果</div>
        <div class="table-body">
          <el-table :data="userData">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="time" sortable label="时间" width="200"></el-table-column>
            <el-table-column prop="username" sortable label="用户" width="100"></el-table-column>
            <el-table-column prop="rights" label="权限" width="100" ></el-table-column>
            <el-table-column prop="IPAddress" label="IP地址" width="250"></el-table-column>
            <el-table-column prop="content" label="日志内容" ></el-table-column>
          </el-table>
        </div>
        <el-pagination
          :current-page.sync="listQuery.page"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="log-footer"><log-footer></log-footer></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import timePicker from 'components/time-picker/timePicker'
  import logFooter from 'components/footer/footer'
  import axios from 'axios'
  export default {
    components: {
      timePicker,
      logFooter
    },
    data() {
      return {
        nowTime: new Date(),
        userData: [],
        listQuery: {
          limit: 10,
          page: 1
        },
        total: 100,
        radio: '高'
      }
    },
    methods: {
      getuserData() {
        axios.get('/api/log/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.userData = data.user
            }
          })
      }
    },
    mounted() {
      this.getuserData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .log
    width 1000px
    padding-top 20px
    margin-left 20%
    color black
    background #f2f2f2
    border 2px #f2f2f2 solid
    .log-filter
      width 100%
      padding-top 20px
      padding-bottom 20px
      background #f2f2f2
      .text
        width 80px
        text-align right
        display inline-block
        font-size 15px
      .select
        width 102px
        height 17px
        line-height 17px
        background white
      .log-button
        height: 23px
        width 70px
        line-height 23px
        color white
        background #00A0E9
        text-align center
    .log-table
      .table-header
        background #E6E6E6
        height 42px
        line-height 42px
        padding-left 26px
        font-size 20px
        font-weight bolder
      .table-body
        background white
        padding 10px 12px 20px 13px
  .log-footer
    background white
    padding-top 80px
    color black
    padding-bottom 50px
</style>
