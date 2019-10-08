<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <div class="hero-form">
          <h1>Eşsiz konaklama yerleri ve yapacak şeyler için rezervasyon yapın.</h1>

          <span class="input-label">NEREDE</span>
          <div class="input-block">
            <input class="text-input" type="text" name="query" placeholder="Her yerde" />
          </div>
          <span class="input-label">MİSAFİRLER</span>
          <div class="input-block">
            <input class="text-input" type="text" name="query" placeholder="Misafirler" />
          </div>
          <div class="hero-form-footer">
            <button type="button" class="primary">Arama</button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data: {
    showGuestMenu: false
  }
}
</script>

<style lang="scss" scoped>
.hero-form {
  width: 440px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  padding: 32px;
  z-index: 1;

  .hero-form-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
