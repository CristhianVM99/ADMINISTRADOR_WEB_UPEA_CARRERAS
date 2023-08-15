<template>
  <section class="block-sec foto_number">
    <span class="foto_number_content" num_img="1"></span>
    <div
      class="background bg-img pt-100 pb-0 parallaxie"
      :style="`background-image: url(${url});`"
      data-overlay-dark="5"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="vid-area">
              <span class="text">Ver Video</span>
              <ModalVideo
                :channel="videoChannel"
                :videoId="videoId"
                :isOpen.sync="videoIsOpen"
                :urlVideo="video"
              />
              <div class="vid-icon cursor-pointer" @click="openVideo">
                <a class="vid">
                  <div class="vid-butn">
                    <span class="icon">
                      <i class="fas fa-play"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="testim-box">
              <div class="head-box">
                <h6 class="wow fadeIn" data-wow-delay=".5s">
                  {{ carrera.institucion_nombre }}
                </h6>
                <!--<h4 class="wow fadeInLeft" data-wow-delay=".5s">
                  {{ carrera.institucion_nombre }}
                </h4>-->
              </div>
              <VueSlickCarousel
                v-bind="settings"
                class="slic-item wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div class="item">
                  <h4>Mision</h4>
                  <div v-html="mision" style="color: #fff"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img
                          class="img_video"
                          :src="url_api + '/InstitucionUpea/' + carrera_logo"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">
                          {{ carrera.institucion_nombre }}
                        </h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h4>Vision</h4>
                  <div v-html="vision" style="color: #fff"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img
                          class="img_video"
                          :src="url_api + '/InstitucionUpea/' + carrera_logo"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">
                          {{ carrera.institucion_nombre }}
                        </h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h4>Objetivos</h4>
                  <div v-html="objetivos" style="color: #fff !important"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img
                          class="img_video"
                          :src="url_api + '/InstitucionUpea/' + carrera_logo"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">
                          {{ carrera.institucion_nombre }}
                        </h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

export default {
  data() {
    return {
      videoIsOpen: false,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      url_api: process.env.APP_ROOT_API,
      foto: useInstitucionStore().fotosPagina[1],
      url: "/img/universidad/video_fondo.jpeg",
      carrera: useInstitucionStore().institucion,
      carrera_logo: useInstitucionStore().institucion.institucion_logo,
      mision: useInstitucionStore().institucion.institucion_mision,
      vision: useInstitucionStore().institucion.institucion_vision,
      objetivos: useInstitucionStore().institucion.institucion_objetivos,
      video: useInstitucionStore().institucion.institucion_link_video_vision,
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    },
    createdComponent() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.url = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    },
  },
  created() {
    this.createdComponent();
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
.img_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.foto_number {
  position: relative;
}
.foto_number_content {
  background: transparent;
  position: absolute;
  z-index: 100;
  width: 70px;
  height: 70px;
  bottom: 0;
  right: 0;
}
.foto_number_content:hover::before {
  position: absolute;
  content: attr(num_img);
  width: 70px;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.123);
  color: var(--color-secundario);
  font-size: 2.7em;
  z-index: 100;
  text-align: center;
  border-top-left-radius: 40px;
}
</style>
