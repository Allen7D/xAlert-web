<template>
  <div class="app" :class="{hideSiddbar:sidebar.opened}">
    <sidebar class="sidebar"></sidebar>
    <div class="main">
      <navbar></navbar>
      <section class="main-wrapper">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </section>
      <!--<x-footer></x-footer>-->
    </div>
    <div class="bg"></div>
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
    name: 'layout',
    components: {
      Sidebar,
      Navbar,
      Screenfull,
      XFooter,
      Analysis,
      SystemStatus,
      Log,
      Admin
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .app
    .main
      margin: 0 53px 0 264px
      padding-top: 20px
      .main-wrapper
        margin: 50px 0 0 53px
    .bg
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      position: fixed
      z-index: -1
      background-size: cover
      background-repeat: no-repeat
      background-image: url(./bg.jpg)
  .hideSiddbar
    .main
      margin-left: 97px
</style>
