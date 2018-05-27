<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span style="font-weight: bolder">基本信息</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <el-row class="container">
          <el-col :span="10" :offset="2">
            <div class="item"><span>资产名称: </span><span>2018-5-15</span></div>
            <div class="item"><span>事件: </span><span>88</span></div>
            <div class="item"><span>漏洞: </span><span>88</span></div>
            <div class="item"><span>流量: </span><span>88GB （发送量：88GB，接收量：88GB）</span></div>
            <div class="item"><span>最近发现: </span><span>2018-5-15</span></div>
            <div class="item"><span>首次发现: </span><span>2018-5-15</span></div>
            <div class="item"><span>IP地址: </span><span>192.168.1.1（192.168.1.0/24）</span></div>
            <div class="item"><span>MAC地址: </span><span>98-E0-D9-82-41-C5</span></div>
            <div class="item"><span>其他说明: </span><span>xxxxxxxxxxxxxxx</span></div>
            <div class="item"><span>应用程序: </span><span>offic 2013：V1.1.1;xxxxx：1.0.3</span></div>
          </el-col>
          <el-col :span="6">
            <div class="item"><span>资产等级: </span><span>很高</span></div>
            <div class="item"><span>资产状态: </span><span>已确认</span></div>
            <div class="item"><span>资产类型: </span><span>控制系统</span></div>
            <div class="item"><span>所属位置: </span><span>公司机房</span></div>
            <div class="item"><span>所属网络: </span><span>业务网络1</span></div>
            <div class="item"><span>所属部门: </span><span>设备维护部</span></div>
          </el-col>
          <el-col :span="6">
            <div class="item"><span>厂家: </span><span>GE</span></div>
            <div class="item"><span>资产型号: </span><span>CPM 790</span></div>
            <div class="item"><span>型号版本: </span><span>v1.11.1</span></div>
            <div class="item"><span>操作系统: </span><span>windows 10</span></div>
            <div class="item"><span>系统版本: </span><span>7.3.36</span></div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
      <div class="tabs" v-for="(item, index) in links" :key="index">
        <el-col :span="6"><router-link :to="item.path">
          <div class="tab" @click='tabToggle(index)' :style="{backgroundColor: item.select ? '#00A0E9':'#E6E6E6'}">{{item.name}}</div>
        </router-link></el-col>
      </div>
      </el-row>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footer class="footer">
      <p>Copyright © LANXUM ALL Right Reserved. 北京立思辰科技股份有限公司 京ICP备13008717号-1</p>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        panel: ['事件', '漏洞', '流量', '会话'],
        tabs: [true, false, false, false],
        links: []
      }
    },
    mounted() {
      this.getTabs()
    },
    methods: {
      getTabs() {
        this.$router.options.routes[10].children[0].children.forEach((item, index) => {
          this.links.push({
            path: '/asset-dynamic/asset-detail/' + item.path,
            name: this.panel[index],
            select: this.tabs[index]
          })
        })
      },
      tabToggle(index) {
        for (let i = 0; i < 4; i++) {
          this.links[i].select = false
        }
        this.links[index].select = true
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box
    margin auto
    width 1000px
    padding-top 25px
    .cards
      width 100%
      height 400px
      border-radius 5px
      border 2px #E6E6E6 solid
      .header
        height 50px
        border-radius 5px
        line-height 50px
        background-color #E6E6E6
        padding-left 26px
        color #333333
      .container
        color #333333
        height 25px
        font-size 15px
        .item
          margin-top 15px
    .tabs
      margin-top 20px
      width 380px
      .tab
        text-align center
        display inline-block
        width 88px
        height 25px
        line-height 25px
        color black
        background-color #E6E6E6
        border-top-left-radius 3px
        border-top-right-radius 3px
  .footer
    margin-top 100px
    color black
    height 50px
    text-align center
</style>
