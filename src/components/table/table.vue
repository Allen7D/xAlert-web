<template>
  <div class="table">
    <div class="degree">
      <p>严重程度</p>
      <el-radio-group v-model="listQuery.severity" @change="handleBlur">
        <el-radio-button label="3">高</el-radio-button>
        <el-radio-button label="2">中</el-radio-button>
        <el-radio-button label="1">低</el-radio-button>
      </el-radio-group>
    </div>
    <div class="time">
      <div class="item">
        <time-picker prefix="开始时间：" :time.sync="listQuery.startTime"></time-picker>
      </div>
      <div class="item">
        <time-picker prefix="结束时间：" :time.sync="listQuery.endTime"></time-picker>
      </div>
    </div>
    <div class="search">
      <el-button type="primary" @click="search">查询</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {fetchList} from '@/api/log'
  import TimePicker from 'components/time-picker/timePicker'
  export default {
    components: {
      TimePicker
    },
    data() {
      return {
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          severity: 2,
          startTime: new Date(),
          endTime: new Date()
        }
      }
    },
    methods: {
      handleBlur(val) {
        console.log(val)
      },
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(res => {
          this.list = res.data.items
          this.total = res.data.total
          this.listLoading = false
        })
      },
      search() {
        console.log(this.listQuery)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .time
    .item
      margin: 15px 0

</style>