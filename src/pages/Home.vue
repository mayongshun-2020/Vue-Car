<template>
  <div>
    <slideBanner></slideBanner>
    <Title :src="eventTitleImg"></Title>
    <Event></Event>
    <Title :src="newsTitleImg"></Title>
    <News></News>
    <Title :src="onlineImg"></Title>
    <Online></Online>
    <Title :src="ticketsImg"></Title>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>

<script>
import slideBanner from "./HomeComponents/slideBanner.vue";
import Event from "./HomeComponents/Event.vue";
import News from "./HomeComponents/News.vue";
import Title from "./HomeComponents/Title.vue";
import Online from "./HomeComponents/Online.vue";
import Info from "./HomeComponents/Info.vue";
import Footer from "./HomeComponents/Footer.vue";
export default {
  name: "Home",
  components: { slideBanner, Event, News, Title, Online, Info,Footer },
  data() {
    return {
      eventTitleImg: require("@/assets/img5.png"),
      newsTitleImg: require("@/assets/images/img7.png"),
      onlineImg: require("@/assets/images/img12.png"),
      ticketsImg: require("@/assets/images/img14.png"),
    };
  },
};
</script>

<style></style>
