<template>
  <div class="table-page">
    <div class="table">
      <el-table :data="dataList" style="width:100%" height="320px">
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
          label="漏洞名称"
          prop="vulName"
          header-align="center"
          align="center"
          width="90">
        </el-table-column>
        <el-table-column
          label="等级"
          prop="grade"
          header-align="center"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          label="类型"
          prop="type"
          header-align="center"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          label="所属资产"
          prop="ownAsset"
          header-align="center"
          align="center"
          width="90">
        </el-table-column>
        <el-table-column
          label="地址"
          prop="address"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="所属业务"
          prop="ownBus"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="应用"
          prop="application"
          header-align="center"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          label="修复方案"
          prop="repairPlan"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          label="修复结果"
          prop="repairRes"
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
