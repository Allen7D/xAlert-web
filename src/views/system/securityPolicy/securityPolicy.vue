<template>
  <div class="container">
    <div class="visit-wrapper">
      <system-wrapper title="访问策略" wrapperHeight="350px" tableHeight="300px">
        <visitList :tableData="visitData"></visitList>
      </system-wrapper>
    </div>
    <ployConfig></ployConfig>
  </div>
</template>

<script type="text/ecmascript-6">
  import systemWrapper from 'components/table/systemWrapper'
  import visitList from './components/visitList'
  import ployConfig from './components/ployConfig'
  import axios from 'axios'
  export default {
    components: {
      systemWrapper,
      visitList,
      ployConfig
    },
    data() {
      return {
        visitData: []
      }
    },
    methods: {
      getVisitData() {
        axios.get('/api/system/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.securityPolicy
              this.visitData = data.visitList
            }
          })
      }
    },
    created() {
      this.getVisitData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container {
    background-color #fff
    height 1300px
    padding-top 50px
  }
  .visit-wrapper {
    width 1000px
    margin 0 auto
  }
</style>
