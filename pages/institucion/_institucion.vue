<template>
  <div>
    <Navbar ref="navbar" lr="logoRef" />
    <div class="wrapper">
      <ProjectDetails2Header :preTitle="pretitle" :title="title" />
      <!--<ProjectIntroduction :title="title_introduccion" :content="content_introduccion" :carrera="carrera"/>-->
      <InstitucionInterfaz
        v-if="layout == 1"
        :documento="documento"
        :title="title_introduccion"
        :content="content_introduccion"
        :carrera="carrera"
        :tipo="$route.params.institucion"
      />
      <WorksStyle2
        v-if="layout == 2"
        :documentos="documento"
        :colection="colection"
        :title="title_introduccion"
        :content="content_introduccion"
        :carrera="carrera"
        :grid="3"
        filterPosition="center"
        :tipo="$route.params.institucion"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import { useInstitucionStore } from "@/store/store";

export default {
  layout: "light",
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore();
      if (
        useInstitucionStore().institucion == null ||
        useInstitucionStore().carrera_links_externos == null
      ) {
        const institucion = await $axios.$get(
          "/api/InstitucionUPEA/" + process.env.APP_ID_INSTITUCION
        );
        let fotosPagina = institucion.Descripcion.portada.filter(
          (port) => port.portada_titulo === "PAGINA"
        );
        let fotosPortada = institucion.Descripcion.portada.filter(
          (port) => port.portada_titulo != "PAGINA"
        );
        useInstitucion.asignarFotosPagina(fotosPagina);
        useInstitucion.asignarFotosPortada(fotosPortada);
        useInstitucion.asignarInstitucion(institucion.Descripcion);
        const carrera_links_externos = await $axios.$get(
          "/api/linksIntExtAll/" + process.env.APP_ID_INSTITUCION
        );
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos);
      }
      if (
        useInstitucionStore().carrera_cursos == null ||
        useInstitucionStore().carrera_seminarios == null
      ) {
        const CursosFilter = await $axios.$get(
          "/api/cursosAll/" + process.env.APP_ID_CARRERA
        );
        let carrera_CursosAll = CursosFilter.filter(
          (cur) => cur.det_estado === "1"
        );
        let cursos = carrera_CursosAll.filter(
          (cur) => cur.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS"
        );
        let seminarios = carrera_CursosAll.filter(
          (cur) => cur.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS"
        );
        useInstitucion.asignarCursos(cursos);
        useInstitucion.asignarSeminarios(seminarios);
      }
      if (
        useInstitucionStore().carrera_convocatorias == null ||
        useInstitucionStore().carrera_avisos ||
        useInstitucionStore().carrera_comunicados
      ) {
        const ComunicadosFilter = await $axios.$get(
          "/api/convocatoriasAll/" + process.env.APP_ID_CARRERA
        );
        let carrera_ConvocatoriasAll = ComunicadosFilter.filter(
          (conv) => conv.tipo_conv_comun.tipo_conv_comun_estado === "1"
        );
        let comunicados = carrera_ConvocatoriasAll.filter(
          (conv) =>
            conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS"
        );
        let convocatorias = carrera_ConvocatoriasAll.filter(
          (conv) =>
            conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS"
        );
        let avisos = carrera_ConvocatoriasAll.filter(
          (conv) => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS"
        );
        useInstitucion.asignarConvocatorias(convocatorias);
        useInstitucion.asignarComunicados(comunicados);
        useInstitucion.asignarAvisos(avisos);
      }
      if (
        useInstitucionStore().carrera_servicios == null ||
        useInstitucionStore().carrera_ofertasacademicas == null
      ) {
        const carrera_servicios = await $axios.$get(
          "/api/ServicioAll/" + process.env.APP_ID_CARRERA
        );
        const carrera_ofertasacademicas = await $axios.$get(
          "/api/OfertasAcademicasAll/" + process.env.APP_ID_CARRERA
        );
        useInstitucion.asignarServicios(carrera_servicios);
        useInstitucion.asignarOfertasAcademicas(carrera_ofertasacademicas);
      }
      if (
        useInstitucionStore().carrera_publicaciones == null ||
        useInstitucionStore().carrera_gacetas == null ||
        useInstitucionStore().carrera_eventos == null ||
        useInstitucionStore().carrera_videos == null
      ) {
        const carrera_publicaciones = await $axios.$get(
          "/api/publicacionesAll/" + process.env.APP_ID_INSTITUCION
        );
        const carrera_gacetas = await $axios.$get(
          "/api/gacetaunivAll/" + process.env.APP_ID_INSTITUCION
        );
        const carrera_eventos = await $axios.$get(
          "/api/eventoAll/" + process.env.APP_ID_INSTITUCION
        );
        const carrera_videos = await $axios.$get(
          "/api/VideosAll/" + process.env.APP_ID_INSTITUCION
        );
        useInstitucion.asignarPublicaciones(carrera_publicaciones);
        useInstitucion.asignarGacetas(carrera_gacetas);
        useInstitucion.asignarEventos(carrera_eventos);
        useInstitucion.asignarVideos(carrera_videos);
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  head() {
    return {
      title: this.carrera_titulo + " | Sobre Nosotros",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: this.url_api + "/InstitucionUpea/" + this.institucion_logo,
        },
      ],
    };
  },
  data() {
    return {
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      img_about: "/img/universidad/about.jpg",
      foto: useInstitucionStore().fotosPagina[4],
      url_api: process.env.APP_ROOT_API,
      carrera_titulo: useInstitucionStore().institucion.institucion_nombre,
      institucion_logo: useInstitucionStore().institucion.institucion_logo,
      carrera_colores: useInstitucionStore().institucion.colorinstitucion,

      title_calendario_academico:
        useInstitucionStore().title_calendario_academico,
      content_calendario_academico:
        useInstitucionStore().content_calendario_academico,
      title_horario_academico: useInstitucionStore().title_horario_academico,
      content_horario_academico:
        useInstitucionStore().content_horario_academico,
      title_plan_de_estudio: useInstitucionStore().title_plan_de_estudio,
      content_plan_de_estudio: useInstitucionStore().content_plan_de_estudio,
      title_reglamento_mod_graduacion:
        useInstitucionStore().title_reglamento_mod_graduacion,
      content_reglamento_mod_graduacion:
        useInstitucionStore().content_reglamento_mod_graduacion,
      title_convenios_institucionales:
        useInstitucionStore().title_convenios_institucionales,
      content_convenios_institucionales:
        useInstitucionStore().content_convenios_institucionales,
      title_pasantias: useInstitucionStore().title_pasantias,
      content_pasantias: useInstitucionStore().content_pasantias,
      title_trabajos_dirigidos: useInstitucionStore().title_trabajos_dirigidos,
      content_trabajos_dirigidos:
        useInstitucionStore().content_trabajos_dirigidos,
      title_instituto_de_investigacion:
        useInstitucionStore().title_instituto_de_investigacion,
      content_instituto_de_investigacion:
        useInstitucionStore().content_instituto_de_investigacion,
      documento: null,
      colection: null,
      layout: 1,

      //projecto detail header
      pretitle: useInstitucionStore().institucion.institucion_nombre,
      title: " ",

      //projecto instroduccion
      title_introduccion: "",
      content_introduccion: "",
      carrera: useInstitucionStore().institucion.institucion_nombre,
    };
  },
  methods: {
    setFoto() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.img_about = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    },
    setColor() {
      if (Object.keys(this.carrera_colores).length != 0) {
        if (process.client) {
          // Verifica si el código se está ejecutando en el lado del cliente
          document.documentElement.style.setProperty(
            "--color-primario",
            this.carrera_colores[0].color_primario
          );
          document.documentElement.style.setProperty(
            "--color-secundario",
            this.carrera_colores[0].color_primario
          );
          document.documentElement.style.setProperty(
            "--color-terciario",
            this.carrera_colores[0].color_secundario
          );
        }
      }
    },
    getInstitucion() {
      switch (this.$route.params.institucion) {
        case "calendarioacademico":
          this.title = "Calendario Academico";
          this.title_introduccion = this.title_calendario_academico;
          this.content_introduccion = this.content_calendario_academico;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("CALENDARIO")
          );
          this.layout = 1;
          break;
        case "horarios":
          this.title = "Horario Academico";
          this.title_introduccion = this.title_horario_academico;
          this.content_introduccion = this.content_horario_academico;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("HORARIO")
          );
          this.layout = 1;
          break;
        case "plandeestudios":
          this.title = "Plan De Estudios";
          this.title_introduccion = this.title_plan_de_estudio;
          this.content_introduccion = this.content_plan_de_estudio;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("PLAN")
          );
          this.layout = 1;
          break;
        case "reglamentomodgraduacion":
          this.title = "Reglamento y mod. de Graduacion";
          this.title_introduccion = this.title_reglamento_mod_graduacion;
          this.content_introduccion = this.content_reglamento_mod_graduacion;
          this.documento = null;
          this.layout = 1;
          break;
        case "convenios":
          this.title = "Convenios Institucionales";
          this.title_introduccion = this.title_convenios_institucionales;
          this.content_introduccion = this.content_convenios_institucionales;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("CONVENIO")
          );
          this.layout = 2;
          break;
        case "pasantias":
          this.title = "Pasantias de la Carrera";
          this.title_introduccion = this.title_pasantias;
          this.content_introduccion = this.content_pasantias;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("PASANTIA")
          );
          this.layout = 2;
          break;
        case "trabajosdirigidos":
          this.title = "Trabajos Dirigidos";
          this.title_introduccion = this.title_trabajos_dirigidos;
          this.content_introduccion = this.content_trabajos_dirigidos;
          this.documento = useInstitucionStore().carrera_gacetas.filter((e) =>
            e.gaceta_titulo.includes("TRABAJO DIRIGIDO")
          );
          this.layout = 2;
          break;
        case "institutodeinvestigacion":
          this.title = "Instituto De Investigacion";
          this.title_introduccion = this.title_instituto_de_investigacion;
          this.content_introduccion = this.content_instituto_de_investigacion;
          this.documento = useInstitucionStore().carrera_gacetas.filter(
            (e) => e.gaceta_tipo === "DICyT"
          );
          this.colection = useInstitucionStore().carrera_publicaciones.filter(
            (e) => e.publicaciones_tipo === "INSTITUTO DE INVESTIGACIÓN"
          );
          this.layout = 2;
          break;
        default:
          break;
      }
    },
    createdComponent() {
      this.getInstitucion();
      this.setFoto();
      this.setColor();
    },
  },
  created() {
    this.createdComponent();
    console.log("DOCUMENTO GET", this.documento);
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
        //logo.setAttribute("src", "/img/logo-dark.png");
      } else {
        navbar.classList.remove("nav-scroll");
        //logo.setAttribute("src", "/img/logo-light.png");
      }
    });
  },
};
</script>

<style scoped></style>
