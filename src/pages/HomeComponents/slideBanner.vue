<template>
  <el-carousel indicator-position="inside" height="748px" arrow="never">
    <el-carousel-item>
      <img
        class="slide_img"
        src="../../assets/images/a2.jpeg"
        width="1330px"
        height="748px"
      />
    </el-carousel-item>
    <el-carousel-item class="slide">
      <img src="../../assets/images/a3.jpeg" width="1330px" height="748px" />
    </el-carousel-item>
    <el-carousel-item class="slide">
      <img src="../../assets/images/a4.jpeg" width="1330px" height="748px" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "slideBanner",
};
</script>

<style scoped>
img {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
}
</style>
