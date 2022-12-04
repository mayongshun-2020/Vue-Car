<template>
  <img :src="src" />
</template>

<script>
export default {
  name: "Title",
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style scoped>
img {
  width: auto;
  height: auto;
  display: block;
  margin: 20px auto;
}
</style>
