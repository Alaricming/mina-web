<template>
  <div class="wrapper">
    <button @click="add()">+</button>
    {{count}}
    <button @click="reduce()">-</button>
    <input type="text" v-model="id">
    <button @click="refineUserId(id)">change ID</button>
    {{userId}}
    {{$store.getters.sqrt}}
    {{addNum(5)}}
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      id: 11
    }
  },
  mounted() {},
  methods: {
    // add() {
    //   this.$store.commit('add')
    // },
    // reduce() {
    //   this.$store.commit('reduce')
    // }
    // 
    // ...mapGetters([]),
    ...mapMutations(['add', 'reduce','refineUserId'])
  },
  computed: {
    // ...mapState(['count'])
    ...mapState(['count', 'userId']),
    // ...mapMutations(['add', 'reduce'])
    ...mapGetters(['addNum']),
    sqrt(){
        return this.$store.getters.sqrt
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
