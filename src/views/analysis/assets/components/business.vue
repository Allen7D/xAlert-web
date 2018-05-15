<template>
  <div class="business-wrapper">
    <div class="title">
      <span class="business-title">业务</span>
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
           list: ['所有业务', '业务网络1', '业务网络2', '业务网络3', '业务网络4', '业务网络5', '业务网络6', '业务网络7']
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
