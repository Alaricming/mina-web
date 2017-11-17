<template>
    <swiper :options="options">
        <swiper-slide v-for="slide in slides" :key="slide">{{slide}}</swiper-slide>    
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
</template>
<script>
import awesomeSwiper from 'vue-awesome-swiper'
export default {
  props: {
    // options: {
    //   type: Array,
    //   default: []
    // },
    slides: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      options: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      slides: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('current swiper object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss" scoped>

</style>
