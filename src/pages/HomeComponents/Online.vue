<template>
  <div class="onbox">
    <h2>Sponsors Online exhibition</h2>
    <router-view></router-view>
    <ul class="icon">
      <li v-for="t in textList" :key="t.id">
        <router-link
          :to="{
            name: 'onlineText',
            params: {
              id: t.id,
              VN: t.VN,
              CN: t.CN,
              DT: t.DT,
              CMN: t.CMN,
              model: t.model,
            },
          }"
          class="list-group-item"
          active-class="active"
          ><img :src="t.img" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Online",
  data() {
    return {
      textList: [
        {
          id: "001",
          img: require("@/assets/images/car1.png"),
          VN: "VOLKSWAGEN",
          CN: "Ford GT",
          DT: "special release",
          CMN: "abc",
          model: require("@/assets/images/icon1.png"),
        },
        {
          id: "002",
          img: require("@/assets/images/car2.png"),
          VN: "BMW",
          CN: "Ford GT",
          DT: "special release",
          CMN: "abc",
          model: require("@/assets/images/icon2.png"),
        },
        {
          id: "003",
          img: require("@/assets/images/car3.png"),
          VN: "VOLVO",
          CN: "Ford GT",
          DT: "special release",
          CMN: "abc",
          model: require("@/assets/images/icon3.png"),
        },
        {
          id: "004",
          img: require("@/assets/images/car4.png"),
          VN: "TESLA",
          CN: "Ford GT",
          DT: "special release",
          CMN: "abc",
          model: require("@/assets/images/icon4.png"),
        },
        {
          id: "005",
          img: require("@/assets/images/car5.png"),
          VN: "Ford",
          CN: "Ford GT",
          DT: "special release",
          CMN: "abc",
          model: require("@/assets/images/icon3.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.onbox {
  width: 1330px;
  margin: 0 auto;
  height: 493px;
  background: url(../../assets/images/img13.png) no-repeat;
  position: relative;
}
h2 {
  color: #337ab7;
  font-size: 30px;
  line-height: 320px;
  text-align: center;
  text-shadow: 0px 0px 10px #000;
  font-weight: bold;
}
.txtCon {
  width: 460px;
  height: 190px;
  background: #337ab7;
  position: absolute;
  top: 50%;
  left: 36%;
  box-shadow: 0 0 2px #fff;
}
.txtCon p {
  color: #fff;
  line-height: 29px;
  text-align: center;
  font-size: 18px;
}
.txtCon p img {
  display: inline-block;
  width: 30px;
  height: 30px;
}
ul {
  position: absolute;
  bottom: 1%;
  width: 100px;
  list-style: none;
}
li {
  float: left;
  margin: 10px;
  cursor: pointer;
}
li img {
  display: block;
}
</style>
