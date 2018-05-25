<template>
  <div style="background-color: white">
  <div class="box">
    <div class="cards">
      <el-row class="header">
        <el-col :span="4"><span>资产列表</span></el-col>
        <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
      </el-row>
      <div class="table">
        <el-row :gutter="10">
          <el-col :span="2">
            <span class="button" style="color: #00A0E9">编辑</span>
          </el-col>
          <el-col :span="2">
            <span class="button" @click="clickDelete" style="color: red">删除</span>
          </el-col>
          <el-col :span="2" :offset="12">
            <select id="net" class="select">
              <option value="ip" selected>所有网络</option>
            </select>
          </el-col>
          <el-col :span="2">
            <select id="type" class="select">
              <option value="type1" selected>所有类型</option>
            </select>
          </el-col>
          <el-col :span="2">
            <select id="status" class="select">
              <option value="comfirm" selected>资产状态</option>
            </select>
          </el-col>
          <el-col :span="2">
            <select id="grade" class="select">
              <option value="high" selected>等级</option>
            </select>
          </el-col>
        </el-row>
        <el-table :data="listData" tooltip-effect="dark" size="mini">
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column prop="name" sortable label="资产名称" width="110"></el-table-column>
          <el-table-column prop="ip" sortable label="IP地址" width="120"></el-table-column>
          <el-table-column prop="mac" label="MAC地址" width="160"></el-table-column>
          <el-table-column prop="system" sortable label="操作系统" width="120"></el-table-column>
          <el-table-column prop="business" label="所属业务" width="100"></el-table-column>
          <el-table-column prop="type" label="类型" width="80"></el-table-column>
          <el-table-column prop="grade" label="等级" width="80"></el-table-column>
          <el-table-column prop="status" label="资产状态" width="100"></el-table-column>
          <el-table-column prop="time" label="发现时间"></el-table-column>
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
            if (res.assetList) {
              const data = res.assetList
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
    width 1100px
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
        padding-bottom 100px
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
    margin-top 300px
    color black
    height 50px
    text-align center
</style>

<style>
  .el-table th{
    background: #00A0E9;
    font-weight: bolder;
    color: white;
    text-align: center;
    font-size: 12px;
  }
  .el-table tr:nth-child(even){
    color: black;
    background: #f2f2f2;
    text-align: center;
    font-size: 12px;
  }
  .el-table tr:nth-child(odd){
    color: black;
    background: white;
    text-align: center;
    font-size: 12px;
  }
</style>
