<template>
  <nav class="nav-warpper">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">综合监控</span>
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
        <i class="el-icon-menu"></i>
        <span slot="title">业务监控</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">管理分析</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">系统状态</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">系统配置</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isCollapse: true
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
  .el-menu-vertical-demo:not(.el-menu--collapse)
    width: 200px
    min-height: 300px
</style>
