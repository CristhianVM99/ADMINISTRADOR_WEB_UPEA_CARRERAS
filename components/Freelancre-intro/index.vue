<template>
  <header class="freelancre valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="img">
            <img :src="img_banner" :alt="carrera_nombre" />
          </div>
        </div>
        <div class="col-lg-8 valign">
          <div class="cont">
            <h1 class="cd-headline clip" style="font-size: 3.5em;">
              <span style="font-size: 0.7em;">Bienvenido a la Carrera de</span>
              <span class="cd-words-wrapper">
                <VueTyper
                  :text="[carrera_nombre.toUpperCase()]"
                  :repeat="Infinity"
                  initial-action="erasing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="backspace"
                  caret-animation="smooth"
                  class="color-font fw-600"                  
                ></VueTyper>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="states">
        <div class="container">
          <ul class="flex">
            <li class="flex">
              <div class="numb valign">
                <h3>|</h3>
              </div>
              <div class="text valign">
                <p>
                  <b>Trayectoria Exitosa</b><br />
                  Un Camino de Pasos Decididos
                </p>
              </div>
            </li>

            <li class="flex">
              <div class="numb valign">
                <h3>|</h3>
              </div>
              <div class="text valign">
                <p>
                  <b>Carrera Brillante</b> <br />
                  Pasión, Perseverancia y Aprendizaje Constante
                </p>
              </div>
            </li>

            <li class="mail-us">
              <a :href="`mailto:${institucion_correo1}`">
                <div class="flex">
                  <div class="text valign">
                    <div class="full-width">
                      <p>Contactanos al</p>
                      <h6>{{ institucion_correo1 }}</h6>
                    </div>
                  </div>
                  <div class="mail-icon">
                    <div class="icon-box">
                      <span class="icon color-font pe-7s-mail"></span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>

/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from '@/store/store'

export default {
  data() {
    return {
      url_api : process.env.APP_ROOT_API,
      carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      text_banner : useInstitucionStore().text_banner,
      institucion_correo1 : useInstitucionStore().institucion.institucion_correo1,
      carrera_iniciales : useInstitucionStore().institucion.institucion_iniciales,
      portadas : useInstitucionStore().fotosPortada, 
      facebook : useInstitucionStore().institucion.institucion_facebook,
      youtube : useInstitucionStore().institucion.institucion_youtube,
      twitter : useInstitucionStore().institucion.institucion_twitter,
      img_banner: '/img/universidad/about.jpg',
    }
  },
  methods: {
    setFoto(){
      let foto = this.portadas[this.portadas.length - 1];
      if(foto != null){
        this.img_banner = `${this.url_api}/InstitucionUpea/Portada/${foto.portada_imagen}`
      }
    },
    createdComponent(){
      this.setFoto()     
    }
  },
  created() {
    this.createdComponent()
  },
};
</script>

<style>
span.right {
    display: none !important;
}
span.caret:empty:before {
    content: "\200B";
    background: #fff;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
}
.freelancre:after{
  background: linear-gradient(15deg , transparent, var(--color-terciario)) !important;
  opacity: 0.7 !important;
}
</style>