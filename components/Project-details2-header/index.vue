<template>
  <section
    class="page-header proj-det bg-img parallaxie valign"
    :style="`background-image: url(${img_content})`"
    data-overlay-dark="4"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-9">
          <div class="cont">
            <h6>{{ preTitle }}</h6>
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
      <!--<div class="row">
        <div class="col-lg-3">
          <div class="item mt-30">
            <h6>Client</h6>
            <p>
              <NuxtLink to="/">
                Upea
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item mt-30">
            <h6>Date</h6>
            <p>fecha</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item mt-30">
            <h6>Categories</h6>
            <p>
              <NuxtLink
                to="/"
              >
                link
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="item mt-30">
            <h6>Tags</h6>
            <p>
              <NuxtLink
                to="/"                
              >
                link
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
  props: ["preTitle","title"],
  data() {
    return {
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      img_content: '/img/universidad/about.jpg',
      foto : useInstitucionStore().fotosPagina[2],
      url_api : process.env.APP_ROOT_API,
      carrera_titulo: useInstitucionStore().institucion.institucion_nombre,
      institucion_logo : useInstitucionStore().institucion.institucion_logo,
      carrera_colores : useInstitucionStore().institucion.colorinstitucion,            
    };
  }, 
  methods: {
    setFoto(){
      if(this.foto != null && Object.keys(this.foto).length != 0){
        this.img_content = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`
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

<style scoped>
</style>