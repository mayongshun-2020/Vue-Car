<template>
  <div class="txtCon">
    <p style="margin-top:32px;">Vehicle Name:{{ VN }}</p>
    <p>Vehicle Name:{{ CN }}</p>
    <p>Display Type:{{ DT }}</p>
    <p>Company Name:{{ CMN }}</p>
    <p>Vehicle Model:<img :src="model" alt="" /></p>
  </div>
</template>

<script>
export default {
  name: "OnlineText",
  props: ["id", "VN", "CN", "DT", "CMN", "model"],
  // mounted() {
  //   console.log("00000", this.$route);
  // },
};
</script>

<style scoped>
p {
  line-height: 10px;
  text-align: center;
  color: #fff;
  font-size: 15px;
}
</style>
