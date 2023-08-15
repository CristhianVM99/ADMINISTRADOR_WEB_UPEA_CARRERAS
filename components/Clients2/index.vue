<template>
  <section class="clients sub-bg pt-50 pb-50">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Upea</h6>
            <h3 class="wow color-font">Links Externos</h3>
             <p>Los links que pertenecen a la carrera de {{ carrera_nombre }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <h3 v-if="Object.keys(carrera_links.filter(e=>e.ei_tipo=='KARDEX')).length==0" style="text-align: center;color: var(--color-secundario);">Sin Registros</h3>
            <div
              v-for="(link,id_link) in carrera_links.filter(e=>e.ei_tipo=='KARDEX')"
              :key="id_link"
              class="col-lg-6 "
            >
              <div class="item no-bord wow fadeIn" data-wow-delay=".3s">
                <span class="link_nombre">{{ link.ei_nombre }}</span>
                <div class="img img_link">                                    
                  <a
                    :href="link.ei_link"
                  >
                    <img v-if="theme === 'light'" :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen" alt="" />
                    <img v-else :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen" alt="" />
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
import { useInstitucionStore } from '@/store/store'
import clientsData from "../../data/clients.json";
export default {
  props: ["theme", "length"],
  data() {
    return {
      clientsData,
      url_api: process.env.APP_ROOT_API,
      clientsData,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_links: useInstitucionStore().carrera_links_externos
    };
  },
};
</script>

<style scoped>
.link_nombre{
  text-align: center;
  background: var(--color-secundario);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px 10px;
  color: #fff;
}
</style>