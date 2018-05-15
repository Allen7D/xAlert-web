<template>
  <div class="clock">
    <span>当前时间:</span>
    <strong class="time">{{date}} {{time}}</strong>
  </div>
</template>

<script type="text/ecmascript-6">
  // refrence > http://www.jq22.com/code1142
  // https://www.cnblogs.com/yesyes/p/6741579.html
  function zeroPadding(num, digit) {
    var zero = ''
    for (var i = 0; i < digit; i++) {
      zero += '0'
    }
    return (zero + num).slice(-digit)
  }
  export default {
    data() {
      return {
        time: '',
        date: ''
      }
    },
    created() {
      this.updateTime()
    },
    methods: {
      updateTime() {
        var self = this
        setInterval(function () {
          var ctime = new Date()
          self.date = zeroPadding(ctime.getFullYear(), 4) + '年' + zeroPadding(ctime.getMonth() + 1, 2) + '月' + zeroPadding(ctime.getDate(), 2) + '日'
          self.time = zeroPadding(ctime.getHours(), 2) + ':' + zeroPadding(ctime.getMinutes(), 2) + ':' + zeroPadding(ctime.getSeconds(), 2)
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .clock
    color: #4676FF
    font-size: 20px
    .time
      font-size: 30px
</style>
