<template>
    <header
       :ref="sliderRef"
      class="works-header fixed-slider hfixd valign sub-bg"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-9 static">
            <div class="capt mt-50">
              <div class="parlx text-center">
                <h1 class="color-font">{{ title }}</h1>
                <p>
                  {{ text }}
                </p>
              </div>

              <div class="bactxt custom-font valign">
                <span class="full-width">{{ content }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        props: ['sliderRef','title','text','content']
    }
</script>

<style scoped>

</style>