<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>{{title}}</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <div class="table">
          <el-row>
            <el-col :span="3">
              <select id="type" class="select">
                <option value="type1" selected>所有业务网络</option>
              </select>
            </el-col>
            <el-col :span="13" :offset="8">
              <div class="time-picker" v-for="(item,index) in time" :key="index">{{item}}</div>
            </el-col>
          </el-row>
          <el-table :data="listData" size="mini">
            <el-table-column prop="protocol" label="应用协议" width="150"></el-table-column>
            <el-table-column prop="name" label="资产名称" width="150"></el-table-column>
            <el-table-column prop="IP" label="IP地址" width="200"></el-table-column>
            <el-table-column prop="business" label="所属业务" width="200"></el-table-column>
            <el-table-column prop="rate" label="接收比例" width="200"></el-table-column>
            <el-table-column prop="traffic" label="通讯量"></el-table-column>
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
    props: {
      title: {
       type: String,
       default: 'HTTP'
      }
    },
    data() {
      return {
        time: ['1H', '6H', '24H', '7天', '30天', '30天', '自定义'],
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
        axios.get('/api/otherDynamic/protocolTable.json')
          .then(res => {
            res = res.data
            if (res.ret && res.protocol) {
              const data = res.protocol
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
        .time-picker
          display inline-block
          width 70px
          height 25px
          line-height 25px
          background-color #E6E6E6
          font-size 15px
          color black
          margin 5px
          text-align center
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
