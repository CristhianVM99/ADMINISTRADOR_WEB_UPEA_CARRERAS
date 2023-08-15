<template>
  <header class="pages-header circle-bg valign">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="cont mt-100 mb-50 text-center">
            <h1 class="color-font fw-700">
              <slot name="title"></slot>
            </h1>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="img foto_number">
            <span class="foto_number_content" num_img="4"></span>
            <img :src="imageLink" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="half sub-bg">
      <div class="circle-color">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["imageLink"],
};
</script>

<style scoped>
.foto_number {
  position: relative;
}
.foto_number_content {
  background: transparent;
  position: absolute;
  z-index: 100;
  width: 70px;
  height: 70px;
  bottom: 0;
  right: 0;
}
.foto_number_content:hover::before {
  position: absolute;
  content: attr(num_img);
  width: 70px;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.123);
  color: var(--color-secundario);
  font-size: 2.7em;
  z-index: 100;
  text-align: center;
  border-top-left-radius: 40px;
}
</style>
