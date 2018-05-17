<template>
  <div class="business-wrapper">
    <div class="title">
      <span class="business-title">{{title}}</span>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in list" :key="item" class="text">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        title: {
          type: String,
          default: '未名'
        }
      },
       data() {
         return {
           list: ['所有业务', '业务网络1', '业务网络2', '业务网络3', '业务网络4', '业务网络5', '业务网络6', '业务网络7']
         }
       }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .business-title {
    color: #000
    display: block
    font-size: 20px
    font-weight: bold
    margin 70px 0 0 15px
  }
  .content {
    height 200px
    width 150px
    overflow auto
    margin 15px
    background-color #fff
    box-shadow:0px 0px  5px 5px #e2e2e2;
    border-radius 3px
    color #6d6d6d
    padding-top 15px
  }
  .text {
    padding: 10px 15px;
  }
  .text:hover{
    cursor: pointer
    background-color: #00a0e9
    color #fff
  }
</style>
