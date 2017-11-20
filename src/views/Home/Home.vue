<template>
  <div class="home-wrapper">
    <scroll ref="scroll" :data="articleList" :listenScroll="listenScroll">
      <div class="content">
          <div class="header">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg" alt="首页banner图片01">
                  </div>
                  <div class="swiper-slide">
                    <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg" alt="首页banner图片02">
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <div class="slogan">
                <img :src="homeSloganUrl" />
              </div>
              <ul class="categories">
                <li v-for="(item,index) in homeCategories" :key="index">
                  <img :src="item.icon" alt="">
                </li>
              </ul>
          </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '../../components/scroller'
import Swiper from 'swiper'
import { baseUrl } from '../../assets/js/constant.js'
import { API_HOME } from '../../assets/js/api.js'
export default {
  components: {
    Scroll
  },
  data() {
    return {
      baseUrl,
      listenScroll: true,
      data: null,
      articleList: null,
      picList: null,
      topSlideAd: null,
      homeSloganUrl: '',
      homeCategories: null,
      swiper: null,
      options: {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  },
  mounted() {
    this.$ajax
      .get(this.baseUrl + API_HOME.getHomeAdvertisements + '?h5=true')
      .then(
        res => {
          console.log(res)
          this.data = res.data
          this.articleList = this.data.articleList
          this.picList = this.data.picList
          this.topSlideAd = this.data.topSlideAd
          this.homeSloganUrl = this.data.homeSloganUrl
          this.homeCategories = this.data.homeCategories
          console.log(this.articleList)
        },
        () => {
          console.log('request failed')
        }
      )
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods: {
    scroll() {
      console.log('scroll')
    },
    initSwiper() {
      this.swiper = new Swiper('.swiper', this.options)
      console.log(this.swiper)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/common.scss';
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.content {
  .header {
    .slogan {
      padding: 0.5rem 2rem;
    }
    .categories {
      display: flex;
      padding: 0 0.5rem 0.5rem;
      li {
        flex: 1;
        padding: 0.5rem;
        align-self: center;
      }
    }
  }
}
</style>
