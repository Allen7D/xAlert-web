<template>
  <div class="net-event-table">
    <el-table
      :data="netEventData"  border style="width: 100%" height="250">
      <el-table-column
        label="事件等级"
        sortable
        header-align="center"
        align="center"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.rule.severity}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="事件名称"
        header-align="center"
        align="center"
        width="140">
        <template slot-scope="scope">
          <span>{{scope.row.rule.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="源IP"
        header-align="center"
        align="center"
        width="120">
        <template slot-scope="scope">
          <span>{{scope.row.rule.srcIp}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="目标IP"
        header-align="center"
        align="center"
        width="120">
        <template slot-scope="scope">
          <span>{{scope.row.rule.dstIp}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="业务网络"
        sortable
        header-align="center"
        align="center"
        width="110">
        <template slot-scope="scope">
          <span>{{scope.row.count}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { fetchList } from '@/api/article'
  export default {
    // props: {
    //   data: {
    //     type: Object,
    //     default: () => {
    //       return {
    //         severity: 'HIGH',
    //         name: '读取服务器数据',
    //         srcIp: '192.168.3.25',
    //         dstIp: '192.168.3.28',
    //         count: 0
    //       }
    //     }
    //   }
    // },
    data() {
      return {
        netEventData: null,
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
          // console.log('netEventData', response.data.data.data)
          const items = response.data.data.data
          this.netEventData = items.map(v => {
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
  .net-event-table
    height: 320px
    min-width: 592px
    padding: 30px 19px
</style>
