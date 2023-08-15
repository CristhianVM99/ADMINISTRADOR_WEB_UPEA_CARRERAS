<template>
  <section class="blog-pg single section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="post" v-if="tipo == 'convocatorias' || tipo == 'comunicados' || tipo == 'avisos'">
            <div class="img">
              <img :src="url_api + '/Convocatorias/' + colection[0].con_foto_portada" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].con_titulo }}
                    </h2>
                    <div class="spacial" v-html="colection[0].con_descripcion">                      
                    </div>
                    <p>
                      Fecha de Inicio : {{ convertirFecha(colection[0].con_fecha_inicio) }}<br>
                      Fecha de Final : {{ convertirFecha(colection[0].con_fecha_fin) }}
                    </p>

                    <!--<h6>- We all intend to plan ahead.</h6>

                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>

                    <ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'cursos' || tipo == 'seminarios'">
            <div class="img">
              <img :src="url_api + '/Cursos/' + colection[0].det_img_portada" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].det_titulo }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].det_descripcion">                      
                    </div>
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de Inicio : {{ convertirFecha(colection[0].det_fecha_ini) }}<br>
                      Fecha de Final : {{ convertirFecha(colection[0].det_fecha_fin) }}<br>
                      Grupo de Whatsap : {{ colection[0].det_grupo_whatssap }}<br>
                      Modalidad : {{ colection[0].det_modalidad }}<br>
                      Lugar del Curso : {{ colection[0].det_lugar_curso }}<br>
                      Carga Horaria : {{ colection[0].det_carga_horaria }}<br>                  
                      Cupos del Curso : {{ colection[0].det_cupo_max }}
                    </p>

                    <h6>Costos</h6>

                    <p>
                      Costo Extranjero : {{ colection[0].det_costo_ext }}<br>
                      Costo Profesores : {{ colection[0].det_costo_profe }}<br>
                      Costo Estudiante : {{ colection[0].det_costo }}<br>
                    </p>

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'servicios'">
            <div class="img">
              <img :src="url_api + '/Carrera/Servicios/' + colection[0].serv_imagen" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].serv_nombre }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].serv_descripcion">                      
                    </div>
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de Inicio : {{ convertirFecha(colection[0].serv_registro) }}<br>
                      Fecha de Final : {{ convertirFecha(colection[0].serv_update) }}<br>
                      Numero de Celular : {{ colection[0].serv_nro_celular }}<br>                                        
                    </p>                    

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'ofertasacademicas'">
            <div class="img">
              <img :src="url_api + '/Carrera/OfertasAcademicas/' + colection[0].ofertas_imagen" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].ofertas_titulo }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].ofertas_descripcion">                      
                    </div>
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de Inicio : {{ convertirFecha(colection[0].ofertas_inscripciones_ini) }}<br>
                      Fecha de Final : {{ convertirFecha(colection[0].ofertas_inscripciones_fin) }}<br>
                      Fecha de Examen : {{ convertirFecha(colection[0].ofertas_fecha_examen) }}<br>
                      Referencia : {{ colection[0].ofertas_referencia }}<br>                                        
                    </p>                    

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'publicaciones'">
            <div class="img">
              <img :src="url_api + '/Publicaciones/' + colection[0].publicaciones_imagen" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].publicaciones_titulo }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].publicaciones_descripcion">                      
                    </div>
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de publicacion : {{ convertirFecha(colection[0].publicaciones_fecha) }}<br>
                      Autor : {{ colection[0].publicaciones_autor }}<br>                      
                    </p>                    

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'gacetas'">
            <div class="img">
              <client-only>
                <pdf-embed
                  :source="url_api + '/Gaceta/' + colection[0].gaceta_documento"
                  :page="1"
                />
              </client-only>
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].gaceta_titulo }}
                    </h2>
                    <br>                    
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de Publicacion : {{ convertirFecha(colection[0].gaceta_fecha) }}<br>                      
                    </p>           
                    <a target="_blank" :href="url_api + '/Gaceta/' + colection[0].gaceta_documento" class="butn bord curve mt-30">
                      Descargar PDF
                    </a>         

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'eventos'">
            <div class="img">
              <img :src="url_api + '/Eventos/' + colection[0].evento_imagen" alt="" />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].evento_titulo }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].evento_descripcion">                      
                    </div>
                    <h6>Mas Informacion</h6>
                    <p>
                      Fecha de Actividad : {{ colection[0].evento_fecha }}<br>
                      Hora : {{ colection[0].evento_hora }}<br>
                      Lugar : {{ colection[0].evento_lugar }}<br>                      
                    </p>                    

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
          <div class="post" v-if="tipo == 'videos'">
            <div class="img">
              <iframe
                :src="colection[0].video_enlace"
                frameborder="0"
                style="border-radius: 5px;width: 100%;height: 460px;"
              />
            </div>
            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">                    
                    <h2 class="extra-title">
                      {{ colection[0].video_titulo }}
                    </h2>
                    <br>
                    <h6>Descripcion</h6>
                    <div class="spacial" v-html="colection[0].video_breve_descripcion">                      
                    </div>                                       

                    <!--<ul>
                      <li><span>01</span> Integer in volutpat libero.</li>
                      <li>
                        <span>02</span> Vivamus maximus ultricies pulvinar.
                      </li>
                      <li>
                        <span>03</span> priorities that will pop up in any
                        particular month.
                      </li>
                      <li><span>04</span> We all intend to plan ahead.</li>
                      <li>
                        <span>05</span> The main component of a healthy env for
                        self esteem.
                      </li>
                    </ul>

                    <div class="quotes text-center">
                      <p>
                        Never ever think of giving up. Winners never quit and
                        quitters never win. Take all negative words out of your
                        mental dictionary and focus on the solutions with utmost
                        conviction and patience. The battle is never lost until
                        you've abandon your vision.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-10">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      We all intend to plan ahead, but too often let the
                      day-to-day minutia get in the way of making a calendar for
                      the year. Sure, you can't know every detail to anticipate.
                      Heck, you can't know half the priorities that will pop up
                      in any particular month. But you can plan for big picture
                      seasonality, busy-times, and events.
                    </p>
                    <div class="share-info">
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                      <div class="tags">
                        <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                        <a href="#0">ThemesCamp</a>
                      </div>
                    </div>-->
                  </div>
                  <!--<div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <!--<div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div>

            <div class="comments-area">
              <h5>Comments :</h5>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div class="comment-form">
              <h5>Add Comment :</h5>
              <div class="form">
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <NuxtLink
                          to="#0"
                          :class="`butn ${
                            theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`"
                        >
                          Comment
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["theme",'tipo','colection'],
  data() {
    return {
      url_api : process.env.APP_ROOT_API,      
    }
  },
  methods: {
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    },    
  },  
  created() {
    console.log("registro para"+this.tipo)
    console.log(this.colection)
  },
};
</script>
<style scoped>
</style>