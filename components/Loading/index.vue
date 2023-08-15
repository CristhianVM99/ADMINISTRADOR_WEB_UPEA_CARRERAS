<template>
  <div class="showX">
    <div class="loading">
      <span>C</span>
      <span>A</span>
      <span>R</span>
      <span>G</span>
      <span>A</span>
      <span>N</span>
      <span>D</span>
      <span>O</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script>
import loadingPace from "../../common/loadingPace";
export default {
  mounted() {
    if (window.Pace) {
      loadingPace();
    }
  },
};
</script>

<style scoped>
</style>