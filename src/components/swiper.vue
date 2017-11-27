<template>
    <div class="swiper" :data="data">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in data">
                <img class="imgload img-item" :src="baseUrl + item.pic" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import { baseUrl } from '../assets/js/constant.js'

export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    direction: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      baseUrl,
      options: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: true,
        grabCursor: true, // 抓手形状
        direction: this.direction || 'horizontal'
      }
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.initSwiper()
    // })
    setTimeout(() => {
      this.initSwiper()
    }, 200)
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper', this.options)
      this.config()
    },
    config() {
      // this.swiper.pagination.bullets.css('background', '#d61718')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.min.css';
.img-item {
  width: 100%;
}
</style>
