<template>
  <div>
    <nuxt />
    <footer-section />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import FooterSection from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    FooterSection
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Roboto', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #484848;
}

a {
  text-decoration: none;

  &:visited {
    color: #fff;
  }
}

section {
  margin: 50px 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #484848;
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

h2 {
  font-size: 26px;
}

h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

h4 {
  font-size: 20px;
}

h5 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

input {
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  font-size: 17px;
  outline: none;

  &:focus {
    border-color: rgb(0, 132, 137);
  }

  &.text-input {
    display: block;
    width: 100%;
  }
}

span.input-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.input-block {
  position: relative;
  margin-bottom: 20px;
}

button {
  border-radius: 4px;
  border: none;
  line-height: 24px;
  cursor: pointer;
  letter-spacing: normal;
  padding: 10px 22px;
  font-size: 16px;
  font-weight: 700;
  outline: none;

  &.primary {
    color: #fff;
    background-color: #ff5a5f;

    &:active {
      background-color: #df3c47;
    }
  }

  &.secondary {
    color: #fff;
    background-color: #008489;

    &:active {
      background-color: #008489;
    }
  }

  &.white {
    color: rgb(72, 72, 72);
    background-color: #fff;
  }
}

.container {
  margin: 0 auto;
  max-width: 1600px;
  display: block;
  padding: 0 15px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #efefef;
}

.link {
  color: #008489;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.el-carousel__arrow {
  background-color: #fff !important;
  color: #000 !important;
}
</style>
