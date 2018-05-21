<template>
  <div class="pagination">
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page=currentPage
    :page-sizes="[10,20,30,50]"
    :page-size=pageSize layout="total, sizes, prev, pager, next, jumper" :total=total>
  </el-pagination>
  </div>
</template>

<script>
    export default {
      props: {
        size: {
          type: Number,
          default: 10
        },
        current: {
          type: Number,
          default: 1
        },
        total: {
          type: Number,
          default: 100
        }
      },
      data() {
        return {
          currentPage: this.current,
          pageSize: this.size
        }
      },
      watch: {
        currentPage(curval) {
          this.$emit('update:current', curval)
        },
        pageSize(curval) {
          this.$emit('update:size', curval)
        }
      },
      methods: {
        handleSizeChange(val) {
          this.pageSize = val
        },
        handleCurrentChange(val) {
          this.currentPage = val
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pagination
    margin: auto
    width: 700px
    height: 40px
</style>
