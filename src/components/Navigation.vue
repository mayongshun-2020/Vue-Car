<template>
  <nav class="navbar navbar-fixed-top" style="background: rgb(229 229 229)">
    <ul class="nav nav-pills nav-justified">
      <li><img src="../assets/images/header-left.png" /></li>
      <li>
        <router-link to="/home"><a>Home</a></router-link>
      </li>
      <li>
        <router-link to="/ticketsservice"><a>Tickets Service</a></router-link>
      </li>
      <li>
        <router-link to="/exotics"><a>Exotics</a></router-link>
      </li>
      <li>
        <router-link to="/newsPosts"><a>NewsPosts</a></router-link>
      </li>
      <li>
        <p class="txt">{{ time }}</p>
      </li>
      <li>
        <p class="weather">{{ weather }}</p>
      </li>
    </ul>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "Navigation",
  data() {
    return {
      time: "",
      weather: "",
    };
  },
  mounted() {
    this.getTime();
    this.currentTime();
    this.getWeather();
  },
  methods: {
    currentTime() {
      setInterval(() => {
        this.getTime();
      }, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let min =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.time = yy + "-" + mm + "-" + dd + "   " + hh + ":" + min + ":" + ss;
    },
    getWeather() {
      let that = this;
      axios
        .get(
          "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=91862653&appsecret=X1btQ67N&city=上海"
        )
        .then(function (response) {
          // console.log(response.data);
          let city = response.data.cityEn;
          city = city
            .trim()
            .toLowerCase()
            .replace(city[0], city[0].toUpperCase());
          that.weather =
            city +
            "   " +
            response.data.data[0].tem2 +
            "°" +
            "~" +
            response.data.data[0].tem1 +
            "°";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
li img {
  margin-left: 80px;
}
a {
  color: #000;
  font-size: 20px;
}
p.title {
  font-size: 25px;
  color: #000;
}
p.txt {
  font-size: 15px;
  color: #000;
}
p.weather {
  margin-left: 20px;
  font-size: 15px;
  color: #000;
}
</style>
