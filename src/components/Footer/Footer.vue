<template>
 <div class="footer">
   <a href="javascript:;" class="guide_item active" @click="goTo('/FirstView')">
       <i class="iconfont icon-shouye"></i>
       <span>首页</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goTo('/Classify')">
       <i class="iconfont icon-fenlei"></i>
       <span>分类</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goTo('/Category')">
       <i class="iconfont icon-tupian"></i>
       <span>实物</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goTo('/ShopCar')">
       <i class="iconfont icon-gouwuche1"></i>
       <span>购物车</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goTo('/Personal')">
       <i class="iconfont icon-wode1"></i>
       <span>个人</span>
   </a>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .footer
    width 100%
    height 98px
    background-color pink
    display flex
    position fixed
    justify-content space-around  
    bottom 0
    right 0
    align-items center
    z-index 3
    .guide_item
      display flex
      flex-direction column
      flex 1
      text-align center
      align-items center
      margin 5px
      &.active
        color red
      .iconfont
        font-size 39.98px 
      span 
        font-size 24px
        margin-top 3px  
        // width 48px
        // height 24px  
    
</style>
