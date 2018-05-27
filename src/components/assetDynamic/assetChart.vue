<template>
  <div :style="itemHeight">
    <div class="title">{{title}}</div>
    <div class="item" :id="id" :style="[chartHeight, chartWidth, chartPosition]"></div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  // import {fetchList} from '../../../api/article'
  export default {
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 300
      },
      width: {
        type: String,
        default: '100%'
      },
      float: {
        type: String,
        default: 'none'
      }
    },
    data() {
      return {
        checkList: ['业务网络'],
        dialogVisible: false,
        setData: [],
        asset: {
          name: '',
          grade: '',
          type: '',
          firm: '',
          net: '',
          deparment: '',
          location: '',
          status: '',
          illustrate: '',
          model: '',
          system: '',
          application: '',
          version: ''
        }
      }
    },
    created() {
      this.getsetData()
    },
    methods: {
      dialogClose() {
        this.dialogVisible = false
      },
      dialogComfirm() {
        this.dialogVisible = false
      },
      clickKeep() {
        this.$confirm('保存配置?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      clickReset() {
        this.$confirm('重置配置?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      getsetData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.assets) {
              const data = res.setting
              this.setData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       time: item.time,
        //       eventname: item.eventname,
        //       eventtype: item.eventtype,
        //       eventgrade: item.eventgrade,
        //       source: item.source,
        //       target: item.target,
        //       status: item.status
        //     })
        //   })
        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .title
    height 25px
    line-height 25px
    color black
    font-weight bolder
  .item
    /*height: 330px*/
    margin-top 5px
    margin-right 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
</style>
