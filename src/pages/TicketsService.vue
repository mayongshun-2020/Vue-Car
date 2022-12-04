<template>
  <div class="content">
    <h2>Tickets Service</h2>
    <div class="tips">
      <h2 v-show="!infoList.length">
        Please add data in Tickets Service in Home
      </h2>
    </div>
    <el-table :data="infoList" stripe style="width: 90%" empty-text="None">
      <el-table-column prop="name" label="Applicant Name" width="150">
      </el-table-column>
      <el-table-column prop="visitDate" label="Visiting Date" width="150">
      </el-table-column>
      <el-table-column prop="contInfo" label="Contact information">
      </el-table-column>
      <el-table-column prop="arrNumber" label="Attendees number" width="380">
      </el-table-column>
      <el-table-column prop="appTime" label="Application Time" width="380">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TicketsService",
  data() {
    return {
      infoList: JSON.parse(localStorage.getItem("infoList")) || [],
    };
  },
};
</script>

<style scoped>
.content {
  margin: 30px 0px 30px 120px;
}
</style>
