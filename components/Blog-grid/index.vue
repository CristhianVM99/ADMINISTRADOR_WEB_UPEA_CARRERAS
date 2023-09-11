<template>
  <section class="blog-pg blog section-padding pt-0">
    <div class="container">
      <div class="posts">
        <div class="row" v-if="tipo == 'convocatorias'">
          <div
            v-for="conv in colection"
            class="col-lg-4"
            :key="encryptID(conv.idconvocatorias)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(conv.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
                    :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                    alt=""
                  />
                </NuxtLink>
                <!-- 1000 x 560 -->
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(conv.con_fecha_inicio) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                    >
                      {{ conv.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(conv.idconvocatorias) },
                      }"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'avisos'">
          <div
            v-for="avi in colection"
            :key="encryptID(avi.idconvocatorias)"
            class="col-lg-4"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(avi.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(avi.con_fecha_inicio) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                    >
                      {{ avi.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(avi.idconvocatorias) },
                      }"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'comunicados'">
          <div
            v-for="com in colection"
            :key="encryptID(com.idconvocatorias)"
            class="col-lg-4"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(com.idconvocatorias) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(com.con_fecha_inicio) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                    >
                      {{ com.con_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(com.idconvocatorias) },
                      }"
                    >
                      Mas Detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'cursos'">
          <div
            class="col-lg-4"
            v-for="cur in colection"
            :key="encryptID(cur.iddetalle_cursos_academicos)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: {
                      id: encryptID(cur.iddetalle_cursos_academicos),
                    },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(cur.det_fecha_ini) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                      class="tag"
                    >
                      <span>{{
                        cur.tipo_curso_otro.tipo_conv_curso_nombre
                      }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      {{ cur.det_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(cur.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'seminarios'">
          <div
            v-for="sem in colection"
            class="col-lg-4"
            :key="encryptID(sem.iddetalle_cursos_academicos)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: {
                      id: encryptID(sem.iddetalle_cursos_academicos),
                    },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
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
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(sem.det_fecha_ini) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                      class="tag"
                    >
                      <span>{{
                        sem.tipo_curso_otro.tipo_conv_curso_nombre
                      }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      {{ sem.det_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: {
                          id: encryptID(sem.iddetalle_cursos_academicos),
                        },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'servicios'">
          <div
            v-for="serv in colection"
            class="col-lg-4"
            :key="encryptID(serv.serv_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(serv.serv_id) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
                    :src="url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(serv.serv_id) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(serv.serv_registro) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(serv.serv_id) },
                      }"
                      class="tag"
                    >
                      <span>Servicios</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(serv.serv_id) },
                      }"
                    >
                      {{ serv.serv_nombre }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(serv.serv_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'ofertasacademicas'">
          <div
            v-for="ofer in colection"
            class="col-lg-4"
            :key="encryptID(ofer.ofertas_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(ofer.ofertas_id) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
                    :src="
                      url_api +
                      '/Carrera/OfertasAcademicas/' +
                      ofer.ofertas_imagen
                    "
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ofer.ofertas_id) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(ofer.ofertas_inscripciones_ini) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ofer.ofertas_id) },
                      }"
                      class="tag"
                    >
                      <span>Ofertas</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ofer.ofertas_id) },
                      }"
                    >
                      {{ ofer.ofertas_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ofer.ofertas_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'publicaciones'">
          <div
            v-for="pub in colection"
            class="col-lg-4"
            :key="encryptID(pub.publicaciones_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(pub.publicaciones_id) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
                    :src="
                      url_api + '/Publicaciones/' + pub.publicaciones_imagen
                    "
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(pub.publicaciones_id) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ pub.publicaciones_fecha }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(pub.publicaciones_id) },
                      }"
                      class="tag"
                    >
                      <span>Publicaciones</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(pub.publicaciones_id) },
                      }"
                    >
                      {{ pub.publicaciones_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(pub.publicaciones_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'gacetas'">
          <div
            v-for="gac in colection"
            class="col-lg-4"
            :key="encryptID(gac.gaceta_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(gac.gaceta_id) },
                  }"
                  class="date"
                >
                  <client-only>
                    <pdf-embed
                      :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                      :page="1"
                    />
                  </client-only>
                </NuxtLink>
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(gac.gaceta_id) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ convertirFecha(gac.gaceta_fecha) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(gac.gaceta_id) },
                      }"
                      class="tag"
                    >
                      <span>Gacetas</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(gac.gaceta_id) },
                      }"
                    >
                      {{ gac.gaceta_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(gac.gaceta_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'eventos'">
          <div
            v-for="ev in colection"
            class="col-lg-4"
            :key="encryptID(ev.evento_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <NuxtLink
                  :to="{
                    path: '/ConvocatoriasDetalle/' + tipo,
                    query: { id: encryptID(ev.evento_id) },
                  }"
                  class="date"
                >
                  <img
                    class="img_convocatorias"
                    :src="url_api + '/Eventos/' + ev.evento_imagen"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ev.evento_id) },
                      }"
                      class="date"
                    >
                      <span>
                        {{ ev.evento_fecha }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ev.evento_id) },
                      }"
                      class="tag"
                    >
                      <span>Eventos</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ev.evento_id) },
                      }"
                    >
                      {{ ev.evento_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(ev.evento_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
        <div class="row" v-if="tipo == 'videos'">
          <div
            v-for="vid in colection"
            class="col-lg-4"
            :key="encryptID(vid.video_id)"
          >
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <iframe
                  :src="vid.video_enlace"
                  frameborder="0"
                  style="border-radius: 5px; width: 100%; height: 560px"
                  class="video_convocatorias"
                />
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(vid.video_id) },
                      }"
                      class="date"
                    >
                      <span> fecha </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(vid.video_id) },
                      }"
                      class="tag"
                    >
                      <span>Videos</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(vid.video_id) },
                      }"
                    >
                      {{ vid.video_titulo }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn btn_color"
                      :to="{
                        path: '/ConvocatoriasDetalle/' + tipo,
                        query: { id: encryptID(vid.video_id) },
                      }"
                    >
                      Mas detalles
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>-->
        </div>
      </div>
    </div>
    <!--<div class="container" v-if="(tipo == 'default')">
      <div class="posts">
        <div class="row">
          <div v-for="blogItem in blogs" class="col-lg-4" :key="blogItem.id">
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <img :src="blogItem.image" alt="" />
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink to="/blog-details/blog-details-dark" class="date">
                      <span>
                        <i>{{ blogItem.date.day }}</i>
                        {{ blogItem.date.month }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      v-for="(tag, index) in blogItem.tags"
                      :key="index"
                      to="#0"
                      class="tag"
                    >
                      <span>{{ tag }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink to="/blog-details/blog-details-dark">
                      {{ blogItem.title.substr(0, 55) + "..." }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn"
                      to="/blog-details/blog-details-dark"
                    >
                      Read More
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>-->
  </section>
</template>

<script>
import CryptoJS from "crypto-js";
import blogs from "../../data/blogs3.json";
export default {
  props: ["tipo", "colection"],
  data() {
    return {
      blogs,
      url_api: process.env.APP_ROOT_API,
    };
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
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    },
  },
};
</script>

<style scoped>
.img_convocatorias {
  height: 560px;
  object-fit: cover;
}
.video_convocatorias {
  width: 100%;
  height: 560px;
}

.btn_color {
  background: var(--color-secundario);
  border-radius: 5px;
  transition: 0.5s color;
}
.btn_color:hover {
  color: #fff !important;
}
</style>
