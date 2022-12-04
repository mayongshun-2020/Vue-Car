<template>
  <div class="context">
    <h2 class="title">NewsPosts</h2>
    <div class="addBtn">
      <el-button type="primary" plain @click="dialogVisible = true"
        >ADD CAR</el-button
      >
    </div>
    <el-dialog title="ADD CAR" :visible.sync="dialogVisible" width="40%">
      <ul class="infoEdit">
        <li>
          <img :src="newCar.imgSrc" />
        </li>
        <li>
          <span>Brand</span>
          <el-input placeholder="Brand..." v-model="newCar.brand"></el-input>
        </li>
        <li>
          <span>Published date</span>
          <div class="block">
            <el-date-picker
              v-model="newCar.pubDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="Published date..."
            >
            </el-date-picker>
          </div>
        </li>
        <li>
          <span>Model</span>
          <el-input placeholder="Model..." v-model="newCar.model"></el-input>
        </li>
        <li>
          <span>Description</span>
          <el-input
            type="textarea"
            autosize
            placeholder="Description..."
            v-model="newCar.description"
          >
          </el-input>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addCar">Submit</el-button>
      </span>
    </el-dialog>
    <div class="box">
      <ul>
        <li v-for="p in postsList" :key="p.id">
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
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./HomeComponents/Footer.vue";
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "NewsPosts",
  components: {
    Footer,
  },
  computed: {
    ...mapState("newsPosts", ["postsList"]),
  },
  data() {
    return {
      newCar: {
        id: nanoid(),
        imgSrc: require("@/assets/images/img9.png"),
        brand: "",
        pubDate: "",
        model: "",
        description: "",
      },
      dialogVisible: false,
    };
  },
  methods: {
    disabledDate(time) {
      return time.getTime() > Date.now();
    },
    addCar() {
      this.dialogVisible = false;
      // console.log(this.newCar);
      // this.postsList.unshift(this.newCar);
      // console.log(this.postsList);
      this.$store.dispatch("newsPosts/addNewCar", this.newCar);
      this.newCar = {
        id: nanoid(),
        imgSrc: require("@/assets/images/img9.png"),
        brand: "",
        pubDate: "",
        model: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.title {
  margin: 30px 0px 30px 120px;
  font-size: 60px;
  font-weight: bold;
}
.footer {
  display: flex;
}
.footTitle {
  margin: 30px 0px 30px 120px;
  font-weight: bold;
}
.txt {
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
.box {
  width: 1330px;
  margin: 0 auto;
  height: auto;
}
.box ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.box li {
  width: auto;
  float: left;
}
.box .newssub {
  width: 292px;
  height: 509px;
  padding-bottom: 20px;
  background: #262626;
  box-shadow: 0 0 10px #000;
  margin: 15px;
  float: left;
}
.box img {
  display: block;
}
.box h3 {
  font-size: 18px;
  line-height: 40px;
  color: #800d20;
  text-shadow: 0px 0px 10px #000;
  text-indent: 30px;
}
.box p {
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  margin-left: 30px;
}
.context {
  position: relative;
}
.addBtn {
  width: 120px;
  height: 40px;
  position: absolute;
  right: 6%;
  top: 2%;
}
.infoEdit li {
  width: 80%;
  list-style: none;
}
</style>
