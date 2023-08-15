<template>
  <section class="intro-section section-padding pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="htit sm-mb30">
            <h4>{{ title_about }}</h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1 col-md-8" style="margin-bottom: 100px ">
          <div class="text" v-html="carrera_historia"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import AboutInfo1Data from "../../data/about-info.json";
export default {
  data() {
    return {
      AboutInfo1Data,
      title_about : useInstitucionStore().title_about,
      carrera_historia : useInstitucionStore().institucion.institucion_historia,
    };
  },
};
</script>

<style scoped>
</style>