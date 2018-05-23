<template>
  <div class="ringWrapper">
    <el-row>
      <el-col :span="6" :offset="3">
        <el-progress type="circle" :percentage="40" stroke-width="14" show-text="true" color="#67c23a" width="120">内存利用率</el-progress>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-progress type="circle" :percentage="60" stroke-width="14" show-text="true" color="#e6a23c" width="120">CPU利用率</el-progress>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-progress type="circle" :percentage="80" stroke-width="14" show-text="true" color="#f56c6c" width="120">磁盘利用率</el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ringWrapper {
    margin 80px auto
  }
</style>
