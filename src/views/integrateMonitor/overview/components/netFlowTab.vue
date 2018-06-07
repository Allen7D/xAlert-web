<template>
  <el-table :data="dataList" border style="width: 50%" height="240">
    <el-table-column label="类型" prop="style" header-align="center" align="center">
    </el-table-column>
    <el-table-column label="流量" :formatter="flowConvert2" sortable header-align="center" align="center">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: Array
    },
    methods: {
      flowConvert2(row) {
        let flow = row.flows
        if (!flow) {
          return '0 b'
        }
        let t = Math.pow(1024, 4)
        let g = Math.pow(1024, 3)
        let m = Math.pow(1024, 2)
        let k = Math.pow(1024, 1)
        let tn = 0
        let gn = 0
        let mn = 0
        let kn = 0
        let str = ''
        while (flow >= t) {
          flow = flow - t
          tn++
        }
        if (tn > 0) {
          str = str + tn + 'T '
        }
        while (flow >= g) {
          flow = flow - g
          gn++
        }
        if (gn > 0) {
          str = str + gn + 'G '
        }
        while (flow >= m) {
          flow = flow - m
          mn++
        }
        if (mn > 0) {
          str = str + mn + 'M '
        }
        while (flow >= k) {
          flow = flow - k
          kn++
        }
        if (kn > 0) {
          str = str + kn + 'K '
        }
        if (flow > 0) {
          str = str + flow + 'b '
        }
        return str
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
