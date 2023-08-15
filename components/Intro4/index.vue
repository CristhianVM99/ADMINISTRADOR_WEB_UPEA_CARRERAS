<template>
  <header class="particles circle-bg valign">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="cont text-center">
            <h3>Universidad Publica de El Alto</h3>
            <h1>
              <span class="color-font" style="text-transform: uppercase; font-size: 1.5em;">{{ carrera_nombre }}</span>
            </h1>            
          </div>          
        </div>
      </div>      
    </div>

    <Particles
      id="particles-js"
      :options="theme === 'light' ? particlesBlackConfig : particlesConfig"
    />

    <div class="banner4_cat">
      <NuxtLink class="butn curve mt-30 banner4_btn" style="background: var(--color-secundario); text-align: center;" to="/categorias">
        <span>Categorias</span>
      </NuxtLink>
    </div>
    <div class="gradient-circle"></div>
    <div class="gradient-circle two"></div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>

/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from '@/store/store'

import particlesConfig from "../../config/particle-config";
import blackStarConfig from "../../config/pr-s-black";
export default {
  props: ["theme"],
  data() {
    return {
      particlesConfig,
      particlesBlackConfig: blackStarConfig,
      url_api : process.env.APP_ROOT_API,
      carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      text_banner : useInstitucionStore().text_banner,
      carrera_iniciales : useInstitucionStore().institucion.institucion_iniciales,
      portadas : useInstitucionStore().fotosPortada, 
      facebook : useInstitucionStore().institucion.institucion_facebook,
      youtube : useInstitucionStore().institucion.institucion_youtube,
      twitter : useInstitucionStore().institucion.institucion_twitter,
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
.banner4_cat{
  position: absolute;
  bottom: 10%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
}
.banner4_btn{
  clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%);
  border: none;
  color: #fff;
  transition: 0.5s transform;
}
.banner4_btn:hover {
  transform: translateX(5px);
  background: var(--color-terciario);  
}
</style>