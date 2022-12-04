<template>
  <div>
    <div class="cont">
      <div class="box">
        <h2>New York Auto Show</h2>
        <p>
          The Future is Electric with the newly developed Electric Vehicle Test
          Track located on Level 1 of the New York International Auto Show. With
          multiple indoor test tracks, the New York Auto Show is elevating
          electric vehicles to new heights this year by featuring an
          unprecedented entire floor dedicated to electric vehicles, charging
          solutions, and consumer awareness programs.
        </p>

        <router-link to="/exotics"> <button>ReadMore</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
};
</script>

<style scoped>
.cont {
  width: 1330px;
  height: 471px;
  background: url(../../assets/images/10001.jpg) no-repeat;
  margin: 0 auto;
  position: relative;
}
.box {
  width: 40%;
  height: 380px;
  margin-left: 8%;
  position: absolute;
  top: 13%;
}
h2 {
  font-size: 32px;
  font-weight: bold;
  line-height: 80px;
  color: #800d20;
  text-shadow: 0px 0px 10px #000;
  font-family: "Britannic Bold";
}
p {
  color: #fff;
  line-height: 25px;
  font-size: 18px;
}
button {
  width: 176px;
  height: 42px;
  background-color: #800d20;
  color: #fff;
  text-align: center;
  line-height: 42px;
  margin-top: 30px;
  border: none;
  /* asdasdasd */
}
button:hover {
  background: #000;
}
</style>
