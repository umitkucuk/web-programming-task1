<template>
  <div>
    <navigation isHomePage />
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
            <div class="animals">
              <div class="animals-video-context">
                <h4 style="font-size: 14px; color: #fff; margin-bottom: 20px;">KARŞINIZDA</h4>
                <h1 style="font-size: 48px; color: #fff">Hayvanlar</h1>
                <h4
                  style="font-size: 18px; font-weight: 400; color: #fff; margin-bottom: 40px;"
                >Airbnb Deneyimleri'nde</h4>
                <button class="white">Daha fazla bilgi edinin</button>
              </div>
              <video
                class="animals-video"
                autoplay
                controlslist="nodownload"
                crossorigin="anonymous"
                loop
                playsinline
                preload="metadata"
                style="object-fit: cover;"
              >
                <source
                  id="mp4"
                  src="https://a0.muscache.com/v/c8/44/c84447fb-f877-54ba-8ab4-96c5823da807/c84447fbf87754ba8ab496c5823da807_1000k_1.mp4?imformat=h265"
                  type="video/mp4; codecs=hevc"
                />
                <source
                  id="mp4"
                  src="https://a0.muscache.com/v/c8/44/c84447fb-f877-54ba-8ab4-96c5823da807/c84447fbf87754ba8ab496c5823da807_1000k_1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </el-col>
        </el-row>
      </section>
      <section>
        <el-row :gutter="20">
          <el-col :span="24">
            <h3>Sizin için önerilenler</h3>
          </el-col>
          <el-col v-for="(recommend, index) in recommends" :key="index" :span="6">
            <recommend :data="recommend" />
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
import Navigation from '~/components/Navigation.vue'
import Hero from '~/components/Hero.vue'
import Place from '~/components/Place.vue'
import Recommend from '~/components/Recommend.vue'

import recommends from '~/static/recommends.json'
import places from '~/static/places.json'

export default {
  components: {
    Navigation,
    Hero,
    Place,
    Recommend,
  },
  mounted() {
    this.scroll()

    // app initial loading'de loading componentini render ediyor.
    // yüklenme bitince de finish() metodu ile componenti unmount ediyor.
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 4000)
    })
  },
  data() {
    return {
      places: places,
      recommends,
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.places = this.places.concat(places)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a.explore {
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
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

.animals {
  position: relative;
  height: 480px;
  overflow: hidden;
  border-radius: 16px;

  .animals-video-context {
    position: absolute;
    top: 100px;
    left: 80px;
    z-index: 10;
  }
  .animals-video {
    width: 100%;
  }
}
</style>