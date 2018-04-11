<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.title'>
        <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect"><i class="icon-location" v-show='item.redirect==="noredirect" || item.meta.breadNumber==1'></i>{{generateTitle(item.meta.title)}}</span>
        <router-link v-else :to="item.redirect||item.path">{{generateTitle(item.meta.title)}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script type="text/ecmascript-6">
  import { generateTitle } from '@/utils/i18n'
  export default {
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      generateTitle,
      getBreadcrumb() {
        var breadNumber = typeof (this.$route.meta.breadNumber) !== 'undefined' ? this.$route.meta.breadNumber : 1
        console.log(breadNumber)
        // The current page
        var newBread = {name: this.$route.name, path: this.$route.fullPath}
        console.log(newBread)

        let matched = this.$route.matched.filter(item => item.name)
        console.log(matched)
        console.log(matched[0].redirect)

        const first = matched[0]
        if (first && breadNumber !== 1 && first.name !== ('integrateMonitor' || 'businessMonitor' || 'analysis' || 'log')) {
          matched = [{path: first.path, meta: {title: first.meta.title}}].concat(matched)
        }
        this.levelList = matched
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
