<template>
  <div>
    <div v-if="!isActive" class="footer-button" @click="toogleFooter">
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style="height: 15px; width: 15px; fill: currentcolor; margin-right: 10px;"
      >
        <path
          d="m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z"
          fill-rule="evenodd"
        />
      </svg>Şartlar, Mahremiyet, Para Birimi ve Daha Fazlası
    </div>
    <div class="footer-button" v-else @click="toogleFooter">
      <svg
        viewBox="0 0 12 12"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style="height: 15px; width: 15px; fill: currentcolor; margin-right: 10px;"
      >
        <path
          d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
          fill-rule="evenodd"
        />
      </svg>Kapat
    </div>
    <footer v-if="isActive">
      <div class="footer-center">
        <div class="container">
          <el-row :gutter="20">
            <el-col :span="6">
              <h5>Airbnb</h5>
              <ul>
                <li>
                  <a href="#">Kariyer Fırsatları</a>
                </li>
                <li>
                  <a href="#">Haberler</a>
                </li>
                <li>
                  <a href="#">Politikalar</a>
                </li>
                <li>
                  <a href="#">Yardım</a>
                </li>
                <li>
                  <a href="#">Çeşitlilik ve Aidiyet</a>
                </li>
                <li>
                  <a href="#">Erişilebilirlik</a>
                  <span class="badge">Yeni</span>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h5>KEŞFEDİN</h5>
              <ul>
                <li>
                  <a href="#">Güven ve Güvenlik</a>
                </li>
                <li>
                  <a href="#">Seyahat Kredisi</a>
                </li>
                <li>
                  <a href="#">Airbnb Citizen</a>
                </li>
                <li>
                  <a href="#">İş Seyahati</a>
                </li>
                <li>
                  <a href="#">Yapılacak Şeyler</a>
                  <span class="badge">Yeni</span>
                </li>
                <li>
                  <a href="#">Airbnbmag</a>
                </li>
              </ul>
            </el-col>
            <el-col :span="7">
              <h5>Ev Sahipliği</h5>
              <ul>
                <li>
                  <a href="#">Neden Ev Sahipliği Yapmalısınız?</a>
                </li>
                <li>
                  <a href="#">Konukseverlik</a>
                </li>
                <li>
                  <a href="#">Sorumlu Ev Sahipliği</a>
                </li>
                <li>
                  <a href="#">Bir Deneyime ev sahipliği yapın</a>
                  <span class="badge">Yeni</span>
                </li>
                <li>
                  <a href="#">Open Homes</a>
                </li>
              </ul>
            </el-col>
            <el-col :span="5">
              <a href="#" class="social-link">
                <svg
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Facebook'a git"
                  focusable="false"
                  style="height: 18px; width: 18px; display: block; fill: rgb(118, 118, 118);"
                >
                  <path
                    d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Twitter'a git"
                  focusable="false"
                  style="height: 18px; width: 18px; display: block; fill: rgb(118, 118, 118);"
                >
                  <path
                    d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Instagram'a git"
                  focusable="false"
                  style="height: 18px; width: 18px; display: block; fill: rgb(118, 118, 118);"
                >
                  <path
                    d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
              <ul>
                <li>
                  <a href="#">Şartlar</a>
                </li>
                <li>
                  <a href="#">Gizlilik</a>
                </li>
                <li>
                  <a href="#">Site Haritası</a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright">
          <svg
            viewBox="0 0 1000 1000"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style="height: 1.5em; width: 1.5em; fill: rgb(118, 118, 118); margin-right: 10px;"
          >
            <path
              d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
            />
          </svg>
          © 2019 Airbnb, Inc. All rights reserved.
        </div>
        <div class="footer-actions">
          <el-select v-model="languages[selectedLanguage].name" placeholder="Select">
            <el-option
              v-for="item in languages"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
          <el-select v-model="currencies[selectedCurrency].name" placeholder="Select">
            <el-option
              v-for="item in currencies"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import languages from '~/static/languages.json'
import currencies from '~/static/currencies.json'

export default {
  components: {},
  data() {
    return {
      languages,
      currencies,
      isActive: false,
      selectedLanguage: 0,
      selectedCurrency: 0
    }
  },

  methods: {
    toogleFooter() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-button {
  position: fixed;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  bottom: 13px;
  right: 13px;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 8px;
  color: rgb(34, 34, 34);
  box-shadow: rgba(0, 0, 0, 0.12) 2px 0px 16px;
  z-index: 11;
  cursor: pointer;
  transition: 0.1s ease-in-out all;

  &:hover {
    background-color: rgb(247, 247, 247);
  }

  &:active {
    transform: scale(0.98);
  }
}
footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 50px 0;
  background-color: #fff;
  z-index: 10;
  border-top: 1px solid #ebebeb;

  .footer-center {
    border-bottom: 1px solid #ebebeb;
    max-width: 1080px;
    margin: 0 auto;

    a.social-link {
      display: inline-block;
      padding: 6px;
      margin-bottom: 5px;
    }

    ul {
      margin: 0 0 15px 0;
      padding: 0;
      list-style: none;
      font-size: 14px;
      font-weight: 500;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: #767676;
          display: inline-block;

          &:hover {
            text-decoration: underline;
          }
        }

        span.badge {
          background-color: rgb(0, 106, 112);
          border-radius: 4px;
          padding: 0 4px;
          color: #fff;
          font-size: 12px;
          margin-left: 8px;
          line-height: 18px;
        }
      }
    }
  }

  .footer-bottom {
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    .copyright {
      display: inline-flex;
      align-items: center;
      color: rgb(118, 118, 118);
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
