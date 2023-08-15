<template>
  <div>
    <Navbar ref="navbar" lr="logoRef" />
    <div class="wrapper">
      <ProjectDetails2Header />
      <!--<ProjectIntroduction :projectIntroductionData="ProjectDate.intro" />
      <ProjectGallery :projectGalleryData="ProjectDate.gallery" />
      <ProjectDescription :projectDescriptionData="ProjectDate.description" />
      <ProjectVideo :projectVideoData="ProjectDate" />
      <NextProject />-->
      <Footer />
    </div>
  </div>
</template>

<script>
import { useInstitucionStore } from '@/store/store'

export default {
  layout: "light",
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null || useInstitucionStore().fotosPagina ||  useInstitucionStore().fotosPortada ){      
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
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
  head() {
    return {
      title: this.carrera_titulo+' | Sobre Nosotros',
      link: [
        { rel: 'icon', type:"image/x-icon", href: this.url_api + '/InstitucionUpea/' + this.institucion_logo }
      ]
    }
  },
  data() {
    return {      
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      img_about: '/img/universidad/about.jpg',
      foto : useInstitucionStore().fotosPagina[4],
      url_api : process.env.APP_ROOT_API,
      carrera_titulo: useInstitucionStore().institucion.institucion_nombre,
      institucion_logo : useInstitucionStore().institucion.institucion_logo,
      carrera_colores : useInstitucionStore().institucion.colorinstitucion,
    };
  },
  methods: {
    setFoto(){
      if(this.foto != null && Object.keys(this.foto).length != 0){
        this.img_about = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`
      }
    },
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
      this.setFoto()
      this.setColor()
    }
  },
  created() {
    this.createdComponent()
  },
  mounted() {
    var navbar = this.$refs.navbar.$el,
      logo = this.$refs.navbar.$refs.lr;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/img/logo-dark.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/img/logo-light.png");
      }
    });
  },
};
</script>

<style scoped>
</style>