<template>
  <div class="home-wrapper">
    <scroll ref="scroll" :data="articleList" :listenScroll="listenScroll">
      <div class="content">
        <div class="header">
          <swiper :data="topSlideAd" :direction="headerDirect"></swiper>
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
              <img :src="baseUrl + top3LeftAdPic" alt="">
            </div>
            <div class="ad-rt">
              <div class="ad-rt-above">
                <img :src="baseUrl + top3RightAboveAdPic" alt="">
              </div>
              <div class="ad-rt-below">
                <img :src="baseUrl + top3RightBelowAdPic" alt="">
              </div>
            </div>
          </div>
        </div>
        <swiper :data="articleList" :direction="goodsDirect"></swiper>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '../../components/scroller'
import Swiper from '../../components/swiper'
import { baseUrl } from '../../assets/js/constant.js'
import { API_HOME } from '../../assets/js/api.js'
export default {
  components: {
    Scroll,
    Swiper
  },
  data() {
    return {
      baseUrl,
      listenScroll: true,
      data: null,
      count: 0,
      articleList: null,
      topSlideAd: null,
      homeSloganUrl: null,
      homeCategories: null,
      top3LeftAdPic: '',
      top3RightAboveAdPic: '',
      top3RightBelowAdPic: '',
      headerDirect: 'horizontal',
      goodsDirect: 'horizontal'
    }
  },
  mounted() {
    this.$ajax
      .get(this.baseUrl + API_HOME.getHomeAdvertisements + '?h5=true')
      .then(
        res => {
          this.data = res.data
          this.articleList = this.data.articleList
          this.picList = this.data.picList
          this.topSlideAd = this.data.topSlideAd
          this.top3RightAboveAdPic = this.data.top3RightAboveAd[0].pic
          this.top3RightBelowAdPic = this.data.top3RightBelowAd[0].pic
          this.top3LeftAdPic = this.data.top3LeftAd[0].pic
          this.homeSloganUrl = this.data.homeSloganUrl
          this.homeCategories = this.data.homeCategories
        },
        () => {
          console.log('request failed')
        }
      )
  },
  methods: {
    scroll() {
      console.log('scroll')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/common.scss';
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
    }
    .article {
      padding: 0.5rem;
      .swiper-wrapper {
        width: 100%;
      }
    }
  }
}
</style>
