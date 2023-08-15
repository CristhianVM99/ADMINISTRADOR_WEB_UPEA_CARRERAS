<template>
    <div>
      <div class="circle-bg">
        <div class="circle-color fixed">
          <div class="gradient-circle"></div>
          <div class="gradient-circle two"></div>
        </div>
      </div>
      <Navbar ref="navbar" />
      <PageHeader
        :title="`Detalles de ${ $route.params.detalle }`"
        :paragraph="`Todas las noticias y eventos más actuales de ${carrera_nombre}.`"
      />
      <BlogDetails :colection="colection" :tipo="$route.params.detalle"/>
      <Footer />
    </div>
  </template>
  
  <script>
  import CryptoJS from 'crypto-js'
  import { useInstitucionStore } from '@/store/store'
  export default {
    layout: 'dark',
    async asyncData({ $axios }) {        
        try {         
            const useInstitucion = useInstitucionStore()     
            if( useInstitucionStore().institucion == null || useInstitucionStore().carrera_links_externos == null){
              const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)
              let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA")
              let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA")
              const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
              useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
              useInstitucion.asignarFotosPagina(fotosPagina)
              useInstitucion.asignarFotosPortada(fotosPortada)
              useInstitucion.asignarInstitucion(institucion.Descripcion)
            }
            if( useInstitucionStore().carrera_cursos == null || useInstitucionStore().carrera_seminarios == null){
              const CursosFilter = await $axios.$get('/api/cursosAll/' + process.env.APP_ID_CARRERA)
              let carrera_CursosAll = CursosFilter.filter(cur => cur.det_estado === '1')
              let cursos = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS")
              let seminarios = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS")
              useInstitucion.asignarCursos(cursos)
              useInstitucion.asignarSeminarios(seminarios)
            }
            if( useInstitucionStore().carrera_convocatorias == null || useInstitucionStore().carrera_avisos || useInstitucionStore().carrera_comunicados){
              const ComunicadosFilter = await $axios.$get('/api/convocatoriasAll/' + process.env.APP_ID_CARRERA)
              let carrera_ConvocatoriasAll = ComunicadosFilter.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_estado === "1") 
              let comunicados = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS")
              let convocatorias = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS")
              let avisos = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS")         
              useInstitucion.asignarConvocatorias(convocatorias)
              useInstitucion.asignarComunicados(comunicados)
              useInstitucion.asignarAvisos(avisos)
            } 
            if( useInstitucionStore().carrera_servicios == null || useInstitucionStore().carrera_ofertasacademicas == null ){
              const carrera_servicios = await $axios.$get('/api/ServicioAll/' + process.env.APP_ID_CARRERA)
              const carrera_ofertasacademicas = await $axios.$get('/api/OfertasAcademicasAll/' + process.env.APP_ID_CARRERA)
              useInstitucion.asignarServicios(carrera_servicios)
              useInstitucion.asignarOfertasAcademicas(carrera_ofertasacademicas)
            }      
            if( useInstitucionStore().carrera_publicaciones == null || useInstitucionStore().carrera_gacetas == null || useInstitucionStore().carrera_eventos == null || useInstitucionStore().carrera_videos == null ){
              const carrera_publicaciones = await $axios.$get('/api/publicacionesAll/' + process.env.APP_ID_INSTITUCION)
              const carrera_gacetas = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
              const carrera_eventos = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
              const carrera_videos = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)
              useInstitucion.asignarPublicaciones(carrera_publicaciones)
              useInstitucion.asignarGacetas(carrera_gacetas)
              useInstitucion.asignarEventos(carrera_eventos)
              useInstitucion.asignarVideos(carrera_videos)
            }
        } catch (e) {
            console.error("error",e)
        }
    },    
    data() {
      return {
          carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
          institucion_logo : useInstitucionStore().institucion.institucion_logo,
          url_api : process.env.APP_ROOT_API,
          colection : null,
          carrera_colores : useInstitucionStore().institucion.colorinstitucion,
      }
    },
    methods: {
      decryptID(ciphertext) {
        const encryptionKey = 'UniversidadPublicaDeElAlto'; // Cambia esto por tu clave de encriptación
        const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
        const decryptedID = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedID;
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
      getDetalle(){
        switch (this.$route.params.detalle) {
          case "convocatorias":
              this.colection = useInstitucionStore().carrera_convocatorias.filter(conv => conv.idconvocatorias == this.decryptID(this.$route.query.id))
              break;            
          case "comunicados":
              this.colection = useInstitucionStore().carrera_comunicados.filter(conv => conv.idconvocatorias == this.decryptID(this.$route.query.id))
              break;
          case "avisos":
              this.colection = useInstitucionStore().carrera_avisos.filter(conv => conv.idconvocatorias == this.decryptID(this.$route.query.id))
              break;
          case "cursos":
              this.colection = useInstitucionStore().carrera_cursos.filter(conv => conv.iddetalle_cursos_academicos == this.decryptID(this.$route.query.id))
              break;
          case "seminarios":
              this.colection = useInstitucionStore().carrera_seminarios.filter(conv => conv.iddetalle_cursos_academicos == this.decryptID(this.$route.query.id))
              break;
          case "servicios":
              this.colection = useInstitucionStore().carrera_servicios.filter(conv => conv.serv_id == this.decryptID(this.$route.query.id))
              break;
          case "ofertasacademicas":
              this.colection = useInstitucionStore().carrera_ofertasacademicas.filter(conv => conv.ofertas_id == this.decryptID(this.$route.query.id)) 
              break;
          case "publicaciones":
              this.colection = useInstitucionStore().carrera_publicaciones.filter(conv => conv.publicaciones_id == this.decryptID(this.$route.query.id))                     
              break;
          case "gacetas":
              this.colection = useInstitucionStore().carrera_gacetas.filter(conv => conv.gaceta_id == this.decryptID(this.$route.query.id))                     
              break;
          case "eventos":
              this.colection = useInstitucionStore().carrera_eventos.filter(conv => conv.evento_id == this.decryptID(this.$route.query.id))                     
              break;
          case "videos":
              this.colection = useInstitucionStore().carrera_videos.filter(conv => conv.video_id == this.decryptID(this.$route.query.id))                     
              break;
          default:
              break;
        }
      },
      createdComponent(){
        this.setColor()
        this.getDetalle()    
      }
    },
    created() {
        this.createdComponent()
    },
    head() {
      return {
        title: this.carrera_nombre+' | '+this.$route.params.detalle,
        link: [
          { rel: 'icon', type:"image/x-icon", href: this.url_api + '/InstitucionUpea/' + this.institucion_logo }
        ]
      }
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