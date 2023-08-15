<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <ContactHeader />
    <div class="main-content">
      <ContactForm theme="light" />
      <div class="map">
        <iframe
          :src="mapa"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <Footer hideBGCOLOR />
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
      if( useInstitucionStore().institucion == null || useInstitucionStore().fotosPagina ||  useInstitucionStore().fotosPortada || useInstitucionStore().carrera_links_externos == null){      
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)
        let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA")
        let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA")
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
        useInstitucion.asignarInstitucion(institucion.Descripcion)
        useInstitucion.asignarFotosPagina(fotosPagina)
        useInstitucion.asignarFotosPortada(fotosPortada)
        return { fotosPagina }
      }
    } catch (e) {
      console.error("error",e)
    }
  },
  data() {
    return {
      mapa : useInstitucionStore().institucion.institucion_api_google_map,
      url_api : process.env.APP_ROOT_API,
      carrera_titulo: useInstitucionStore().institucion.institucion_nombre,
      institucion_logo : useInstitucionStore().institucion.institucion_logo,
      carrera_colores : useInstitucionStore().institucion.colorinstitucion,
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
      title: this.carrera_titulo+' | Contacto',
      link: [
        { rel: 'icon', type:"image/x-icon", href: this.url_api + '/InstitucionUpea/' + this.institucion_logo }
      ]
    }
  },head() {
    return {
      titleTemplate: '%s - Contact Light'
    };
  },
  mounted() {
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