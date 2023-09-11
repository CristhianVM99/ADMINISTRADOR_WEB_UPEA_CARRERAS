<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6"
          v-if="foto != null && Object.keys(foto).length != 0"
          :style="`background-image: url(${
            url_api + '/InstitucionUpea/Portada/' + foto.portada_imagen
          });background-size:cover; height: '400px'`"
        >
          <!--<div class="form md-mb50">
            <h4 class="fw-700 color-font mb-50">Get In Touch.</h4>

            <form id="contact-form">
              <div class="messages"></div>

              <div class="controls">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>

                <button type="submit" :class="`butn ${theme === 'light' ? 'dark': 'bord'}`">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>-->
        </div>
        <div v-else class="col-lg-6 contacto_bg"></div>
        <div class="col-lg-5 offset-lg-1">
          <div class="cont-info">
            <h4 class="fw-700 color-font mb-50">informacion de Contacto</h4>
            <h3 class="wow" data-splitting>Contactate con nosotros al</h3>
            <div class="item mb-40">
              <h5>celular {{ carrera_celular1 }}</h5>
              <h5>celular {{ carrera_celular2 }}</h5>
              <h5>telefono {{ carrera_telefono1 }}</h5>
              <h5>telefono {{ carrera_telefono2 }}</h5>
              <h5>correo {{ carrera_correo1 }}</h5>
              <h5>correo {{ carrera_correo2 }}</h5>
            </div>
            <h3 class="wow" data-splitting>Visitanos en</h3>
            <div class="item">
              <h6>{{ carrera_direccion }}</h6>
            </div>
            <div class="social mt-50">
              <a :href="carrera_facebook" class="icon" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a :href="carrera_twitter" class="icon" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a :href="carrera_youtube" class="icon" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
              <!--<a to="#0" class="icon">
                <i class="fab fa-pinterest"></i>
              </a>
              <a to="#0" class="icon">
                <i class="fab fa-behance"></i>
              </a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from "@/store/store";
import contentFormData from "../../data/contact-form.json";

export default {
  props: ["theme"],
  async asyncData({ $axios }) {
    if (useInstitucionStore().institucion == null) {
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
    }
  },
  data() {
    return {
      contentFormData,
      url_api: process.env.APP_ROOT_API,
      carrera_celular1: useInstitucionStore().institucion.institucion_celular1,
      carrera_celular2: useInstitucionStore().institucion.institucion_celular2,
      carrera_telefono1:
        useInstitucionStore().institucion.institucion_telefono1,
      carrera_telefono2:
        useInstitucionStore().institucion.institucion_telefono2,
      carrera_correo1: useInstitucionStore().institucion.institucion_correo1,
      carrera_correo2: useInstitucionStore().institucion.institucion_correo2,
      carrera_facebook: useInstitucionStore().institucion.institucion_facebook,
      carrera_youtube: useInstitucionStore().institucion.institucion_youtube,
      carrera_twitter: useInstitucionStore().institucion.institucion_twitter,
      carrera_direccion:
        useInstitucionStore().institucion.institucion_direccion,
      foto: useInstitucionStore().fotosPagina[3],
    };
  },
};
</script>

<style scoped>
.contacto_bg {
  background-image: url(/img/universidad/contact.jpg);
  object-fit: contain;
}
</style>
