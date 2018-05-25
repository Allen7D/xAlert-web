<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>实时在线活动资产列表</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <div class="table">
          <el-row :gutter="10">
            <el-col :span="2">
              <select id="net" class="select">
                <option value="ip" selected>所有网络</option>
              </select>
            </el-col>
            <el-col :span="2" :offset="14">
              <select id="status" class="select">
                <option value="ip" selected>安全状态</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="type" class="select">
                <option value="ip" selected>资产类型</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="assetstatus" class="select">
                <option value="ip" selected>资产状态</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="grade" class="select">
                <option value="grade" selected>等级</option>
              </select>
            </el-col>
          </el-row>
          <el-table :data="listData" style="padding-top: 7px;padding-bottom: 30px"
                    size="mini">
            <el-table-column prop="name" sortable label="资产名称" width="120"></el-table-column>
            <el-table-column prop="ip" sortable label="IP地址" width="120"></el-table-column>
            <el-table-column prop="business" label="所属业务" width="100"></el-table-column>
            <el-table-column prop="type" sortable label="类型" width="100"></el-table-column>
            <el-table-column prop="grade" label="等级" width="80"></el-table-column>
            <el-table-column prop="status" label="资产状态" width="100"></el-table-column>
            <el-table-column prop="event" label="事件" width="80"></el-table-column>
            <el-table-column prop="vulne" label="漏洞" width="80"></el-table-column>
            <el-table-column prop="port" label="端口" width="80"></el-table-column>
            <el-table-column prop="rate" label="吞吐率" width="100"></el-table-column>
            <el-table-column prop="time" label="更新时间"></el-table-column>
          </el-table>
          <el-pagination
            :current-page.sync="listQuery.page"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="listQuery.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import {fetchList} from '../../../api/article'
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
    created() {
      this.getData()
    },
    methods: {
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
            if (res.onlineList) {
              const data = res.onlineList
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
    width 1200px
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
        color black
        padding-bottom 100px
        padding-right 20px
        .select
          line-height 25px
          width 80px
          height 25px
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
