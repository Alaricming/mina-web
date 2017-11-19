<template>
  <div class="home-wrapper">
    <scroll ref="scroll" :data="data" :listenScroll="listenScroll">
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aut delectus. Illo aspernatur similique veniam consequuntur alias architecto dolorem esse dolor illum aperiam, aut, ad eaque praesentium? Aliquam, molestias voluptate.</li>
          <li>Atque quidem reprehenderit eius illum, sequi eveniet magnam, laboriosam laborum, odio ipsa facilis? Dolorem veniam maiores laborum laudantium. Inventore qui culpa illo ullam illum perferendis similique commodi numquam id sequi.</li>
          <li>Officia tenetur sunt hic perspiciatis officiis fugit! Sapiente eum explicabo, voluptates nihil tenetur iure dolor illo. Eius dignissimos nisi amet eos! Eligendi aperiam doloremque esse! Voluptatem impedit quos nobis? Laboriosam.</li>
          <li>Libero quidem totam eos ipsum minus at, nam aliquid dicta modi porro optio maiores, sint maxime! Deleniti dolores laboriosam nemo alias magni? Repudiandae aut laudantium, quod vel non iure inventore.</li>
          <li>Laudantium sequi doloremque labore perferendis enim nemo quam corrupti molestiae odio error, dolorem soluta veritatis commodi obcaecati suscipit architecto pariatur deleniti fugit, similique sapiente expedita corporis in sit. Laborum, aspernatur?</li>
          <li>Debitis eligendi enim impedit veritatis aliquid? Quae, debitis sequi quas dignissimos quia atque doloremque nihil dicta. Eius corrupti similique nesciunt asperiores doloribus ea ipsam! Quisquam obcaecati ad sit minus illum!</li>
          <li>Repellendus, tempore fuga. In magnam doloribus quis maiores voluptas tempora ab cumque voluptate velit sint, saepe corporis voluptatibus qui eligendi a aliquid eum facere, autem ad nemo quod voluptatum. Iste.</li>
          <li>Deserunt adipisci deleniti magnam, modi reprehenderit ut eaque quas ducimus incidunt aspernatur tenetur, in a perferendis possimus ipsam atque porro vel corporis eum laboriosam doloribus praesentium! Recusandae aut maiores similique!</li>
          <li>Amet explicabo laboriosam eveniet nulla cum laudantium nam quasi vel deserunt reiciendis illum, nihil voluptatum nesciunt dolores natus quod. Quas autem odit cumque obcaecati consectetur officia, architecto maxime ex vel!</li>
          <li>Ea fugit laboriosam vitae possimus quis commodi autem ullam repellendus? Nobis autem inventore alias recusandae tenetur! Aliquid, cupiditate at enim aspernatur fugit ipsam, recusandae veritatis repellendus, nobis quibusdam necessitatibus sunt.</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '../../components/scroller'
import { baseUrl } from '../../assets/js/constant.js'
import axios from 'axios'
import { API_HOME } from '../../assets/js/api.js'
export default {
  components: {
    Scroll
  },
  data() {
    return {
      baseUrl,
      listenScroll: true,
      data: null
    }
  },
  mounted() {
    this.$ajax.get(this.baseUrl + API_HOME.getHomeAdvertisements + '?h5=true').then(
      res => {
        console.log(res)
        this.data = res.data.articleList
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
.home-warpper {
}
</style>
