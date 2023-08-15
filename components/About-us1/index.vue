<template>
  <section class="about-us section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign md-mb50">
          <div class="mb-50">
            <h6 class="fw-100 text-u ls10 mb-10">{{ pretitle }}</h6>
            <h3 class="fw-600 text-u ls1 mb-30 color-font">
              {{ title }} {{ institucion_carrera.institucion_nombre }}
            </h3>    
            <div
            id="content_home"
            :class="{
              'texto-limitado': !mostrarCompleto,
              'texto-completo': mostrarCompleto
            }"
            v-html="institucion_carrera.institucion_sobre_ins"></div>    
            <span @click="cambiarTamanoTexto" class="butn bord curve mt-30">
              {{ mostrarCompleto ? 'Disminuir texto' : 'Expandir texto' }}
            </span>
          </div>
        </div>
        <div class="col-lg-7 img">
          <img v-if="foto != null" class="img_about" :src="url_api + '/InstitucionUpea/Portada/' + foto.portada_imagen" alt="" />
          <img v-else src="/img/universidad/upea-emblematico.jpg" alt="">
          <!-- 1000 x 1150-->
          <!--<div class="stauts">
            <div
              class="item"
              v-for="statue in aboutData.status"
              :key="statue.id"
            >
              <h4>
                {{ statue.number }}
                <span>{{ statue.letter }}</span>
              </h4>
              <h6>{{ statue.statusName }}</h6>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>

/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from '@/store/store'

import aboutUs1Data from "~/data/about-us1.json";
export default {
  data() {
    return {
      aboutData: aboutUs1Data,
      url_api : process.env.APP_ROOT_API,
      aboutData: aboutUs1Data,
      foto: useInstitucionStore().fotosPagina[0],
      institucion_carrera: useInstitucionStore().institucion,
      title: useInstitucionStore().title_index_about,
      pretitle: useInstitucionStore().institucion.institucion_iniciales,
      mostrarCompleto: false,
    };
  },
  methods: {  
    cambiarTamanoTexto() {
      this.mostrarCompleto = !this.mostrarCompleto
      if (!this.mostrarCompleto) {
        const appElement = document.getElementById('content_home')
        appElement.scrollIntoView()
      }
    },  
  },
};
</script>
<style scoped>
.img_about{
  width: 100%;
  object-fit: cover;
}
.texto-limitado {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 150px; /* Establece el ancho máximo según tus necesidades */
}

.texto-completo {
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
  max-width: none;
}
</style>