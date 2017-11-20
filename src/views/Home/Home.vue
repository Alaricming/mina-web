<template>
  <div class="home-wrapper">
    <scroll ref="scroll" :data="articleList" :listenScroll="listenScroll">
      <div class="content">
        <div class="header">
          <!-- top swiper -->
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in topSlideAd">
                <a :href="baseUrl + item.link"><img class="imgload" :src="baseUrl + item.pic" alt=""></a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- slogan -->
          <div class="slogan">
            <img :src="homeSloganUrl" />
          </div>
          <!-- icon list -->
          <ul class="categories">
            <li v-for="(item,index) in homeCategories" :key="index">
              <img :src="item.icon" alt="">
            </li>
          </ul>
          <div class="ad">
            <div class="ad-lf">
              <img :src="baseUrl + data.top3LeftAd[0].pic" alt="">
            </div>
            <div class="ad-rt">
              <div class="ad-rt-above">
                <img :src="baseUrl + data.top3RightAboveAd[0].pic" alt="">
              </div>
              <div class="ad-rt-below">
                <img :src="baseUrl + data.top3RightBelowAd[0].pic" alt="">
              </div>
            </div>
          </div>
          <div class="article">
            <div class="swiper-wrapper">
              <div class="swiper-slide article-item" v-for="item in articleList">
                <!-- <a :href="baseUrl + item.link"><img class="imgload" :src="baseUrl + item.pic" alt=""></a> -->
                <a><img class="imgload" :src="baseUrl + item.pic" alt=""></a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
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
      topSwiper: null,
      articleSwiper: null,
      topOptions: {
        autoplay: true,
        grabCursor: true // 抓手形状
      },
      articleSwiperOptions: {
        // autoplay: true,
        grabCursor: true, // 抓手形状
        freeMode: true,
        centeredSlides: true
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
        },
        () => {
          console.log('request failed')
        }
      )
    setTimeout(() => {
      this.initSwiper()
    }, 200)
  },
  methods: {
    scroll() {
      console.log('scroll')
    },
    initSwiper() {
      this.topSwiper = new Swiper('.swiper', this.topOptions)
      this.articleSwiper = new Swiper('.article', this.articleSwiperOptions)
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
    // top swiper
    .ad {
      display: flex;
      padding: 0.2rem;
      .ad-lf {
        flex: 1;
      }
      .ad-rt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding-left: 0.2rem;
      }
      .ad-rt-above,
      .ad-rt-below {
        flex: 1;
      }
    }
    .article {
      padding: 0.5rem;
      .swiper-wrapper{
        width: 100%;
      }
    }
  }
}
</style>
