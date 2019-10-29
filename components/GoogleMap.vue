<template>
  <div class="map">
    <div class="map-actions">
      <div class="motion">
        <el-checkbox v-model="checked">Haritada hareket ettikçe ara</el-checkbox>
      </div>
      <div class="zoom">
        <span>+</span>
        <span>-</span>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13770.720483184065!2d29.281931235940764!3d40.64978011532128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1572353819025!5m2!1str!2str" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      checked: true
    }
  },
}
</script>

<style lang="scss" scoped>
.map {
  position: fixed;
  overflow: hidden;

  .map-actions {
    position: relative;
    display: block;

    .motion {
      position: absolute;
      top: 30px;
      left: calc(50% - 100px);
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;
      padding: 10px;
      border-radius: 10px;
    }
   
    .zoom {
      position: absolute;
      top: 20px;
      right: 120px;
      color: #555;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;
      border-radius: 10px;
      z-index: 100;
      width: 40px;
      font-size: 30px;
      font-weight: 400;
      padding: 5px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-of-type {
          border-bottom: 1px solid #efefef;
        }
      }
    }
  }
}
</style>
