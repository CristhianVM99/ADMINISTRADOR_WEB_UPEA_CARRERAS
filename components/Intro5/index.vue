<template>
  <header :ref="sliderRef" id="arch-slider" class="slider arch-slider">
    <div class="swiper-container parallax-slider">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="(port, id_port) in portadas"
          :key="id_port"
          class="swiper-slide"
        >
          <div
            class="bg-img valign"
            :style="`background-image: url(${
              url_api + '/InstitucionUpea/Portada/' + port.portada_imagen
            })`"
            data-overlay-dark="6"
          >
            <div class="container content_title" style="padding-bottom: 40px">
              <div class="row">
                <div class="col-lg-6">
                  <div class="caption mt-30">
                    <h1>
                      <div style="font-size: 0.5em">Carrera</div>
                      <div
                        style="
                          color: var(--color-secundario);
                          margin-left: 40px;
                          background: rgba(0, 0, 0, , 5);
                        "
                        class="letter_intro5"
                      >
                        {{ carrera_nombre.toUpperCase() }}
                      </div>
                    </h1>
                    <p>{{ text_banner }}</p>
                  </div>
                </div>
                <div class="col-lg-4 valign">
                  <div class="explore">
                    <NuxtLink
                      class="butn bord curve mt-30 btn_intro5"
                      style="background: var(--color-secundario)"
                      to="/categorias"
                    >
                      <span>Categorias <i class="ion-chevron-right"></i></span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="setting">
        <div class="controls">
          <div
            ref="navigationNextRef"
            class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i class="ion-chevron-right"></i>
          </div>
          <div
            ref="navigationPrevRef"
            class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i class="ion-chevron-left"></i>
          </div>
        </div>
        <div ref="paginationRef" class="swiper-pagination"></div>
      </div>
    </div>
  </header>
</template>

<script>
/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

import intro5Data from "../../data/intro5.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
export default {
  props: ["sliderRef"],
  data() {
    return {
      intro5Data,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".setting .swiper-button-prev",
          nextEl: ".setting .swiper-button-next",
        },
        parallax: true,
        pagination: {
          clickable: true,
          el: ".setting .swiper-pagination",
        },
      },
      url_api: process.env.APP_ROOT_API,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      text_banner: useInstitucionStore().text_banner,
      carrera_iniciales:
        useInstitucionStore().institucion.institucion_iniciales,
      portadas: useInstitucionStore().fotosPortada,
      facebook: useInstitucionStore().institucion.institucion_facebook,
      youtube: useInstitucionStore().institucion.institucion_youtube,
      twitter: useInstitucionStore().institucion.institucion_twitter,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    handleSwiperReadied: (swiper) => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      });
    },
  },
  mounted() {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  },
};
</script>

<style scoped>
.arch-slider {
  padding-bottom: 0px !important;
}
.arch-slider .setting {
  border-top-left-radius: 40px;
}
.letter_intro5 {
  font-weight: bold;
}
.content_title {
  position: relative;
}
.content_title:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.7) 80%);
  transform: skew(20deg);
}
</style>
