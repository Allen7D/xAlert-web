<template>
  <div class="table-page">
    <div class="table">
      <el-table :data="dataList" border style="width: 100%" height="180">
        <el-table-column label="漏洞名称" prop="vulneName" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="漏洞等级" prop="vulneGrade" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="漏洞类型" prop="vulneType" width="120" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="资产数" prop="assetSum" width="110" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="发现时间" prop="findTime" width="160" header-align="center" align="center" sortable>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <!--分页-->
      <el-pagination background
                     layout="prev, pager, next"
                     :total="100">
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
    height: 60px;
    display: -webkit-flex;
    display:         flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
</style>
