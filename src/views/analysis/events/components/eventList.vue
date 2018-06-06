<template>
  <div class="table-page">
    <div class="table">
      <el-table :data="dataList" border style="width: 100%" height="320">
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="45">
        </el-table-column>
        <el-table-column
          label="发现时间"
          sortable
          prop="findTime"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="事件名称"
          prop="eventName"
          header-align="center"
          align="center"
          width="110">
        </el-table-column>
        <el-table-column
          label="事件等级"
          prop="eventGrade"
          header-align="center"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          label="事件类型"
          prop="eventType"
          header-align="center"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          label="源地址"
          prop="srcAdd"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="目标地址"
          prop="desAdd"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="详情"
          prop="detail"
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

<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .page {
    height 60px
    display -webkit-flex
    display flex
    -webkit-align-items center
    align-items center
    -webkit-justify-content center
    justify-content center
  }
</style>
