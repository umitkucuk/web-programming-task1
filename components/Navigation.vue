<template>
  <header>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">left</div>
      </el-col>
      <el-col :span="12">
        <nav>
          <ul>
            <li>
              <a href="#">Bir evde ev sahipliği yapma</a>
            </li>
            <li>
              <a href="#">Bir deneyim için ev sahipliği yapın</a>
            </li>
            <li>
              <a href="#">Yardım</a>
            </li>
            <li>
              <a href="#">Kaydol</a>
            </li>
            <li>
              <a href="#">Giriş yapın</a>
            </li>
          </ul>
        </nav>
      </el-col>
    </el-row>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  z-index: 10;
  margin-bottom: 40px;

  nav {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline-flex;

        a {
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 30px 10px;
          border-bottom: 2px solid transparent;

          &:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
}
</style>
