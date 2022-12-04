<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: { Navigation },
  data() {
    return {
      eventTitleImg: require("@/assets/img5.png"),
      newsTitleImg: require("@/assets/images/img7.png"),
      // // "../assets/images/img7.png",
      // // "../assets/images/img12.png",
      // // "../assets/images/img14.png",
    };
  },
};
</script>

<style>
body {
  padding-top: 50px;
}
</style>
