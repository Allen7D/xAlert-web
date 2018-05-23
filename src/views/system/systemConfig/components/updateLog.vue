<template>
  <div class="updateLog">
    <el-table
      :data="tableData"
      style="width: 100%" height="250">
      <el-table-column
        prop="number"
        label="序号"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="upVerson"
        label="升级后版本"
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="upDescip"
        header-align="center"
        align="center"
        label="升级描述">
      </el-table-column>
      <el-table-column
        prop="upTime"
        header-align="center"
        align="center"
        label="升级时间">
      </el-table-column>
    </el-table>
    <div class="confirmBtn">
      <button class="confirm">确定</button>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        tableData: Array
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .confirmBtn {
    height: 50px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .confirm {
    width 100px
    background-color #4676ff
    color #fff
    font-size 15px
    border none
    border-radius 5px
    letter-spacing 5px
  }
</style>
