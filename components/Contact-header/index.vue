<template>
  <header class="pages-header circle-bg valign position-re">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 col-md-11">
          <div class="capt">
            <div class="text-center">
              <h1 class="color-font mb-10 fw-700">
                {{ title_contacto }}
              </h1>
              <p>{{ pretitle_contacto }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Particles
      id="particles-js"
      :options="theme === 'light' ? particlesBlackConfig : particlesConfig"
    />

    <div class="circle-color">
      <div class="gradient-circle"></div>
      <div class="gradient-circle two"></div>
    </div>
  </header>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import contentHeaderData from "../../data/contact-header.json";
import particlesConfig from "../../config/particle-config";
import blackStarConfig from "../../config/pr-s-black";
export default {
  props: ["theme"],
  data() {
    return {
      contentHeaderData,
      particlesConfig,
      particlesBlackConfig: blackStarConfig,
      title_contacto : useInstitucionStore().title_contacto,
      pretitle_contacto : useInstitucionStore().pretitle_contacto,
    };
  },
  mounted() {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  },
};
</script>

<style scoped>
</style>