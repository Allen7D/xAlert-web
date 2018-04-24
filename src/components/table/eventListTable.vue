<template>
  <div class="event-list-table">
    <el-table
      :data="eventListData" border style="width: 100%" height="250">
      <el-table-column
        label="事件名称"
        header-align="center"
        align="center"
        width="210">
        <template slot-scope="scope">
          <span>{{scope.row.rule.name}}</span>
        </template>
      </el-table-column>
      <!--<el-table-column-->
        <!--prop="eventType"-->
        <!--label="事件类型（默认为其它）"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--width="250">-->
        <!---->
      <!--</el-table-column>-->
      <el-table-column
        label="事件等级"
        header-align="center"
        align="center"
        width="200">
        <template slot-scope="scope">
          <span>{{scope.row.rule.severity}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="源IP地址"
        header-align="center"
        align="center"
        width="220">
        <template slot-scope="scope">
          <span>{{scope.row.rule.srcIp}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="目标IP地址"
        header-align="center"
        align="center"
        width="220">
        <template slot-scope="scope">
          <span>{{scope.row.rule.dstIp}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        header-align="center"
        align="center"
        width="210">
        <template slot-scope="scope">
          <span>{{scope.row.rule.title}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        sortable
        header-align="center"
        align="center"
        width="230">
        <template slot-scope="scope">
          <span>{{scope.row.rule.histogramOption}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import { fetchList } from '@/api/article'
    export default {
      data() {
        return {
          eventListData: null,
          // listLoading: true,
          listQuery: {
            page: 1,
            limit: 10
          }
        }
      },
      created() {
        this.getList()
      },
      methods: {
        getList() {
          // this.listLoading = true
          fetchList(this.listQuery).then(response => {
            // console.log('eventListData', response.data.data.data)
            const items = response.data.data.data
            this.eventListData = items.map(v => {
              this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
              v.originalTitle = v.title //  will be used when user click the cancel botton
              // console.log('******', v)
              return v
            })
            // this.listLoading = false
          })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .event-list-table
    height: 320px
    min-width: 1350px
    padding: 30px 19px
</style>
