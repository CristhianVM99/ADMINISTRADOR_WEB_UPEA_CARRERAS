<template>
    <section
      :class="`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio section-padding pb-70`"
    >      
      <div class="container">
        <div class="row">          
          <div v-if="documentos !=0" class="gallery full-width">
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/convocatorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>CONVOCATORIAS</h6>    
                <nuxtLink to="/convocatorias/convocatorias" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>   
            
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/comunicados.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>COMUNICADOS</h6>    
                <nuxtLink to="/convocatorias/comunicados" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/avisos.png" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>AVISOS</h6>    
                <nuxtLink to="/convocatorias/avisos" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/cursos.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>CURSOS</h6>    
                <nuxtLink to="/convocatorias/cursos" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div> 
            
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/seminarios.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>SEMINARIOS</h6>    
                <nuxtLink to="/convocatorias/seminarios" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/servicios.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>SERVICIOS</h6>    
                <nuxtLink to="/convocatorias/servicios" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/ofertasacademicas.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Ofertas Academicas</h6>    
                <nuxtLink to="/convocatorias/ofertasacademicas" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/publicaciones.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>PUBLICACIONES</h6>    
                <nuxtLink to="/convocatorias/publicaciones" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/gacetas.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>GACETAS</h6>    
                <nuxtLink to="/convocatorias/gacetas" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div> 
            
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/eventos.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>EVENTOS</h6>    
                <nuxtLink to="/convocatorias/eventos" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/videos.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>VIDEOS</h6>    
                <nuxtLink to="/convocatorias/videos" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/trabajosdirigidos.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>TRABAJOS DIRIGIDOS</h6>    
                <nuxtLink to="/institucion/trabajosdirigidos" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>  

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/pasantias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>PASANTIAS</h6>    
                <nuxtLink to="/institucion/pasantias" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/project-details2/project-details2-dark"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/convenios.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>CONVENIOS INSTITUCIONALES</h6>    
                <nuxtLink to="/institucion/convenios" class="butn bord curve mt-30">
                Ver Mas
              </nuxtLink>
              </div>              
            </div>            
          </div>
          <h3 style="text-align: center; margin: 100px 0px;width: 100%;" v-if="( documentos == 0)">No hay Registros</h3> 
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import initIsotope from "../../common/initIsotope";
  
  export default {
    props: ["grid", "filterPosition", "hideFilter","title","content","carrera","documentos"],
    mounted() {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    },
  };
  </script>
  
  <style scoped>
  </style>