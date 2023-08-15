<template>
  <section class="min-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <img
              v-if="tipo == 'reglamentomodgraduacion'"
              class="thumparallax-down"
              :src="img_content"
              alt=""
            />
            <client-only
              v-if="
                tipo == 'calendarioacademico' ||
                tipo == 'horarios' ||
                tipo == 'calendarioacademico' ||
                tipo == 'plandeestudios'
              "
            >
              <pdf-embed
                v-if="Object.keys(documento).length != 0"
                :source="url_api + '/Gaceta/' + documento[0].gaceta_documento"
                :page="1"
              />
            </client-only>
            <h5
              v-if="
                (tipo == 'calendarioacademico' &&
                  Object.keys(documento).length != 0) ||
                (tipo == 'horarios' && Object.keys(documento).length != 0) ||
                (tipo == 'calendarioacademico' &&
                  Object.keys(documento).length != 0) ||
                (tipo == 'plandeestudios' && Object.keys(documento).length != 0)
              "
              style="text-align: center"
            >
              {{ documento[0].gaceta_titulo }}
            </h5>
            <h3
              v-if="documento == 0"
              style="text-align: center; color: var(--color-secundario)"
            >
              No hay Registros
            </h3>
          </div>
        </div>
        <div class="col-lg-6 valign" style="margin: 100px 0px">
          <div class="content">
            <h4 class="color-font">{{ title }}</h4>
            <p
              v-if="
                tipo == 'calendarioacademico' ||
                tipo == 'horarios' ||
                tipo == 'calendarioacademico' ||
                tipo == 'plandeestudios'
              "
              class="wow txt words chars splitting"
              data-splitting
            >
              {{ content }}
            </p>
            <div
              v-if="tipo == 'reglamentomodgraduacion'"
              data-splitting
              v-html="content_reglamento"
              id="content_home"
              :class="{
                'texto-limitado': !mostrarCompleto,
                'texto-completo': mostrarCompleto,
              }"
            ></div>
            <span
              v-if="tipo == 'reglamentomodgraduacion'"
              @click="cambiarTamanoTexto"
              class="butn bord curve mt-30"
            >
              {{ mostrarCompleto ? "Disminuir texto" : "Expandir texto" }}
            </span>
            <ul>
              <li class="wow fadeInUp" data-wow-delay=".2s">
                {{ carrera }}
              </li>
              <!--<li class="wow fadeInUp" data-wow-delay=".4s">
                  We work with some of the most successful businesses.
                </li>-->
            </ul>
            <NuxtLink
              to="/about/about-dark"
              class="butn bord curve mt-40 wow fadeInUp"
              data-wow-delay=".8s"
              v-if="false"
            >
              <span>Ver Mas</span>
            </NuxtLink>
            <a
              v-if="
                (tipo == 'horarios' && Object.keys(documento).length != 0) ||
                (tipo == 'calendarioacademico' &&
                  Object.keys(documento).length != 0) ||
                (tipo == 'plandeestudios' && Object.keys(documento).length != 0)
              "
              target="_blank"
              :href="url_api + '/Gaceta/' + documento[0].gaceta_documento"
              class="butn bord curve mt-30"
            >
              Descargar PDF
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from "@/store/store";
import thumparallaxDown from "../../common/thumparallaxDown";
export default {
  props: ["title", "content", "carrera", "documento", "tipo"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      img_content: "/img/universidad/about.jpg",
      foto: useInstitucionStore().fotosPagina[3],
      content_reglamento:
        useInstitucionStore().institucion.institucion_sobre_ins,
      mostrarCompleto: false,
    };
  },
  methods: {
    cambiarTamanoTexto() {
      this.mostrarCompleto = !this.mostrarCompleto;
      if (!this.mostrarCompleto) {
        const appElement = document.getElementById("content_home");
        appElement.scrollIntoView();
      }
    },
    setFoto() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.img_content = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    },
    createdComponent() {
      this.setFoto();
    },
  },
  created() {
    this.createdComponent();
  },
  mounted() {
    //console.log(Object.keys(this.documento).lenght )
    thumparallaxDown();
  },
};
</script>

<style scoped>
.texto-limitado {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 250px; /* Establece el ancho máximo según tus necesidades */
}

.texto-completo {
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
  max-width: none;
}
</style>
