<template>
  <section
    class="video bg-img parallaxie"
    :style="`background-image: url(${url})`"
  >
    <ModalVideo
      :channel="videoChannel"
      :videoId="videoId"
      :isOpen.sync="videoIsOpen"
      :urlVideo="video"
    />
    <a class="vid valign" @click="openVideo">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </a>
    <div class="container">
      <div class="stauts">
        <div class="item col-6">
          <img :src="url_api + '/InstitucionUpea/' + carrera_logo" alt="" />
          <h6>{{ carrera.institucion_nombre }}</h6>
          <p>Video Institucional</p>
        </div>
        <!--<div class="item col-6">
          <h4>Mision</h4>
          <div v-html="mision"></div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>

/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from '@/store/store'

export default {
  data() {
    return {
      videoIsOpen: false,
      url_api : process.env.APP_ROOT_API,
      foto : useInstitucionStore().fotosPagina[1],
      url : '/img/universidad/video_fondo.jpeg',
      carrera : useInstitucionStore().institucion,
      carrera_logo: useInstitucionStore().institucion.institucion_logo,
      mision: useInstitucionStore().institucion.institucion_mision,
      vision: useInstitucionStore().institucion.institucion_vision,
      objetivos: useInstitucionStore().institucion.institucion_objetivos,
      video: useInstitucionStore().institucion.institucion_link_video_vision
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    },
    createdComponent(){
      if(this.foto != null && Object.keys(this.foto).length != 0){
        this.url = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`
      }
    }
  },
  created() {
    this.createdComponent()
  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    },
  },
};
</script>

<style scoped>
</style>