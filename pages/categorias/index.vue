<template>
  <div>
    <div class="circle-bg">
      <div class="circle-color fixed">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
    <Navbar ref="navbar" lr="logoRef" theme="light" />
    <WorksHeader ref="fixedSlider" :title="title_categories" :text="text_categories" :content="textBackground_categories"/>
    <div ref="MainContent" class="main-content">
      <WorksStyle3 :grid="3" filterPosition="center" />
      <Footer />
    </div>
  </div>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
  layout: "light",
  data() {
    return {
      carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      institucion_logo : useInstitucionStore().institucion.institucion_logo,
      url_api : process.env.APP_ROOT_API,
      title_categories : useInstitucionStore().title_categories,
      text_categories : useInstitucionStore().text_categories,
      textBackground_categories : useInstitucionStore().textBackground_categories,
      carrera_colores : useInstitucionStore().institucion.colorinstitucion,
    }
  },
  async asyncData({ $axios }) {        
    try {         
        const useInstitucion = useInstitucionStore()     
        if( useInstitucionStore().institucion == null ){
          const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)              
          const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
          useInstitucion.asignarInstitucion(institucion.Descripcion)
          useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
        }            
    } catch (e) {
        console.error("error",e)
    }
  },
  methods: {
    setColor(){
      if (Object.keys(this.carrera_colores).length != 0) {
      if (process.client) { // Verifica si el código se está ejecutando en el lado del cliente
        document.documentElement.style.setProperty(
          '--color-primario',
          this.carrera_colores[0].color_primario
        );
        document.documentElement.style.setProperty(
          '--color-secundario',
          this.carrera_colores[0].color_primario
        );
        document.documentElement.style.setProperty(
          '--color-terciario',
          this.carrera_colores[0].color_secundario
        );
      }
      }
    }, 
    createdComponent(){
      this.setColor()
    }
  },
  created() {
    this.createdComponent()
  },
  head() {
    return {
      title: this.carrera_nombre+' | Categorias',
      link: [
        { rel: 'icon', type:"image/x-icon", href: this.url_api + '/InstitucionUpea/' + this.institucion_logo }
      ]
    }
  },
  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>