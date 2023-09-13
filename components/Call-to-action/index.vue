<template>
  <section
    class="call-action section-padding sub-bg bg-img"
    :style="`background-image: url(${img ? img : '/img/patrn.svg'})`"
  >
    <div class="" style="padding: 0px 10%">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <div class="content sm-mb30">
            <h6 class="wow words chars splitting" data-splitting>Upea</h6>
            <h2 class="wow words chars splitting" data-splitting>
              {{ carrera_title_organigrama }} <br />
              <b class="back-color">{{ carrera_nombre }}</b
              >.
            </h2>
          </div>
        </div>

        <div class="col-md-4 col-lg-6">
          <a :href="url_api + '/InstitucionUpea/' + carrera_organigrama">
            <client-only v-if="MostrarPdf">
              <pdf-embed
                :source="url_api + '/InstitucionUpea/' + carrera_organigrama"
                :page="1"
              />                           
            </client-only>
              <img                
                v-if="MostrarImagen"
                :src="url_api + '/InstitucionUpea/' + carrera_organigrama"
                alt="plan de estudios"
                style="width: 50%; height: 100%"
              />
          </a>
        </div>

        <div class="col-md-3 col-lg-3 valign">
          <a
            :href="url_api + '/InstitucionUpea/' + carrera_organigrama"
            target="_blank"
            class="butn bord curve wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>Descargar Organigrama</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

export default {
  props: ["img"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      carrera_organigrama:
        useInstitucionStore().institucion.institucion_organigrama,
      carrera_title_organigrama: useInstitucionStore().title_index_organigrama,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_iniciales:
        useInstitucionStore().institucion.institucion_iniciales,
      MostrarPdf: false,
      MostrarImagen: false,
    };
  },  
  methods: {
    PlanEstudios(){
      const extension = this.carrera_organigrama.split('.').pop();
      extension === "pdf" ? this.MostrarPdf = true : this.MostrarImagen = true;      
    }
  },
  created(){
    this.PlanEstudios()
  }
};
</script>

<style scoped></style>
