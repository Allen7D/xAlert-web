<template>
  <nav class="sidebar-warpper">
    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <div class="top" v-show="!isCollapse">
        <img class="logo" src="./logo_w_s.jpg" alt="北京立思辰">
        <div class="title">
          <i class="icon icon-menu"></i>
          <span>网络安全监控平台</span>
        </div>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="icon icon-home"></i>
          <span slot="title" class="h1">综合监控</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">安全总览</el-menu-item>
          <el-menu-item index="1-2">网络资产</el-menu-item>
          <el-menu-item index="1-3">事件监测</el-menu-item>
          <el-menu-item index="1-4">流量监测</el-menu-item>
          <el-menu-item index="1-5">漏洞监测</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="icon icon-pc"></i>
        <span slot="title">业务监控</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="icon icon-analysis"></i>
          <span slot="title" class="h1">管理分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">资产</el-menu-item>
          <el-menu-item index="3-2">事件</el-menu-item>
          <el-menu-item index="3-3">流量</el-menu-item>
          <el-menu-item index="3-4">漏洞</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="icon icon-webloudongjiance"></i>
        <span slot="title">系统状态</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="icon icon-securityIncident"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="icon icon-setting"></i>
        <span slot="title">系统配置</span>
      </el-menu-item>
    </el-menu>
    <button class="button" @click="isCollapse = !isCollapse">
      <i :class="iconDbArrow"></i>
    </button>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isCollapse: true,
        iconDbArrow: 'icon-dbArrowL'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .sidebar-warpper
    position: relative
    background: rgba(6, 6, 123, 1)
    border-right: solid 1px #4676ff
    .top
      .logo
        margin: 24px auto 36px 25px
        width: 130px
        height: 55px
      .title
        margin-left: 6px
        margin-bottom: 22px
        color: #4676FF
        font-size: $font-size-large-x
        .icon
          font-size: 26px
    .el-menu
      background: rgba(6, 6, 123, 0.5)
      color: #4676FF
      border: 0
      .icon
        color: #4676FF
        font-size: 26px
      .el-menu-item-group
        padding-left: 10px
        background: rgba(6, 6, 123, 1)
    .el-menu-vertical-demo:not(.el-menu--collapse)
      width: 234px
      min-height: 300px
    .h1
    .el-menu-item
      color: #4676FF
      font-size: $font-size-large
    .button
      position: absolute
      right: -30px
      top: 50%
      z-index: 999
      width: 30px
      height: 66px
      padding-left: 0
      font-size: 30px
      background: #4676FF
      border: solid 0 #4676FF
</style>
