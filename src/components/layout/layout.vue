<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="main">
      <div class="main-warpper">
        <screenfull class="screenfull"></screenfull>
        <narbar></narbar>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <x-footer></x-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Screenfull from 'components/screenfull/screenfull'
  import Sidebar from 'components/nav-menu/nav-menu'
  import XFooter from 'components/footer/footer'
  import IMonitor from 'components/integrate-monitor/integrate-monitor'
  import CMonitor from 'components/custom-monitor/custom-monitor'
  import Analysis from 'components/analysis/analysis'
  import SystemStatus from 'components/system-status/system-status'
  import Log from 'components/log/log'
  import Admin from 'components/admin/admin'

  export default {
    components: {
      Screenfull,
      Sidebar,
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
  #app
    display: flex
    height: 100%
    .screenfull
      height: 20px
    .main
      flex: 1
      height: 100%
    .main-warpper
      height: 100%

</style>
