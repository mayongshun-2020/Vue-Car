<template>
  <div class="tickcon">
    <form>
      <h2>Tickets Service</h2>
      <p>
        <label>Applicant Name</label><input type="text" v-model="info.name" />
      </p>
      <p>
        <label>Visiting Date</label
        ><input type="text" v-model="info.visitDate" />
      </p>
      <p>
        <label>Contact information</label
        ><input type="textarea" v-model="info.contInfo" />
      </p>
      <p>
        <label>Attendees number</label
        ><input type="text" v-model="info.arrNumber" />
      </p>
      <p>
        <label>Application Time</label
        ><input type="text" v-model="info.appTime" />
      </p>
      <p>
        <input type="button" value="Submit" class="btn" @click="save" />
        <input type="button" value="Cancel" class="btn b2" @click="cancel" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      infoList: [],
      info: {
        name: "",
        visitDate: "",
        contInfo: "",
        arrNumber: "",
        appTime: "",
      },
    };
  },
  methods: {
    save() {
      // console.log(this.infoList);
      let obj = {
        name: this.info.name,
        visitDate: this.info.visitDate,
        contInfo: this.info.contInfo,
        arrNumber: this.info.arrNumber,
        appTime: this.info.appTime,
      };
      this.infoList.push(obj);
      this.info = {};
       if (JSON.stringify(obj) == "{}") {
         alert("Please enter information!");
      } 
      // else {
      //   alert("Submitted successfully!");
      // }
    },
    cancel() {
      this.info = {};
    },
  },
  watch: {
    infoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("infoList", JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
.tickcon {
  width: 1330px;
  margin: 0 auto;
  height: 560px;
  background: url(../../assets/images/img15.png) no-repeat;
}
form h2 {
  margin-left: 20%;
  color: #fff;
  font-family: "Britannic Bold";
  line-height: 100px;
}
form p {
  line-height: 35px;
  margin-left: 12%;
  color: #fff;
  margin-bottom: 20px;
}
form p label {
  width: 150px;
  height: 35px;
}
input {
  color: #000;
}
input[type="text"] {
  width: 250px;
  height: 30px;
  border-radius: 2px;
}
input[type="textarea"] {
  width: 250px;
  height: 70px;
  border-radius: 2px;
}
input.btn {
  width: 143px;
  height: 36px;
  background: #800d20;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  font-weight: bold;
}
input.btn:hover {
  background: #000;
}
input.b2 {
  background: #695a5a;
}
</style>
