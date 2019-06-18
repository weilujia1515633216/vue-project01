<template>
  <div class="NavContainer">
    <div class="NavContent">
      <ul class="NavList">
        <li class="NavItem current"><span class="tex">推荐</span></li>
        <li class="NavItem">居家生活</li>
        <li class="NavItem">服饰腰包</li>
        <li class="NavItem">美食酒水</li>
        <li class="NavItem">个护清洁</li>
        <li class="NavItem">母婴亲子</li>
        <li class="NavItem">运动旅行</li>
        <li class="NavItem">数码家电</li>
        <li class="NavItem">全球特色</li>
      </ul>
    </div>
    <div class="selectCase"><i class="iconfont icon-xiangxiajiantou"></i></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      const NavScroll = new BScroll('.NavList', {
        click: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .NavContainer
    width 100%
    height 60px
    position relative
    .NavContent
      width 650px
      height 60px
      position absolute
      // background-color pink
      overflow hidden
      .NavList
        width 1500px
        height 60px
        .NavItem
          float left
          font-size 28px
          padding 0 20px
          color #333
          height 60px
          line-height 60px
          letter-spacing 2px
          &.current
            color red
            margin-left 22px
            border-bottom 5px solid red
    .selectCase
      width 100px
      height 60px
      float right
      background-color pink
      .iconfont
        display block
        width 30px
        height 30px

</style>
