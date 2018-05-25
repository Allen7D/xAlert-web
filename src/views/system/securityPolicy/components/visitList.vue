<template>
    <div class="visitList">
      <div class="visit-header">
        <el-row>
        <el-col :xs="15" :sm="3" :lg="3"><div class="insert btn"><i class="el-icon-circle-plus-outline"></i><span>新增</span></div></el-col>
        <el-col :xs="15" :sm="3" :lg="3"><div class="edit btn"><i class="el-icon-edit"></i><span>编辑</span></div></el-col>
        <el-col :xs="15" :sm="3" :lg="3"><div class="del btn"><i class="el-icon-delete"></i><span>删除</span></div></el-col>
        <el-col :xs="15" :sm="3" :lg="3"><div class="use btn"><i class="el-icon-circle-check-outline"></i><span>启用</span></div></el-col>
        <el-col :xs="15" :sm="3" :lg="3"><div class="disable btn"><i class="el-icon-circle-close-outline"></i><span>禁用</span></div></el-col>
      </el-row>
      </div>
      <el-table :data="tableData" style="width: 100%;" height="250px">
        <el-table-column type="selection" header-align="center" align="center" width="30"></el-table-column>
        <el-table-column prop="number" label="序号" header-align="center" align="center" width="55"></el-table-column>
        <el-table-column prop="name" label="名称" header-align="center" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" header-align="center" align="center"></el-table-column>
        <el-table-column prop="grade" label="等级" header-align="center" align="center" width="60"></el-table-column>
        <el-table-column prop="srcArea" label="源区域（业务）" header-align="center" align="center"></el-table-column>
        <el-table-column prop="srcAdd" label="源地址" header-align="center" align="center"></el-table-column>
        <el-table-column prop="srcPort" label="源端口" header-align="center" align="center" width="70"></el-table-column>
        <el-table-column prop="desArea" label="目标区域（业务）" header-align="center" align="center"></el-table-column>
        <el-table-column prop="desAdd" label="目标地址" header-align="center" align="center"></el-table-column>
        <el-table-column prop="desPort" label="目标端口" header-align="center" align="center" width="85"></el-table-column>
        <el-table-column prop="appPro" label="应用协议" header-align="center" align="center"></el-table-column>
      </el-table>
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
  .visitList {
    margin 10px 13px
    color #000
    font-size 15px
  }
  .visit-header {
    margin-bottom 10px
  }
  .btn {
    color #fff
    width 80px
    height 25px
    border-radius 6px
    background-color #4676ff
    line-height 25px
    text-align: center
    letter-spacing 3px
  }
  .del {
    background-color #f21
  }
  .use {
    background-color #67c23a
  }
  .disable {
    background-color #777
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .el-table tr:nth-child(odd) {
    background: #fff;
  }
  .el-table tr:nth-child(even) {
    background: #f2f2f2;
  }
  .el-table tr {
    color: #000
  }
</style>
