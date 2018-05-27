<template>
  <div style="padding-top: 20px">
    <table>
      <tr class="col">
        <td></td>
        <th class="head">应用协议</th>
        <th class="head">流量</th>
      </tr>
      <tr class="col">
        <th>总流量</th>
        <td>10GB</td>
        <td>10GB</td>
      </tr>
      <tr class="col">
        <th>最大速度</th>
        <td>128Kbps</td>
        <td>128Kbps</td>
      </tr>
      <tr class="col">
        <th>最小速度</th>
        <td>128Kbps</td>
        <td>128Kbps</td>
      </tr>
      <tr class="col">
        <th>平均流量</th>
        <td>128Kbps</td>
        <td>128Kbps</td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
      props: {
        dataList: Array
      },
        data() {
          return {}
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .col
    border-bottom 1px black solid
    height 50px
    line-height 50px
    text-align center
    .head
      width 120px
</style>
