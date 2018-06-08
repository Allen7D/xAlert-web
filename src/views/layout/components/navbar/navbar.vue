<template>
  <el-menu class="navbar" mode="horizontal">

    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="service" v-show="isCustom">
      <el-select v-model="currentAgent.name" placeholder="业务切换" @change="handleChange">
        <el-option v-for="item in agents" :key="item.probe" :label="item.name" :value="item"></el-option>
      </el-select>
    </div>

    <div class="right-menu">
      <el-tooltip effect="dark" :content="$t('localtime')" placement="bottom">
        <clock class="clock right-menu-item"></clock>
      </el-tooltip>

      <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>

      <lang-select class="international right-menu-item"></lang-select>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="log">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('系统设置')}}
            </el-dropdown-item>
          </router-link>
          <!--<a target='_blank' href="https://github.com/bodanli159951/xAlert-web">-->
            <!--<el-dropdown-item>-->
              <!--{{$t('navbar.github')}}-->
            <!--</el-dropdown-item>-->
          <!--</a>-->
          <el-dropdown-item divided>
            <span @click="isShow = true" style="display:block"><i class="icon-signOut"></i>  {{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <logout :isShow.sync="isShow"></logout>
  </el-menu>
</template>

<script type="text/ecmascript-6">
  import Breadcrumb from 'components/breadcrumb/breadcrumb'
  import Screenfull from 'components/screenfull/screenfull'
  import LangSelect from 'components/langSelect'
  import Clock from 'components/clock/clock'
  import logout from 'components/logout/logout'
  import log from './log.jpg'
  import {mapState} from 'vuex'

  export default {
    components: {
      Breadcrumb,
      Screenfull,
      LangSelect,
      Clock,
      logout
    },
    data() {
      return {
        name: '',
        avata: '',
        log,
        isShow: false
      }
    },
    computed: {
      ...mapState({
        agents: (state) => state.app.agents,
        currentAgent: (state) => state.app.currentAgent
      }),
      isCustom() {
        return this.$route.name === 'customMonitor'
      }
    },
    methods: {
      handleChange(item) {
        if (item.probe !== this.currentAgent.probe) {
          this.$store.commit('setCurrentAgent', item)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navbar
    height: 50px
    line-height: 50px
    border-radius: 0px !important
    background: 0
    border: 0
    .service
      float: left
      margin-left: 15px
    .breadcrumb-container
      float: left
      font-size: 20px
    .errLog-container
      display: inline-block
      vertical-align: top
    .right-menu
      float: right
      height: 100%
      &:focus
        outline: none
      .right-menu-item
        display: inline-block
        margin: 0 8px
      .screenfull
        height: 20px
      .international
        vertical-align: top
      .theme-switch
        vertical-align: 15px
      .avatar-container
        height: 50px
        margin-right: 30px
        .avatar-wrapper
          cursor: pointer
          margin-top: 5px
          position: relative
          .user-avatar
            width: 40px
            height: 40px
            border-radius: 10px
          .el-icon-caret-bottom
            position: absolute
            right: -20px
            top: 25px
            font-size: 12px
</style>
