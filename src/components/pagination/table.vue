<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 1080px">
      <el-table-column prop="name" label="源（名称）" width="180"></el-table-column>
      <el-table-column prop="address" label="源（地址）" width="180"></el-table-column>
      <el-table-column prop="des" label="目的地（名称）" width="180"></el-table-column>
      <el-table-column prop="add" label="目的地（地址）" width="180"></el-table-column>
      <el-table-column prop="protocol" label="应用协议" width="180"></el-table-column>
      <el-table-column prop="flows" label="流量" width="180"></el-table-column>
    </el-table>
  <div>
  <pagination v-on:handleTable="changeData" :size="pageSize" :current="currentPage" :total="tableData.length"></pagination>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import pagination from './Pagination'
    export default {
      components: {
        pagination
      },
        data() {
          return {
            pageSize: 10,
            currentPage: 1,
            tableData: []
          }
        },
        methods: {
          getData() {
            axios.get('/api/pagination/data.json')
              .then(res => {
                this.tableData = res.data.tableData
              })
          },
          changeData(cur, size) {
            // console.log('size: ' + size + ' current: ' + cur)
            this.pageSize = size
            this.currentPage = cur
          }
        },
      created() {
          this.getData()
      }
    }
</script>

<style scoped>

</style>
