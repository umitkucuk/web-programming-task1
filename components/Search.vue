<!-- Navigation'dan altığı search texti kullanıyor. Çünkü girilen herhangi bir sayfada sanki search yapılmış gibi
  search input dolu olarak geliyor.
 -->
<template>
  <div class="search">
    <el-input
    placeholder="Arama"
    prefix-icon="el-icon-search"
    class="search-input"
    v-model="searchText"
    clearable>
  </el-input>
  </div>
</template>

<script>

export default {
  props: {
    search: {
      type: String,
      default: '',
    }
  },
  components: {
  },
  data() {
    return {
      searchText: this.search
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: inline-flex;

  .search-input {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: 0.2s ease-in-out all;
    font-size: 20px;
    color: #484848;
    font-weight: 700;

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    }
  }
}
</style>
