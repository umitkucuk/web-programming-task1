<template>
  <div>
    <hero />
    <div class="container">
      <section>
        <el-row :gutter="20">
          <el-col :span="24">
            <h3>Airbnb'yi Keşfedin</h3>
          </el-col>

          <el-col :span="6">
            <a href="#" class="explore">
              <img src="images/explore1.png" alt="Konaklama yerleri" />
              Konaklama yerleri
            </a>
          </el-col>
          <el-col :span="6">
            <a href="#" class="explore">
              <img src="images/explore2.png" alt="Deneyimler" />
              Deneyimler
            </a>
          </el-col>
          <el-col :span="6">
            <a href="#" class="explore">
              <img src="images/explore3.png" alt="Maceralar" />
              Maceralar
            </a>
          </el-col>
          <el-col :span="6">
            <a href="#" class="explore">
              <img src="images/explore4.png" alt="Restoranlar" />
              Restoranlar
            </a>
          </el-col>
        </el-row>
      </section>
      <section>
        <el-row :gutter="20">
          <el-col :span="24">
            <h3>Dünya genelinde konaklama yerleri</h3>
          </el-col>

          <el-col v-for="(place, index) in places" :key="index" :span="6">
            <place :data="place" />
          </el-col>
        </el-row>
      </section>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Place from '~/components/Place.vue'

import places from '~/static/places.json'

export default {
  components: {
    Hero,
    Place
  },
  data() {
    return {
      places
    }
  },
  created() {
    console.log(this.places)
  }
}
</script>

<style lang="scss" scoped>
a.explore {
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  overflow: hidden;
  background-color: #fff;
  color: rgb(72, 72, 72);
  font-weight: 600;

  img {
    width: 96px;
    height: 72px;
    margin-right: 20px;
  }
}
</style>