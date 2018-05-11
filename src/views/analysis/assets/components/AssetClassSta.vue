<template>
  <div class="business-wrapper">
    <div class="title">
      <span class="business-title">资产分类统计</span>
      <span class="sub-title">总数</span><span class="total">200</span>
    </div>
    <div class="content">
      <el-card class="box-card">
        <div class="text item" v-for="item in list" :key="item">
          {{item}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: ['主机    10', '安全设备    10', '路由器    10', '交换机    10', '操作系统    10', '主机    10', '主机    10', '主机    10']
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .business-title {
    color: #000
    display: block
    font-size: 20px
    font-weight: bold
    margin 70px 0 0 15px
  }
  .sub-title {
    color: #6e6e6e;
    font-size 15px
    font-weight bold
    display inline-block
    margin 10px 10px 0 15px
  }
  .total {
    color: #00a0e9
    font-size 20px;
    font-weight bold
    display inline-block
    margin 10px 15px 0 15px
    float right
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .box-card {
    height: 200px;
    width: 150px;
    overflow: auto;
    margin: 15px;
  }
  .text {
    padding: 10px 0;
  }
</style>
