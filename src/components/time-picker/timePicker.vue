<template>
  <div class="time-picker">
      <p>{{prefix}}</p>
      <el-date-picker v-model="varTime" type="date" :style="{width: '200px'}"
                      format="yyyy 年 MM 月 dd 日" placeholder="年/月/日"
      >
      </el-date-picker>
      <el-time-picker v-model="varTime" @blur="handleBlur" :style="{width: '140px'}"
                      :picker-options="{format: 'HH:mm'}" format="HH 时 mm 分" placeholder="时/分"
      >
      </el-time-picker>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      prefix: {
        type: String
      },
      time: {
        type: Object,
        default: new Date()
      }
    },
    data() {
      return {
        varTime: this.time
      }
    },
    watch: {
      varTime(curVal, oldVal) {
        this.$emit('update:time', curVal)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>