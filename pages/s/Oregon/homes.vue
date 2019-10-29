<template>
  <div>
    <navigation title="Oregon" />
    <div>
    <div class="top-filter">
      <div class="filters">
        <span class="filter">Tarihler</span>
        <span class="filter">Misafir sayısı</span>
        <span class="filter">İş seyahati</span>
        <span class="filter">Yerin yükü</span>
        <span class="filter">Fiyat</span>
        <span class="filter">Anında rezervasyon</span>
        <span class="filter">Daha fazla filtre</span>
      </div>
      <div class="toggleMap">
        Haritayı göster
        <el-switch
          v-model="showMap"
          active-color="#008489"
          inactive-color="#b0b0b0">
        </el-switch>
      </div>
    </div>
    <template>
      <section class="results">
        <div class="container">
          <el-row v-if="showMap" :gutter="20">
            <el-col :span="13">
              <h3 style="border-bottom: 1px solid #efefef; padding-bottom: 20px; margin-top: 30px">+300 konaklama yeri</h3>
              <div v-for="(place, index) in places" :key="index">
                <place :data="place" wide />
              </div>
              <pagination @clicked="test"/>
            </el-col>
            <el-col :span="11">
              <google-map />
            </el-col>
          </el-row>
          <el-row v-else :gutter="20">
            <h3 style="margin-top: 30px">+300 konaklama yeri</h3>
            <el-col v-for="(place, index) in places" :key="index" :span="6">
              <place :data="place" />
            </el-col>
            <el-col v-for="(place, index) in places" :key="index" :span="6">
              <place :data="place" />
            </el-col>
          </el-row>
        </div>
      </section>
    </template>
  </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Place from '~/components/Place.vue'
import GoogleMap from '~/components/GoogleMap.vue'
import Pagination from '~/components/Pagination.vue'

// mock data
import places from '~/static/places.json'

export default {
  components: {
    Navigation,
    Place,
    GoogleMap,
    Pagination
  },
  mounted() {

  },
  data() {
    return {
      showMap: true,
      places: places,
    }
  },
  methods: {
    test () {
      this.places = this.places.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.top-filter {
  position: fixed;
  display: flex;
  width: 100%;
  padding: 6px 50px;
  justify-content: space-between;
  top: 80px;
  border-bottom: 1px solid rgb(228, 228, 228);
  background-color: #fff;
  z-index: 9;

  .filters {
    span.filter {
      display: inline-block;
      border-radius: 20px;
      border: 1px solid #b0b0b0;
      padding: 8px 14px;
      color: #000;
      margin-right: 5px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        border-color: #000;
      }
    }
  }

  .toggleMap {
    display: inline-block;
    margin-top: 7px;
  }
}

section.results {
  margin-top: 130px;
}
</style>