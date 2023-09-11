<template>
  <section
    :class="`${
      grid ? (grid === 3 ? 'three-column' : null) : null
    } portfolio section-padding pb-70`"
  >
    <div v-if="!hideFilter" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">{{ carrera }}</h6>
            <h3 class="wow color-font">
              {{ title }}
            </h3>
            <p>{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-if="documentos != 0" class="gallery full-width">
          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items graphic wow fadeInUp`"
            data-wow-delay=".4s"
            v-for="(documento, documento_id) in documentos"
            :key="documento_id"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                :to="{
                  path: '/ConvocatoriasDetalle/gacetas',
                  query: { id: encryptID(documento.gaceta_id) },
                }"
              >
                <client-only
                  v-if="
                    tipo == 'convenios' ||
                    tipo == 'pasantias' ||
                    tipo == 'trabajosdirigidos' ||
                    (tipo == 'institutodeinvestigacion' && documento != 0)
                  "
                >
                  <pdf-embed
                    :source="url_api + '/Gaceta/' + documento.gaceta_documento"
                    :page="1"
                  />
                </client-only>
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>{{ documento.gaceta_titulo }}</h6>
              <a
                target="_blank"
                :href="url_api + '/Gaceta/' + documento.gaceta_documento"
                class="butn bord curve mt-30"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
        <div v-if="colection != 0" class="gallery full-width">
          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items graphic wow fadeInUp`"
            data-wow-delay=".4s"
            v-for="(publicacion, publicacion_id) in colection"
            :key="publicacion_id"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                :to="{
                  path: '/ConvocatoriasDetalle/publicaciones',
                  query: { id: encryptID(publicacion.publicaciones_id) },
                }"
              >
                <img
                  v-if="tipo == 'institutodeinvestigacion'"
                  :src="
                    url_api +
                    '/Publicaciones/' +
                    publicacion.publicaciones_imagen
                  "
                  alt=""
                />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6 v-if="tipo == 'institutodeinvestigacion'">
                {{ publicacion.publicaciones_titulo }}
              </h6>
            </div>
          </div>
        </div>
        <h3
          style="
            text-align: center;
            margin: 100px 0px;
            width: 100%;
            color: var(--color-secundario);
          "
          v-if="documentos == 0 && colection == 0"
        >
          No hay Registros
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
import CryptoJS from "crypto-js";

export default {
  props: [
    "grid",
    "filterPosition",
    "hideFilter",
    "title",
    "content",
    "carrera",
    "documentos",
    "tipo",
    "colection",
  ],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
    };
  },
  created() {
    console.log("documentos", this.documentos);
  },
  methods: {
    encryptID(id) {
      const encryptionKey = "UniversidadPublicaDeElAlto"; // Cambia esto por tu clave de encriptación
      const ciphertext = CryptoJS.AES.encrypt(
        id.toString(),
        encryptionKey
      ).toString();
      return ciphertext;
    },
  },
  mounted() {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  },
};
</script>

<style scoped></style>
