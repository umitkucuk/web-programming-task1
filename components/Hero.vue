<template>
  <div class="hero">
    <hero-form />
    <img
      class="hero-image"
      src="https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg"
    />
    <a href="#" class="hero-link">
      <nuxt-link to="/s/oregon/homes">Oregon'da 300 adetten fazla benzersiz
      <br />yer var</nuxt-link>
    </a>
  </div>
</template>

<script>
import HeroForm from '~/components/HeroForm.vue'

export default {
  components: {
    HeroForm
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: inline-block;
  position: relative;
  padding: 120px 0;
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

  a.hero-link {
    position: absolute;
    bottom: 30px;
    right: 20px;
    color: #fff;
    font-size: 15px;
    text-align: right;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
