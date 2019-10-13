<template>
  <div class="place">
    <img class="place-img" :src="`places/${data.imgSrc}`" :alt="data.title" />
    <div class="place-content-top">
      <span v-if="data.isSuper" class="is-super">SÜPER EV SAHİBİ</span>
      <span v-else class="not-super">Governador Celso Ramos</span>
      <div class="rating">
        <svg
          :width="12"
          :height="12"
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style="fill: currentcolor; color: #ff385c"
        >
          <path
            d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
          />
        </svg>
        <span class="rating-stars">{{data.rating}}</span>
        <span class="reviews">({{data.reviews}})</span>
      </div>
    </div>
    <div class="place-content-center">
      <h4>{{data.type}} · {{data.beds}} yatak</h4>
      <h4>{{data.title}}</h4>
    </div>
    <div class="place-content-bottom">
      <span class="price">{{data.price}} ₺</span>
      /gece
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
.place {
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .place-content-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    .rating {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        margin-top: 2px;
        margin-left: 2px;

        &.rating-stars {
          color: #000;
        }

        &.reviews {
          color: rgb(113, 113, 113);
        }
      }
    }
  }

  span.is-super {
    font-size: 12px;
    font-weight: 500;
    color: #000;
    border: 1px solid #000;
    border-radius: 4px;
    line-height: 16px;
    display: inline-block;
    padding: 1px 5px;
  }

  span.not-super {
    font-size: 14px;
    font-weight: 400;
    color: rgb(113, 113, 113);
    line-height: 16px;
    display: inline-block;
  }

  .place-content-center {
    margin-bottom: 8px;
    h4 {
      font-size: 18px;
      font-weight: 400;
      color: rgb(34, 34, 34);
      max-width: 360px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .place-content-bottom {
    color: rgb(34, 34, 34);
    font-size: 18px;
    span.price {
      font-weight: 600;
    }
  }
}
</style>
