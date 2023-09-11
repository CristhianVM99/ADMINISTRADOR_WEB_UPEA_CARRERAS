<template>
  <section class="blog section-padding sub-bg">
    <!-- CONVOCATORIAS -->
    <div class="container" v-if="tipo == 'convocatorias'">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">
              {{ pretitle_convocatorias }}
            </h6>
            <h3 class="wow color-font">{{ title_convocatorias }}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4"
          v-for="conv in carrera_convocatorias.slice(0, 1)"
          :key="encryptID(conv.idconvocatorias)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div class="img">
              <NuxtLink
                :to="{
                  path: '/ConvocatoriasDetalle/convocatorias',
                  query: { id: encryptID(conv.idconvocatorias) },
                }"
                class="date"
              >
                <img
                  class="img-style"
                  :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                  :alt="conv.con_titulo"
                />
              </NuxtLink>
              <!-- 1000x560-->
            </div>
            <div class="cont">
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
                <div class="btn-more">
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
        <div
          class="col-lg-4"
          v-for="com in carrera_comunicados.slice(0, 1)"
          :key="encryptID(com.idconvocatorias)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
            <div class="img">
              <NuxtLink
                :to="{
                  path: '/ConvocatoriasDetalle/comunicados',
                  query: { id: encryptID(com.idconvocatorias) },
                }"
                class="date"
              >
                <img
                  class="img-style"
                  :src="url_api + '/Convocatorias/' + com.con_foto_portada"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div class="cont">
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
                <div class="btn-more">
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
        <div
          class="col-lg-4"
          v-for="avi in carrera_avisos.slice(0, 1)"
          :key="encryptID(avi.idconvocatorias)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
            <div class="img">
              <NuxtLink
                :to="{
                  path: '/ConvocatoriasDetalle/avisos',
                  query: { id: encryptID(avi.idconvocatorias) },
                }"
                class="date"
              >
                <img
                  class="img-style"
                  style=""
                  :src="url_api + '/Convocatorias/' + avi.con_foto_portada"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div class="cont">
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
                <div class="btn-more">
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

    <!-- CURSOS -->
    <div class="container" v-if="tipo == 'cursos'">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">
              {{ pretitle_cursos }}
            </h6>
            <h3 class="wow color-font">{{ title_cursos }}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div
          class="col-lg-4"
          v-for="cur in carrera_cursos.slice(0, 1)"
          :key="encryptID(cur.iddetalle_cursos_academicos)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div class="img">
              <NuxtLink
                :to="{
                  path: '/ConvocatoriasDetalle/cursos',
                  query: { id: encryptID(cur.iddetalle_cursos_academicos) },
                }"
                class="date"
              >
                <img
                  class="img-style"
                  :src="url_api + '/Cursos/' + cur.det_img_portada"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div class="cont">
              <div>
                <div class="info">
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/cursos',
                      query: { id: encryptID(cur.iddetalle_cursos_academicos) },
                    }"
                    class="date"
                  >
                    <span>{{ convertirFecha(cur.det_fecha_ini) }}</span>
                  </NuxtLink>
                  <span>/</span>
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/cursos',
                      query: { id: encryptID(cur.iddetalle_cursos_academicos) },
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
                      query: { id: encryptID(cur.iddetalle_cursos_academicos) },
                    }"
                  >
                    {{ cur.det_titulo }}
                  </NuxtLink>
                </h5>
                <div class="btn-more">
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/cursos',
                      query: { id: encryptID(cur.iddetalle_cursos_academicos) },
                    }"
                    class="simple-btn btn_color"
                  >
                    Mas detalles
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4"
          v-for="sem in carrera_seminarios.slice(0, 1)"
          :key="encryptID(sem.iddetalle_cursos_academicos)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
            <div class="img">
              <NuxtLink
                :to="{
                  path: '/ConvocatoriasDetalle/seminarios',
                  query: { id: encryptID(sem.iddetalle_cursos_academicos) },
                }"
                class="date"
              >
                <img
                  class="img-style"
                  :src="url_api + '/Cursos/' + sem.det_img_portada"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div class="cont">
              <div>
                <div class="info">
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/seminarios',
                      query: { id: encryptID(sem.iddetalle_cursos_academicos) },
                    }"
                    class="date"
                  >
                    <span>{{ convertirFecha(sem.det_fecha_ini) }}</span>
                  </NuxtLink>
                  <span>/</span>
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/seminarios',
                      query: { id: encryptID(sem.iddetalle_cursos_academicos) },
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
                      query: { id: encryptID(sem.iddetalle_cursos_academicos) },
                    }"
                  >
                    {{ sem.det_titulo }}
                  </NuxtLink>
                </h5>
                <div class="btn-more">
                  <NuxtLink
                    :to="{
                      path: '/ConvocatoriasDetalle/seminarios',
                      query: { id: encryptID(sem.iddetalle_cursos_academicos) },
                    }"
                    class="simple-btn btn_color"
                  >
                    Mas detalles
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>

    <!-- AUTORIDADES -->
    <div class="container" v-if="tipo == 'autoridades'">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">
              {{ pretitle_autoridades }}
            </h6>
            <h3 class="wow color-font">{{ title_autoridades }}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4"
          v-for="aut in institucion.autoridad"
          :key="encryptID(aut.id_autoridad)"
        >
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div class="img">
              <img
                class="img-style"
                :src="
                  url_api + '/InstitucionUpea/Autoridad/' + aut.foto_autoridad
                "
                :alt="aut.nombre_autoridad"
              />
            </div>
            <div class="cont">
              <div>
                <div class="info">
                  <NuxtLink exact to="/" class="date">
                    <span>{{ institucion.institucion_iniciales }}</span>
                  </NuxtLink>
                  <span>/</span>
                  <NuxtLink exact to="/" class="tag">
                    <span>{{ aut.cargo_autoridad }}</span>
                  </NuxtLink>
                </div>
                <h5>
                  <NuxtLink exact to="/">
                    {{ aut.nombre_autoridad }}
                  </NuxtLink>
                </h5>
                <div class="btn-more">
                  <a
                    target="_blank"
                    :href="aut.facebook_autoridad"
                    class="simple-btn btn_facebook"
                  >
                    Facebook
                  </a>
                  <a
                    target="_blank"
                    :href="aut.celular_autoridad"
                    class="simple-btn btn_whatsapp"
                  >
                    WhatsaApp
                  </a>
                  <a
                    target="_blank"
                    :href="aut.twiter_autoridad"
                    class="simple-btn btn_twitter"
                  >
                    Twitter
                  </a>
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
import CryptoJS from "crypto-js";
import { useInstitucionStore } from "@/store/store";
export default {
  props: ["tipo"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
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
  },
};
</script>

<style scoped>
.img-style {
  width: 100%;
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
</style>
