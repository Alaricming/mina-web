<template>
  <div class="wrapper">
      {{count}}
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {},
  computed: {
    // ...mapState(['count'])
    ...mapState({
      count: (state) => {
        return state.count
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
