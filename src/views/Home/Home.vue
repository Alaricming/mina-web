<template>
    <div class="wrapper">
        <el-container>
            <el-header class="header">
                <h4 class="text-center">主页</h4>
            </el-header>
            <el-main class="content">
                <el-carousel :interval="4000" type="card" class="carousel">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-main>
        </el-container>  
    </div> 
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.header h4{
    font-size: 1rem;
    text-align: center;
}
.carousel {
  height: 7.5rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
