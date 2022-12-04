<template>
  <div class="context">
    <h2>EXOTICS</h2>
    <img src="../assets/images/Exotics-Crowd.jpg" alt="" />
    <h3>Exotics</h3>
    <p>
      The New York Auto Show will showcase a slate of supercars, hypercars and
      exclusive luxury vehicles that are always a crowd favorite! One-of-a-kind
      vehicles expected to be on display in 2022 include Bentley, Karma,
      Lamborghini, Porsche, and Rolls Royce.
    </p>
    <div class="hr"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./HomeComponents/Footer.vue";
export default {
  name: "Exotics",
  components: {
    Footer,
  },
};
</script>

<style scoped>
h2 {
  margin: 30px 0px 30px 120px;
  font-size: 60px;
  font-weight: bold;
}
img {
  width: 100%;
  height: 100%;
}
h3 {
  margin: 30px 0px 30px 120px;
  font-weight: bold;
}
p {
  width: 1220px;
  height: 52px;
  margin: 30px 0px 30px 120px;
  font-size: 18px;
}
.hr {
  width: 1220px;
  height: 5px;
  background: #c8102e;
  margin: 30px 0px 30px 120px;
}
</style>
