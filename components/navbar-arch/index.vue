<template>
  <nav class="navbar navbar-expand-lg" :ref="nr">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img
          ref="lr"
          :src="url_api + '/InstitucionUpea/' + carrera_logo"
          v-if="theme === 'light'"
          alt="logo"
        />
        <img
          ref="lr"
          :src="url_api + '/InstitucionUpea/' + carrera_logo"
          v-else-if="theme === 'themeD'"
          alt="logo"
        />
        <img
          ref="lr"
          :src="url_api + '/InstitucionUpea/' + carrera_logo"
          v-else
          alt="logo"
        />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        @click="handleMobileDropdown"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/"> Inicio </NuxtLink>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Nosotros
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/about/about-light">
                Mision y Vision
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/contact/contact-light">
                Contacto
              </NuxtLink>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Convocatorias y Cursos
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/convocatorias/convocatorias">
                Convocatorias
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/comunicados">
                Comunicados
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/avisos">
                Avisos
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/cursos">
                Cursos
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/seminarios">
                Seminarios
              </NuxtLink>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Academia
            </span>
            <div class="dropdown-menu">
              <NuxtLink
                class="dropdown-item"
                to="/institucion/calendarioacademico"
              >
                Calendario Academico
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/institucion/horarios">
                Horarios
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/institucion/plandeestudios">
                Plan de Estudio
              </NuxtLink>
              <NuxtLink
                class="dropdown-item"
                to="/institucion/reglamentomodgraduacion"
              >
                Reglamento Mod. Graduacion
              </NuxtLink>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Institucion
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/institucion/convenios">
                Convenios Institucionales
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/institucion/pasantias">
                Pasantias
              </NuxtLink>
              <NuxtLink
                class="dropdown-item"
                to="/institucion/trabajosdirigidos"
              >
                Trabajos Dirigidos
              </NuxtLink>
              <NuxtLink
                class="dropdown-item"
                to="/institucion/institutodeinvestigacion"
              >
                Instituto de Investigacion.
              </NuxtLink>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Mas
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/convocatorias/servicios">
                Servicios
              </NuxtLink>
              <NuxtLink
                class="dropdown-item"
                to="/convocatorias/ofertasacademicas"
              >
                Ofertas Academicas
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/publicaciones">
                Publicaciones
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/gacetas">
                Gacetas
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/eventos">
                Eventos
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/videos">
                Videos
              </NuxtLink>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
            v-if="
              Object.keys(carrera_links.filter((e) => e.ei_tipo == 'KARDEX'))
                .length != 0
            "
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Virtual
            </span>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                target="_blank"
                :href="link.ei_link"
                v-for="(link, id_link) in carrera_links.filter(
                  (e) => e.ei_tipo == 'KARDEX'
                )"
                :key="id_link"
              >
                {{ link.ei_nombre ? link.ei_nombre : "Sin Links" }}
              </a>
            </div>
          </li>

          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
            v-if="
              Object.keys(
                carrera_links.filter((e) => e.ei_tipo == 'BIBLIOTECA')
              ).length != 0
            "
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Biblioteca
            </span>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                target="_blank"
                :href="link.ei_link"
                v-for="(link, id_link) in carrera_links.filter(
                  (e) => e.ei_tipo == 'BIBLIOTECA'
                )"
                :key="id_link"
              >
                {{ link.ei_nombre }}
              </a>
            </div>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#contact'"> Contact </a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
/* importacion del store de manera global desde pinia */
import { useInstitucionStore } from "@/store/store";

import getSiblings from "../../common/getSiblings";
export default {
  props: ["lr", "theme", "nr"],
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      carrera_logo: useInstitucionStore().institucion.institucion_logo,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_links: useInstitucionStore().carrera_links_externos,
    };
  },
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
          item.classList.remove("show");
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[2]) {
            item.childNodes[2].classList.remove("show");
          }
        });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    },
  },
};
</script>

<style scoped></style>
