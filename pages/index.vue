<template>
  <div>
    <hero />
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="24">
          <h3>Airbnb'yi Keşfedin</h3>
        </el-col>

        <el-col v-for="(place, index) in places" :key="index" :span="6">
          <place :data="place" />
        </el-col>
      </el-row>
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