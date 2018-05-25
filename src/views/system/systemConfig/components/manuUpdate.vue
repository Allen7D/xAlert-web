<template>
    <div class="manuUpdate">
      <div class="file-upload">
        <form name="form" method="post" action="javascript:;">
          <input type="file" name="filepath" id="filepath" style="display: none;"
                 onchange="document.form.path.value=this.value" multiple="multiple"/>
          <input type="button" value="选择升级文件" onclick="document.form.filepath.click()" class="fileUploadBtn">
        </form>
      </div>
      <div class="tips">包括漏洞库、规则库、系统升级等文件</div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .manuUpdate {
    margin 32px auto
    height 116px
    width 564px
    border 1px dashed #aaa
    color #000
    font-size 15px
  }
  .file-upload
  .tips {
    margin-top 30px
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .fileUploadBtn {
    background-color #4676ff
    color #fff
    border 1px solid #4676ff
    border-radius 5px
    width 120px
    height 20px
    line-height:20px
    font-size 13px
  }
</style>
