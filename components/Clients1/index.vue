<template>
  <section class="clients section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 valign md-mb50">
          <div class="sec-head mb-0">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Upea</h6>
            <h3 class="wow mb-20 color-font">Links Externos</h3>
            <p>
              Los links que pertenecen a la carrera de {{ carrera_nombre }}
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div>
            <h3 v-if="Object.keys(carrera_links.filter(e=>e.ei_tipo=='KARDEX')).length==0" style="text-align: center;color: var(--color-secundario);">Sin Registros</h3>
            <!--<div class="row bord">
              <div
                v-for="item in clientsData.slice(0, clientsData.length / 2)"
                :key="item.id"
                class="col-md-3 col-6 brands"
              >
                <div
                  class="item wow fadeIn"
                  :data-wow-delay="`${
                    item.id == 1
                      ? '.3'
                      : item.id == 2
                      ? '.6'
                      : item.id == 3
                      ? '.8'
                      : item.id == 4
                      ? '.3'
                      : ''
                  }s`"
                >
                  <div class="img">
                    <img
                      v-if="theme === 'light'"
                      :src="item.lightImage"
                      alt=""
                    />
                    <img v-else :src="item.darkImage" alt="" />

                    <NuxtLink
                      to="#"
                      class="link words chars splitting"
                      data-splitting
                    >
                      {{ item.url }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>-->
            <div class="row bord">
              <div
              v-for="(link,id_link) in carrera_links.filter(e=>e.ei_tipo=='KARDEX')"
                :key="id_link"
                :class="`${
                  id_link == 5
                    ? 'col-md-3 col-6 brands sm-mb30'
                    : id_link == 6
                    ? 'col-md-3 col-6 brands sm-mb30'
                    : id_link == 7
                    ? 'col-md-3 col-6 brands'
                    : id_link == 8
                    ? 'col-md-3 col-6 brands'
                    : ''
                }`"
              >
                <div
                  class="item wow fadeIn"
                  :data-wow-delay="`${
                    id_link == 1
                      ? '.4'
                      : id_link == 2
                      ? '.7'
                      : id_link == 3
                      ? '.5'
                      : id_link == 4
                      ? '.3'
                      : ''
                  }s`"
                >
                  <div class="img">                  
                    <a
                      :href="link.ei_link"
                      class="link words chars splitting"
                      data-splitting
                      target="_blank"
                    >
                    <img
                      v-if="theme === 'light'"
                      :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen"
                      width="300px"                      
                      alt="client image"
                    />
                    <img v-else style="height: 200px;width:200px;" :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen" alt="client image" />
                    </a>
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
import { useInstitucionStore } from '@/store/store'
import clientsData from "../../data/clients.json";
export default {
  props: ["theme"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      clientsData,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_links: useInstitucionStore().carrera_links_externos
    };
  },
  created(){
  
  }
};
</script>

<style scoped>
</style>