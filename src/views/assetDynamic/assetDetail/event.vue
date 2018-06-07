<template>
  <div class="main">
    <el-row>
      <el-col :span="12" :offset="12">
          <div class="time-picker" v-for="(item,index) in time" :key="index">{{item}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <event-trend id="eventTrend" title="事件趋势"></event-trend>
      </el-col>
      <el-col :span="8" :offset="1">
        <event-grade id="eventGrade" title="事件等级分布"></event-grade>
      </el-col>
    </el-row>
    <div class="table">
      <el-row :gutter="10">
        <el-col :span="4">
          <span class="button">状态维护</span>
        </el-col>
        <el-col :span="2" :offset="6">
          <select id="time" class="select">
            <option value="7" >7天</option>
            <option value="30" >30天</option>
            <option value="90" selected>90天</option>
            <option value="180" >180天</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="ip" class="select">
            <option value="ip" selected>源ip地址</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="targetip" class="select">
            <option value="ip" selected>目标ip地址</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="grade" class="select">
            <option value="ip" selected>事件等级</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="type" class="select">
            <option value="ip" selected>事件类型</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="status" class="select">
            <option value="ip" selected>状态</option>
          </select>
        </el-col>
      </el-row>
      <el-table :data="eventData" style="padding-bottom: 20px;padding-top: 7px"
        size="mini">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="time" sortable label="时间" width="150"></el-table-column>
        <el-table-column prop="eventname" sortable label="事件名称" width="120"></el-table-column>
        <el-table-column prop="eventtype" label="事件类型" width="100"></el-table-column>
        <el-table-column prop="eventgrade" sortable label="事件等级" width="120"></el-table-column>
        <el-table-column prop="source" label="源地址" width="100"></el-table-column>
        <el-table-column prop="target" label="目标地址" width="100"></el-table-column>
        <el-table-column prop="status" label="状态" width="100"></el-table-column>
        <el-table-column label="详情" width="100">
          <template slot-scope="scope">
          <i class="el-icon-document"></i>
          <el-button type="text">详情</el-button>
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
</template>

<script type="text/ecmascript-6">
  import eventTrend from './components/eventTrend'
  import eventGrade from './components/eventGrade'
  import axios from 'axios'
  // import {fetchList} from '../../../api/article'
  export default {
    components: {
      eventTrend,
      eventGrade
    },
    data() {
      return {
        total: 100,
        eventData: [],
        time: ['全部', '7天', '15天', '30天', '90天'],
        listQuery: {
          limit: 10,
          page: 1
        }
      }
    },
    mounted() {
      this.geteventData()
    },
    methods: {
      geteventData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.assets) {
              const data = res.assets
              this.eventData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       time: item.time,
        //       eventname: item.eventname,
        //       eventtype: item.eventtype,
        //       eventgrade: item.eventgrade,
        //       source: item.source,
        //       target: item.target,
        //       status: item.status
        //     })
        //   })
        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.main
  width 974px
  height 100%
  border-top 5px #00A0E9 solid
  border-bottom  2px #E6E6E6 solid
  border-left 2px #E6E6E6 solid
  border-right 2px #E6E6E6 solid
  padding-bottom 30px
  padding-left 26px
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
    padding-top 26px
    color black
    .button
      text-decoration underline
      cursor pointer
      color #00A0E9
    .select
      width 100%
      height 20px
      background-color white
      text-align center
      line-height 20px
</style>

<style>
  .el-table th{
    background: #00A0E9;
    font-weight: bolder;
    color: white;
    text-align: center;
  }
  .el-table tr:nth-child(even){
    color: black;
    background: #f2f2f2;
    text-align: center;
    font-size: 15px;
  }
  .el-table tr:nth-child(odd){
    color: black;
    background: white;
    text-align: center;
    font-size: 15px;
  }
</style>
