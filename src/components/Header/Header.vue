<template>
  <Header class="header">
    <span class="wangyi">网易严选</span>
    <div class="inputBar">
      <i class="iconfont icon-sousuo1"></i>
      <span class="searchItem">搜素商品，共999999件好物</span>
    </div>
    <div class="login">登录</div>
  </Header>
</template>

<script type="text/ecmascript-6">
 export default {
   
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 87.98px
    // background-color red
    display flex
    align-items center
    .wangyi 
      font-size 30px
      margin 10px 15px 10px 20px 
      float left
      letter-spacing 3px
    .inputBar 
      width 442.03px
      height 56px
      background-color #eee
      margin-right  20px
      border-radius 10px
      .iconfont
        font-size 27.98px
        padding 0 3px 0 30px
      .searchItem
        width 317.31px
        height 41px
        font-size 26px
        line-height 51px
        letter-spacing 1px
        color #666
    .login 
      width 74px
      height 39.98px
      float right 
      color red
      border 1px solid red
      text-align center
      line-height 39.98px
      border-radius 5px

        

</style>
