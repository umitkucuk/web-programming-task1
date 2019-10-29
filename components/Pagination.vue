<template>
  <div>
    <div class="pagination" @click="$emit('clicked', false)">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <div class="info">
      <p class="big">1 – 18 / 300+ Kiralık</p>
      <p>Tam fiyatlandırmayı görmek için tarihleri görün. Ek ücretler uygulanır. Vergiler ilave edilir. Ücretsiz iptal sadece rezervasyondan sonraki 48 saat içinde yapılabilir.</p>
    </div>
</div>
</template>

<script>

export default {
  props: {
    size: {
      type: Number,
      default: 5,
    }
  },
  components: {
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .info {
    p {
      text-align: center;
      font-size: 12px;
      &.big {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }
</style>
