<template>
  <header class="slider-stwo valign position-re">
    <div class="container banner_intro3">
      <div class="row">
        <div class="col-lg-5">
          <div class="img">
            <img
              :src="
                url_api +
                '/InstitucionUpea/Portada/' +
                portadas[0].portada_imagen
              "
              :alt="carrera_nombre"
              style="width: 100%; height: 50vh; object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="cont">
            <div class="sub-title mb-5">
              <h6 style="color: #fff">{{ carrera_iniciales }}</h6>
            </div>
            <h1 class="mb-10 fw-600">
              Carrera de
              <span style="color: var(--color-secundario)">{{
                carrera_nombre
              }}</span>
            </h1>
            <p>
              {{ text_banner }}
            </p>
            <ul>
              <li style="margin-right: 3px">
                <div>
                  <span class="icon pe-7s-study">
                    <div class="bord"></div>
                  </span>
                </div>
                <div class="cont">
                  <h6>Trayectoria Exitosa</h6>
                  <p>Un Camino de Pasos Decididos</p>
                </div>
              </li>
              <li>
                <div>
                  <span class="icon pe-7s-id">
                    <div class="bord"></div>
                  </span>
                </div>
                <div class="cont">
                  <h6>Carrera Brillante</h6>
                  <p>Pasión, Perseverancia y Aprendizaje Constante</p>
                </div>
              </li>
            </ul>
            <NuxtLink
              class="butn bord curve mt-30"
              style="
                background: var(--color-secundario);
                color: #fff;
                border: none;
              "
              to="/categorias"
            >
              <span>Categorias</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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
    };
  },
};
</script>

<style scoped>
.slider-stwo:after {
  background: var(--color-secundario);
}
</style>
