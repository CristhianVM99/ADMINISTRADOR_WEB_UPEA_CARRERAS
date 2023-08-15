<template>
  <section class="min-area sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <img class="thumparallax-down" :src="img_about" alt="" style="object-fit: cover;height: 500px;" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content pt-0" style="margin: 100px 0px;">
            <h4 class="wow color-font">{{ carrera_nombre }}</h4>
            <p class="wow txt" data-splitting>
              A continuacion tenemos mas informacion de la carrera de {{ carrera_nombre }}              
            </p>
            <ul class="feat">
              <li class="wow fadeInUp" data-wow-delay=".2s">
                <h6><span>1</span>Mision</h6>
                <div v-html="mision"></div>
              </li>
              <li class="wow fadeInUp" data-wow-delay=".4s">
                <h6><span>2</span>Vision</h6>
                <div v-html="vision"></div>
              </li>
              <li class="wow fadeInUp" data-wow-delay=".6s">
                <h6><span>3</span>Objetivos</h6>
                <div v-html="objetivos"></div>                
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import thumparallaxDown from '../../common/thumparallaxDown';
export default {
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null || useInstitucionStore().fotosPagina ||  useInstitucionStore().fotosPortada ){      
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)
        let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA")
        let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA")
        useInstitucion.asignarInstitucion(institucion.Descripcion)
        useInstitucion.asignarFotosPagina(fotosPagina)
        useInstitucion.asignarFotosPortada(fotosPortada)
        return { fotosPagina, institucion }
      }
    } catch (e) {
      console.error("error",e)
    }
  },
  data() {
    return {
      carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      mision: useInstitucionStore().institucion.institucion_mision,
      vision: useInstitucionStore().institucion.institucion_vision,
      objetivos: useInstitucionStore().institucion.institucion_objetivos,
      foto : useInstitucionStore().fotosPagina[5],
      img_about: '/img/universidad/about2.png',
      url_api : process.env.APP_ROOT_API,
    };
  },
  methods: {
    setFoto(){
      if(this.foto != null && Object.keys(this.foto).length != 0){
        this.img_about = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`
      }
    },
    createdComponent(){
      this.setFoto()
    }
  },
  created() {
    this.createdComponent()
  },
  mounted() {
      thumparallaxDown()
  }
};
</script>

<style scoped>
</style>