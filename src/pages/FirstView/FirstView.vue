<template>
 <div >
   <Header/>
   <Nav/>
   <div class="swiper-container">
    <div class="swiper-wrapper"> 
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/fc856826e44314ee861b75db0a9c0f76.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/654230bbfdc0987d42be8f8028e95e26.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/4a08abbe66fbb2969512269ebfdde19f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/868a9ff522a3faa21195bc3515f62192.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/760406902a34b942a444965e91ff9b2b.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/654230bbfdc0987d42be8f8028e95e26.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/e33ac2133ffaff3845b32bd180a14734.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="serveContent">
      <ul class="serveList">
        <li class="serveItem">
          <a href="javascript:;">
            <i class="iconfont"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li class="serveItem">
          <a href="javascript:;">
            <i class="iconfont"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li class="serveItem">
          <a href="javascript:;">
            <i class="iconfont"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  import Nav from '../../components/Nav/Nav'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    components: {
      Header,
      Nav
    },
     mounted() {
      this.mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
      
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiperContainer
    width 100%
    height 370px
    position relative
    .swiperContent
      position absolute
      right 0
      top 0
      overflow hidden
      width 6000px
      height 370px   
      .swiperItem
        float left
        width 750px
        height 370px
</style>
