<template>
  <div class="main">
    <el-row :gutter="50">
      <el-col :span="8" :offset="2">
        <vulne-grade id="eventTrend" title="漏洞等级分布"></vulne-grade>
      </el-col>
      <el-col :span="8" :offset="4">
        <vulne-type id="eventGrade" title="漏洞类型分布"></vulne-type>
      </el-col>
    </el-row>
    <div class="table">
      <el-row :gutter="10">
        <el-col :span="2">
          <span class="button" @click="clickMaintain" style="color: #00A0E9">状态维护</span>
        </el-col>
        <el-col :span="2">
          <span class="button" @click="clickDelete" style="color: red">删除</span>
        </el-col>
        <el-col :span="2" :offset="12">
          <select id="grade" class="select">
            <option value="ip" selected>漏洞等级</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="type" class="select">
            <option value="ip" selected>漏洞类型</option>
          </select>
        </el-col>
        <el-col :span="2">
          <select id="status" class="select">
            <option value="ip" selected>修复状态</option>
          </select>
        </el-col>
      </el-row>
      <el-table :data="vulneData" tooltip-effect="dark" style="padding-bottom: 20px;padding-top: 7px"
                size="mini">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="time" sortable label="时间" width="150"></el-table-column>
        <el-table-column prop="name" sortable label="漏洞名称" width="120"></el-table-column>
        <el-table-column prop="type" label="漏洞类型" width="100"></el-table-column>
        <el-table-column prop="grade" sortable label="漏洞等级" width="120"></el-table-column>
        <el-table-column prop="application" label="应用程序" width="100"></el-table-column>
        <el-table-column label="修复方案" width="100">
          <template slot-scope="scope">
            <i class="el-icon-tickets"></i>
            <el-button type="text">修复方案</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="result" label="修复结果" width="100"></el-table-column>
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
  import vulneGrade from './components/vulneGrade'
  import vulneType from './components/vulneType'
  // import {fetchList} from '../../../api/article'
  import axios from 'axios'
  export default {
    components: {
      vulneGrade,
      vulneType
    },
    data() {
      return {
        total: 100,
        vulneData: [],
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
      clickMaintain() {
        this.$confirm('确定对该资产状态进行维护吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      clickDelete() {
        this.$confirm('确定删除？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      getData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.vulne) {
              const data = res.vulne
              this.vulneData = data
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
  .main
    padding-top 20px
    width 1000px
    height 100%
    border-top 5px #00A0E9 solid
    border-bottom  2px #E6E6E6 solid
    border-left 2px #E6E6E6 solid
    border-right 2px #E6E6E6 solid
    margin auto
    padding-bottom 30px
    .time-picker
      display inline-block
      width 50px
      height 20px
      line-height 20px
      background-color #E6E6E6
      font-size 12px
      color black
    .table
      padding-top 26px
      padding-left 20px
      color black
      .button
        text-decoration underline
        cursor pointer
        line-height 20px
      .select
        width 80px
        height 20px
        line-height 20px
        background-color white
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
