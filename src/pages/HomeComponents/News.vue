<template>
  <div class="box">
    <ul>
      <li v-for="p in postsList.slice(0, 4)" :key="p.id">
        <div class="newssub">
          <img :src="p.imgSrc" />
          <h3>{{ p.brand }}</h3>
          <p>Published date:{{ p.pubDate }}</p>
          <p>Model:{{ p.model }}</p>
          <p>Description:</p>
          <p>
            {{ p.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "News",
  computed: {
    newsPostsList() {},
    ...mapState("newsPosts", ["postsList"]),
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  mounted() {
    // console.log(this.postsList);
  },
};
</script>

<style scoped>
.box {
  width: 1330px;
  margin: 0 auto;
  height: 540px;
}
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: auto;
  float: left;
}
.newssub {
  width: 292px;
  height:509px;
  padding-bottom: 20px;
  background: #262626;
  box-shadow: 0 0 10px #000;
  margin: 15px;
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
