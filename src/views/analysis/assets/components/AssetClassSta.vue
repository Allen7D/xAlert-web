<template>
  <div class="business-wrapper">
    <div class="title">
      <span class="business-title">资产分类统计</span>
      <span class="sub-title">总数</span><span class="total">{{getDataTotal}}</span>
    </div>
    <div class="content">
      <el-card class="box-card">
        <div class="text item">
          <ul>
            <li v-for="item in list" :key="item" style="">
              <el-row>
                <el-col :span="21"><span class="item-label">{{item.name}}</span></el-col>
                <el-col :span="3"><span class="item-data">{{item.data}}</span></el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{name: '主机', data: 10}, {name: '安全设备', data: 10}, {name: '路由器', data: 10}, {name: '交换机', data: 10}, {name: '操作系统', data: 10}, {name: '数据库', data: 10}, {name: '虚拟设备', data: 10}, {name: '网络控制设备', data: 10}, {name: 'IOT设备', data: 10}, {name: '其他', data: 110}]
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
    margin 10px 10px 0 35px
  }
  .item-label {
     color: #6e6e6e;
     font-size 14px
  }
  .total {
    color: #00a0e9
    font-size 20px;
    font-weight bold
    display inline-block
    margin 10px 30px 0 15px
    float right
  }
  .item-data {
    color: #00a0e9
    font-weight normal
    font-size 20px;
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
