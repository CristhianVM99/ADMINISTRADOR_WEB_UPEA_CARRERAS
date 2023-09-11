<template>
  <section class="blog-list section-padding sub-bg">
    <div class="">
      <div v-if="tipo == 'convocatorias'" class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">
              {{ pretitle_convocatorias }}
            </h6>
            <h3 class="wow color-font">{{ title_convocatorias }}</h3>
          </div>
        </div>
      </div>

      <div v-if="tipo == 'cursos'" class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">
              {{ pretitle_cursos }}
            </h6>
            <h3 class="wow color-font">{{ title_cursos }}</h3>
          </div>
        </div>
      </div>

      <!-- convocatorias -->
      <div v-if="tipo == 'convocatorias'" class="row">
        <!-- <div class="col-lg-5">
          <div class="head md-mb50">
            <h6 class="back-color" style="color:#fff;">{{ pretitle_convocatorias }}</h6>
            <h3>Convocatorias</h3>
            <p>
              {{ content }} {{ institucion_nombre }}
            </p>
            <NuxtLink to="/convocatorias/convocatorias" >
              <span>Ver mas</span>
            </NuxtLink>
          </div>
        </div> -->

        <div class="blog1 col-lg-12">
          <div class="col-lg-6 offset-lg-1 conv_blog3">
            <div
              class="item wow fadeInUp"
              data-wow-delay=".3s"
              v-for="conv in carrera_convocatorias.slice(0, 1)"
              :key="encryptID(conv.idconvocatorias)"
            >
              <div class="img valign">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/convocatorias',
                    query: { id: encryptID(conv.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_conv"
                    :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                    :alt="conv.con_titulo"
                  />
                </NuxtLink>
              </div>
              <div class="cont valign">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/convocatorias',
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>{{ convertirFecha(conv.con_fecha_inicio) }}</span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/convocatorias',
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                      class="tag"
                    >
                      <span>{{
                        conv.tipo_conv_comun.tipo_conv_comun_titulo
                      }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/convocatorias',
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                    >
                      {{ conv.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more" style="margin-top: 30px">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/convocatorias',
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                      class="simple-btn btn_color"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog2 col-lg-12">
          <div class="col-lg-6 offset-lg-1 conv_blog3">
            <div
              class="item wow fadeInUp"
              data-wow-delay=".5s"
              v-for="com in carrera_comunicados.slice(0, 1)"
              :key="encryptID(com.idconvocatorias)"
            >
              <div class="img valign">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/comunicados',
                    query: { id: encryptID(com.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_conv"
                    :src="url_api + '/Convocatorias/' + com.con_foto_portada"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont valign">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/comunicados',
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>{{ convertirFecha(com.con_fecha_inicio) }}</span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/comunicados',
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                      class="tag"
                    >
                      <span>{{
                        com.tipo_conv_comun.tipo_conv_comun_titulo
                      }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/comunicados',
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                    >
                      {{ com.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more" style="margin-top: 30px">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/comunicados',
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                      class="simple-btn btn_color"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog3 col-lg-12">
          <div class="col-lg-6 offset-lg-1 conv_blog3">
            <div
              class="item wow fadeInUp"
              data-wow-delay=".3s"
              v-for="avi in carrera_avisos.slice(0, 1)"
              :key="encryptID(avi.idconvocatorias)"
            >
              <div class="img valign">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/avisos',
                    query: { id: encryptID(avi.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_conv"
                    :src="url_api + '/Convocatorias/' + avi.con_foto_portada"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont valign">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/avisos',
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>{{ convertirFecha(avi.con_fecha_inicio) }}</span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/avisos',
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                      class="tag"
                    >
                      <span>{{
                        avi.tipo_conv_comun.tipo_conv_comun_titulo
                      }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/avisos',
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                    >
                      {{ avi.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more" style="margin-top: 30px">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/avisos',
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                      class="simple-btn btn_color"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- cursos -->
      <div v-if="tipo == 'cursos'" class="row">
        <div class="blog4 col-lg-12">
          <div class="col-lg-6 offset-lg-1 conv_blog3">
            <div
              class="item wow fadeInUp"
              data-wow-delay=".3s"
              v-for="cur in carrera_cursos.slice(0, 1)"
              :key="encryptID(cur.iddetalle_cursos_academicos)"
            >
              <div class="img valign">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/cursos',
                    query: { id: encryptID(cur.iddetalle_cursos_academicos) },
                  }"
                  class="date"
                >
                  <img
                    class="img_conv"
                    :src="url_api + '/Cursos/' + cur.det_img_portada"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont valign">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/cursos',
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                      class="date"
                    >
                      <span>{{ convertirFecha(cur.det_fecha_ini) }}</span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/cursos',
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                      class="tag"
                    >
                      <span>Cursos</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/cursos',
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      {{ cur.det_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more" style="margin-top: 30px">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/cursos',
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                      class="simple-btn btn_color"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog5 col-lg-12">
          <div class="col-lg-6 offset-lg-1 conv_blog3">
            <div
              class="item wow fadeInUp"
              data-wow-delay=".5s"
              v-for="sem in carrera_seminarios.slice(0, 1)"
              :key="encryptID(sem.iddetalle_cursos_academicos)"
            >
              <div class="img valign">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/seminarios',
                    query: { id: encryptID(sem.iddetalle_cursos_academicos) },
                  }"
                  class="date"
                >
                  <img
                    class="img_conv"
                    :src="url_api + '/Cursos/' + sem.det_img_portada"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont valign">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/seminarios',
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                      class="date"
                    >
                      <span>{{ convertirFecha(sem.det_fecha_ini) }}</span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/seminarios',
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                      class="tag"
                    >
                      <span>Seminarios</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/seminarios',
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      {{ sem.det_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more" style="margin-top: 30px">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/seminarios',
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                      class="simple-btn btn_color"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* importacion de la libreria para encyptacion */
import CryptoJS from "crypto-js";

/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

export default {
  props: ["tipo"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      institucion_nombre: useInstitucionStore().institucion.institucion_nombre,
      content: useInstitucionStore().content_convocatorias,
      institucion: useInstitucionStore().institucion,
      pretitle_convocatorias: useInstitucionStore().pretitle_convocatorias,
      pretitle_cursos: useInstitucionStore().pretitle_cursos,
      pretitle_autoridades: useInstitucionStore().pretitle_autoridades,
      title_convocatorias: useInstitucionStore().title_convocatorias,
      title_cursos: useInstitucionStore().title_cursos,
      title_autoridades: useInstitucionStore().title_autoridades,
      carrera_convocatorias: useInstitucionStore().carrera_convocatorias,
      carrera_comunicados: useInstitucionStore().carrera_comunicados,
      carrera_avisos: useInstitucionStore().carrera_avisos,
      carrera_cursos: useInstitucionStore().carrera_cursos,
      carrera_seminarios: useInstitucionStore().carrera_seminarios,
      img_about: "/img/universidad/about.jpg",
      foto: useInstitucionStore().fotosPagina[4],
    };
  },
  methods: {
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    },
    encryptID(id) {
      const encryptionKey = "UniversidadPublicaDeElAlto"; // Cambia esto por tu clave de encriptación
      const ciphertext = CryptoJS.AES.encrypt(
        id.toString(),
        encryptionKey
      ).toString();
      return ciphertext;
    },
    setFoto() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.img_about = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    },
    createdComponent() {
      this.setFoto();
    },
  },
  created() {
    this.createdComponent();
  },
};
</script>

<style scoped>
.img_conv {
  width: 350px;
  height: 560px;
  object-fit: cover;
}
.btn_facebook {
  background: #3b5998;
  border-radius: 5px;
  transition: 0.5s color;
}
.btn_whatsapp {
  background: #25d366;
  border-radius: 5px;
  transition: 0.5s color;
}
.btn_twitter {
  background: #1da1f2;
  border-radius: 5px;
  transition: 0.5s color;
}
.btn_color {
  background: var(--color-secundario);
  border-radius: 5px;
  transition: 0.5s color;
}
.btn_color:hover,
.btn_facebook:hover,
.btn_whatsapp:hover,
.btn_twitter:hover {
  color: #fff !important;
}
.blog1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
}
.blog2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.blog3 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.blog4 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.blog5 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
