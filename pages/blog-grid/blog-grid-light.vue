<template>
  <div>
    <div class="circle-bg">
      <div class="circle-color fixed">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
    <Navbar ref="navbar" theme="light" />
    <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
    <BlogGrid />
    <Footer />
  </div>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
  layout: 'light',
  data() {
    return {
        url_api : process.env.APP_ROOT_API,
        carrera_titulo: useInstitucionStore().institucion.institucion_nombre,
        institucion_logo : useInstitucionStore().institucion.institucion_logo,
        colection: null,
        message: 'No hay Registros...',
        carrera_colores : useInstitucionStore().institucion.colorinstitucion,
    }
  },
  head() {
    return {
      titleTemplate: '%s - Blog-Grid Light'
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>