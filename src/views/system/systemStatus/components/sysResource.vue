<template>
  <div class="ringWrapper">
    <el-row>
      <el-col :span="6" :offset="2" style="margin-right: 15px;">
        <el-progress class="one" type="circle" :percentage="40" stroke-width="14" show-text="true" width="160"></el-progress>
        <p style="color: #000; margin: 10px 40px;">内存利用率</p>
      </el-col>
      <el-col :span="6" :offset="1" style="margin-right: 20px;">
        <el-progress class="two" type="circle" :percentage="60" stroke-width="14" show-text="true" width="160"></el-progress>
        <p style="color: #000; margin: 10px 40px;">CPU利用率</p>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-progress class="three" type="circle" :percentage="80" stroke-width="14" show-text="true" width="160"></el-progress>
        <p style="color: #000; margin: 10px 40px;">磁盘利用率</p>
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
    margin 50px auto
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .one svg > path.el-progress-circle__path{
    stroke: #67C23A !important;
  }
  .two svg > path.el-progress-circle__path{
    stroke: #E6A23C !important;
  }
  .three svg > path.el-progress-circle__path{
    stroke: #409EFF !important;
  }
</style>
