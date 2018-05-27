<template>
  <div class="business-wrapper">
    <div class="title">
      <span class="business-title">发现漏洞数量统计</span>
      <el-row type="flex" justify="space-between">
        <el-col :span="12"><span class="sub-title">总数</span></el-col><el-col :span="12"><span class="total">{{getDataTotal}}</span></el-col>
      </el-row>
      <!--<span class="sub-title">总数</span><span class="total">{{getDataTotal}}</span>-->
    </div>
    <div class="content">
      <ul>
        <li v-for="item in list" :key="item" class="text">
          <el-row>
            <el-col :span="19"><span class="item-label">{{item.name}}</span></el-col>
            <el-col :span="5"><span class="item-data">{{item.data}}</span></el-col>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{name: '未修复', data: 10}, {name: '已修复', data: 10}]
      }
    },
    computed: {
      getDataTotal() {
        var total = 0
        this.list.forEach((item) => {
          total += parseInt(item.data)
        })
        return total
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
    margin 15px 10px 0 25px
  }
  .total {
    color: #00a0e9
    font-size 18px;
    font-weight bold
    display inline-block
    margin 15px 45px 0 15px
    float right
  }
  .content {
    width 150px
    overflow auto
    margin 15px
    background-color #fff
    box-shadow:0px 0px  5px 5px #e2e2e2;
    border-radius 3px
    padding-top 15px
  }
  .text {
    padding: 5px 10px;
  }
  .item-label {
    color: #8f8f8f;
    font-size 15px
    font-weight bold
  }
  .item-data {
    color: #00a0e9
    font-weight normal
    font-size 18px;
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .box-card {
    height: 200px;
    width: 156px;
    overflow: auto;
    margin: 15px;
  }
  .text {
    padding: 10px 0;
  }
</style>
