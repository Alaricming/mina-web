<template>
  <div class="home-wrapper">
    <scroll ref="scroll" :data="articleList" :listenScroll="listenScroll">
      <div class="content">
          <div class="header">
              <div class="slider">
                <img :src="baseUrl + topSlideAd[3].pic" alt="">
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
      homeCategories: null
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
      padding: 0 .5rem .5rem;
      li{
        flex: 1;
        padding: .5rem;
        align-self: center;
      }
    }
  }
}
</style>
