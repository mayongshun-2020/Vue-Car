<template>
  <div class="newssub">
    <img :src="sub.imgSrc" />
    <h3> {{sub.title}} </h3>
    <p> {{sub.time}} </p>
    <p> {{sub.pubDate}} </p>
    <p> {{sub.author}} </p>
    <p>Description:</p>
    <p>
     {{sub.description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsSub",
  props: ["sub"],
  mounted() {
    // console.log(this.sub);
  },
};
</script>

<style scoped>
.newssub {
  width: 292px;
  padding-bottom: 20px;
  background: #262626;
  box-shadow: 0 0 10px #000;
  margin: 20px;
  float: left;
}
img {
  display: block;
}
h3 {
  font-size: 18px;
  line-height: 40px;
  color: #800d20;
  text-shadow: 0px 0px 10px #000;
  text-indent: 30px;
}
p {
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  margin-left: 30px;
}
</style>
