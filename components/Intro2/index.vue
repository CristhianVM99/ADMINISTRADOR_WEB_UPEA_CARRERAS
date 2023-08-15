<template>
  <header class="slider-st valign position-re">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="cont md-mb50">
            <div class="sub-title mb-5">
              <h6 style="color: #fff">Upea / {{ carrera_iniciales }}</h6>
            </div>
            <h1 class="mb-10 fw-600">
              Bienvenido a la Carrera de
              <span
                style="
                  color: var(--color-secundario);
                  text-transform: uppercase;
                "
                >{{ carrera_nombre }}</span
              >
            </h1>
            <p>
              {{ text_banner }}
            </p>
            <NuxtLink class="butn bord curve mt-30" to="/categorias">
              <span>Categorias</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="img">
            <img :src="img_banner2" :alt="carrera_nombre" />
          </div>
        </div>
      </div>
    </div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>
/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

export default {
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      text_banner: useInstitucionStore().text_banner,
      carrera_iniciales:
        useInstitucionStore().institucion.institucion_iniciales,
      portadas: useInstitucionStore().fotosPortada,
      facebook: useInstitucionStore().institucion.institucion_facebook,
      youtube: useInstitucionStore().institucion.institucion_youtube,
      twitter: useInstitucionStore().institucion.institucion_twitter,
      img_banner2: "/img/universidad/about.jpg",
    };
  },
  methods: {
    setFoto() {
      let foto = this.portadas[this.portadas.length - 1];
      if (foto != null) {
        this.img_banner2 = `${this.url_api}/InstitucionUpea/Portada/${foto.portada_imagen}`;
      }
    },
    createdComponent() {
      this.setFoto();
    },
  },
  created() {
    this.createdComponent();
  },
};
</script>

<style scoped></style>
