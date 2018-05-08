<template>
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppMain'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>