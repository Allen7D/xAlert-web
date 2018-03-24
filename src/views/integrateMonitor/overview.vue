<template>
  <div class="container">
    <div class="data-index">
      <div class="item">安全事件</div>
      <div class="item">漏洞数量</div>
      <div class="item">网络资产</div>
      <div class="item">资产活动数量</div>
    </div>
    <div class="chart chart-up">
      <div class="item">安全趋势</div>
      <div class="item">资产分布</div>
    </div>
    <div class="chart chart-down">
      <div class="item">安全事件分布</div>
      <div class="item">漏洞分布</div>
      <div class="item">网络流量</div>
    </div>
    <div class="list">
      <div class="item net-event">网络事件</div>
      <div class="item asset">资产发现</div>
      <div class="item vulnerability">漏洞发现</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .data-index
  .chart
  .list
    display: flex
    .item
      flex: 1
      align-items: space-around
</style>
