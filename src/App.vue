<template>
  <div id="app">
    <router-view class="viewport"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
@import './src/assets/style/variable.scss';
#app .viewport{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
