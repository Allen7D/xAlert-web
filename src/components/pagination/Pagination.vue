<template>
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page=currentPage
    :page-sizes="[10,20,30,50]"
    :page-size=pageSize layout="total, sizes, prev, pager, next, jumper" :total=total>
  </el-pagination>
</template>

<script>
    export default {
      props: {
        size: Number,
        current: Number,
        total: Number
      },
      data() {
        return {
          currentPage: this.current,
          pageSize: this.size
        }
      },
      created() {
      },
      methods: {
        handleSizeChange(val) {
          this.pageSize = val
          this.$emit('handleTable', this.currentPage, this.pageSize)
        },
        handleCurrentChange(val) {
          this.currentPage = val
          this.$emit('handleTable', this.currentPage, this.pageSize)
        }
      }
    }
</script>

<style scoped>

</style>
