<template>
  <div class="app">
    <sidebar></sidebar>
    <div class="main">
      <navbar></navbar>
      <div class="main-warpper">
        <section class="app-main" style="min-height: 100%">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </section>
      </div>
      <!--<x-footer></x-footer>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Navbar, Sidebar} from './components'

  import Screenfull from 'components/screenfull/screenfull'
  import XFooter from 'components/footer/footer'
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
      width: 100%
      height: 100%
    .main-warpper
      position: relative
      height: 100%
      margin: 70px 83px 0
</style>
