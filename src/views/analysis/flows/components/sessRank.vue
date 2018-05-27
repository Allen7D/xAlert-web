<template>
  <div class="table-page">
    <div class="table">
      <el-table :data="dataList" style="width:100%" height="350px">
        <el-table-column
          label="源(名称)"
          prop="srcName"
          align="center"
          header-align="center">
        </el-table-column>
        <el-table-column
          label="源(地址)"
          prop="srcAdd"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="目的地(名称)"
          prop="desName"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="目的地(地址)"
          prop="desAdd"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="应用协议"
          prop="appPro"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="流量"
          prop="flows"
          header-align="center"
          align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="120">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        dataList: {
          type: Array
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .page {
    height: 60px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
</style>
