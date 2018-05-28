<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>事件列表</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <div class="table">
          <el-row :gutter="10">
            <el-col :span="2">
              <span class="button" style="color: #00A0E9">状态维护</span>
            </el-col>
            <el-col :span="2" :offset="11">
              <select id="grade" class="select">
                <option value="ip" selected>事件等级</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="type" class="select">
                <option value="type1" selected>事件类型</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="sourceIP" class="select">
                <option value="comfirm" selected>源IP地址</option>
              </select>
            </el-col>
            <el-col :span="3">
              <select id="targetIP" class="select">
                <option value="high" selected>目地IP地址</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="status" class="select">
                <option value="high" selected>事件状态</option>
              </select>
            </el-col>
          </el-row>
          <el-table :data="listData" size="mini">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="name" sortable label="事件名称" width="150"></el-table-column>
            <el-table-column prop="type" sortable label="事件类型" width="120"></el-table-column>
            <el-table-column prop="grade" label="事件等级" width="100"></el-table-column>
            <el-table-column prop="sourceIP" sortable label="源IP地址" width="150"></el-table-column>
            <el-table-column prop="targetIP" label="目标IP地址" width="150"></el-table-column>
            <el-table-column prop="status" label="事件状态" width="120"></el-table-column>
            <el-table-column prop="time" label="检测时间" width="180"></el-table-column>
            <el-table-column  label="详情">
              <template slot-scope="scope">
                <el-button size="mini" type="text">详情</el-button>
              </template>
            </el-table-column>
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
      <footer class="footer">
        <p>Copyright © LANXUM ALL Right Reserved. 北京立思辰科技股份有限公司 京ICP备13008717号-1</p>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data() {
      return {
        total: 100,
        listData: [],
        listQuery: {
          limit: 10,
          page: 1
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        axios.get('/api/otherDynamic/eventTable.json')
          .then(res => {
            res = res.data
            if (res.ret && res.eventList) {
              const data = res.eventList
              this.listData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       time: item.time,
        //       name: item.name,
        //       type: item.type,
        //       grade: item.grade,
        //       application: item.application
        //     })
        //   })
        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box
    margin auto
    width 70%
    padding-top 25px
    .cards
      width 100%
      border-radius 5px
      border 2px #E6E6E6 solid
      .header
        height 50px
        border-radius 5px
        line-height 50px
        background-color #E6E6E6
        padding-left 26px
        color #333333
      .table
        padding-top 26px
        padding-left 20px
        padding-right 20px
        color black
        padding-bottom 50px
        .button
          text-decoration underline
          cursor pointer
          line-height 25px
        .select
          width 100%
          height 25px
          line-height 25px
          background-color white
          margin-bottom 3px
  .footer
    margin-top 50px
    color black
    height 50px
    text-align center
</style>
