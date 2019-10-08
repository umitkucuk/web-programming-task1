<template>
  <div class="hero">
    <navigation />
    <hero-form />
    <img
      class="hero-image"
      src="https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg"
    />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import HeroForm from '~/components/HeroForm.vue'

export default {
  components: {
    Navigation,
    HeroForm
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100vh;
  img.hero-image {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
