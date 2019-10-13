<template>
  <div class="recommend">
    <img :src="`images/${data.img}`" :alt="data.city" />
    <div class="recommend-content">
      <span class="city-name">{{data.city}}</span>
      <span class="price">{{data.price}}₺/gece ortalaması</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
    display: block;
  }

  .recommend-content {
    position: absolute;
    display: block;
    text-align: center;
    bottom: 30px;
    left: 0;
    right: 0;
    z-index: 5;

    span {
      position: relative;
      color: #fff;
      display: block;

      &.city-name {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      &.price {
        font-size: 14px;
      }
    }
  }

  &:after {
    display: block;
    position: absolute;
    content: '';
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    opacity: 0.6;
    height: 60%;
    width: 100%;
    left: 0px;
    bottom: 0px;
  }
}
</style>
