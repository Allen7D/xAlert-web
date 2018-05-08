<template>
  <div class="event-list-table">
    <el-table
      :data="dataList" border style="width: 100%" height="250">
      <el-table-column prop="name" label="事件名称" header-align="center" align="center" width="210"></el-table-column>
      <el-table-column prop="type" label="事件类型（默认为其它）" header-align="center" align="center" width="250"></el-table-column>
      <el-table-column prop="level" label="事件等级" header-align="center" align="center" width="200"></el-table-column>
      <el-table-column prop="srcIP" label="源IP地址" header-align="center" align="center"></el-table-column>
      <el-table-column prop="dstIP" label="目标IP地址" header-align="center" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" header-align="center" align="center" width="210"></el-table-column>
      <el-table-column prop="time" label="时间" sortable header-align="center" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .event-list-table
    height: 320px
    padding: 30px 19px
</style>
