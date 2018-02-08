<template>
  <div class="app">
    <sidebar></sidebar>
    <div class="main">
      <div class="main-warpper">
        <navbar></navbar>
        <div class="table">
          <div class="title">
            <i class="icon-log"></i>
            <span>安全事件</span>
          </div>
          <div class="table-wrapper">
            <div class="number">
              <span>数量:</span>
              <span></span>
            </div>
            <div class="compare">
              <span>比昨日:</span>
              <i class="icon-arrow-down"></i>
              <span>23%</span>
            </div>
          </div>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <x-footer class=""></x-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from './sidebar/sidebar'
  import Navbar from './navbar/navbar'
  import Screenfull from 'components/screenfull/screenfull'
  import XFooter from 'components/footer/footer'
  import IMonitor from 'components/integrate-monitor/integrate-monitor'
  import CMonitor from 'components/custom-monitor/custom-monitor'
  import Analysis from 'components/analysis/analysis'
  import SystemStatus from 'components/system-status/system-status'
  import Log from 'components/log/log'
  import Admin from 'components/admin/admin'

  export default {
    components: {
      Sidebar,
      Navbar,
      Screenfull,
      XFooter,
      IMonitor,
      CMonitor,
      Analysis,
      SystemStatus,
      Log,
      Admin
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .app
    display: flex
    width: 100%
    height: 100%
    .main
      flex: 1
      height: 100%
    .main-warpper
      position: relative
      height: 100%
      .title
        position:absolute
        top: 40px
        left: 27px
        width: 128px
        height: 25px
        beveled-corners($color-theme, 5px)
        color: $color-theme-r
        font-size: 16px
        text-align: center
      .table-wrapper
        width: 315px
        height: 100px
        color: red
        beveled-corners(white, 0, 15px)
</style>
