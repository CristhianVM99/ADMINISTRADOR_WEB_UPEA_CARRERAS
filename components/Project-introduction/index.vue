<template>
  <section class="intro-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="htit">
            <h4><span>01 </span> {{ title }}</h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1 col-md-8">
          <div class="text js-scroll__content">
            <p class="extra-text">
              {{ content }}
            </p>
            <ul class="smp-list mt-30">
              <li                
              >
                {{ carrera }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title","content","carrera"],
};
</script>

<style scoped>
</style>