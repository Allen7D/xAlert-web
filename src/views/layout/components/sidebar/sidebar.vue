<template>
  <nav class="sidebar-wrapper">

    <el-menu mode="vertical" unique-opened :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse">
      <div class="top" v-show="!isCollapse">
        <img class="logo" :src="logo_w_s" alt="北京立思辰">
        <div class="title">
          <i class="icon icon-menu"></i>
          <span>网络安全监控平台</span>
        </div>
      </div>

      <template v-for="item in routes" v-if="!item.hidden&&item.children">

        <router-link v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
          <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':isCollapse}">
            <i v-if="item.children[0].meta&&item.children[0].meta.icon" class="icon" :class="item.children[0].meta.icon"></i>
            <span v-if="item.children[0].meta&&item.children[0].meta.title" class="h1">{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name||item.path" :key="item.name" :show-timeout='0' :hide-timeout='0'>
          <template slot="title">
            <i v-if="item.meta&&item.meta.icon" class="icon" :class="item.meta.icon"></i>
            <span v-if="item.meta&&item.meta.title" class="h1">{{item.meta.title}}</span>
          </template>

          <el-menu-item-group>
            <template v-for="child in item.children" v-if="!child.hidden">
              <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
              <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                <el-menu-item :index="item.path+'/'+child.path">
                  <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>

    </el-menu>
    <button :class="isCollapse ? 'button-r' : 'button-l'" @click="toggleClick">
      <i :class="isCollapse ? 'icon-dbArrowR' : 'icon-dbArrowL'"></i>
    </button>
  </nav>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import logo_w_s from './logo_w_s.jpg'
  export default {
    name: 'SidebarItem',
    data() {
      return {
        logo_w_s
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      routes() {
        return this.$router.options.routes
      },
      isCollapse() {
        return this.sidebar.opened
      }
    },
    methods: {
      toggleClick() {
        this.$store.dispatch('toggleSideBar')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .sidebar-wrapper
    position: fixed
    height: 100%
    top: 0
    bottom: 0
    left: 0
    z-index: 1001
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
      border: none
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
    .button-r
    .button-l
      position: absolute
      right: 0
      top: 50%
      z-index: 1002
      width: 30px
      height: 66px
      padding-left: 0
      font-size: 30px
      background: #4676FF
      border: solid 0 #4676FF
    .button-l
      right: -30px
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup
    min-width: 55px
    width: 120px
    text-align center
  .el-menu-item-group__title
    padding: 0
  .el-tooltip__popper.is-dark
    display: none
  .submenu-title-noDropdown
    padding-left: 10px!important
    position: relative
    span
      height: 0
      width: 0
      overflow: hidden
      visibility: hidden
      transition: opacity .3s cubic-bezier(.55, 0, .1, 1)
      opacity: 0
      display: inline-block
    &:hover
      span
        display: block
        border-radius: 2px
        z-index: 1048
        width: 120px
        height: 56px
        visibility: visible
        position: absolute
        right: -123px
        text-align: center
        top: 0px
        background-color: white!important
        opacity: 1
      .h1
        color: #303133
        font-size: 14px
</style>
