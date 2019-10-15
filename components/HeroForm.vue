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
          <span class="input-label">GİRİŞ</span>
          <span class="input-label" style="margin-left: 150px">ÇIKIŞ</span>
          <div class="input-block">
            <el-date-picker
              v-model="dates"
              type="daterange"
              range-separator="-"
              start-placeholder="gg.aa.yyyy"
              end-placeholder="gg.aa.yyyy"
              style="width: 100%"
            />
          </div>
          <span class="input-label">MİSAFİRLER</span>
          <div class="input-block">
            <el-dropdown trigger="click" placement="bottom-start" style="width: 100%;">
              <div class="guest-info">{{ guestInfo }}</div>
              <el-dropdown-menu slot="dropdown" style="width: 380px">
                <div class="guest-picker">
                  <div class="guest">
                    <div class="title">Yetişkinler</div>
                    <div class="guest-action">
                      <span
                        class="minus"
                        :class="{ disabled: guests.adults === 0}"
                        @click="removeGuest('adult')"
                      >-</span>
                      <div class="count">{{ guests.adults }}+</div>
                      <span
                        class="plus"
                        :class="{ disabled: guestCount === 16}"
                        @click="addGuest('adult')"
                      >+</span>
                    </div>
                  </div>
                  <div class="guest">
                    <div class="title">
                      Çocuklar
                      <div class="title-info">Yaş aralığı 2-12</div>
                    </div>
                    <div class="guest-action">
                      <span
                        class="minus"
                        :class="{ disabled: guests.children === 0}"
                        @click="removeGuest('children')"
                      >-</span>
                      <div class="count">{{ guests.children }}+</div>
                      <span
                        class="plus"
                        :class="{ disabled: guestCount === 16}"
                        @click="addGuest('children')"
                      >+</span>
                    </div>
                  </div>
                  <div class="guest">
                    <div class="title">
                      Bebekler
                      <div class="title-info">2 yaş ve altı</div>
                    </div>
                    <div class="guest-action">
                      <span
                        class="minus"
                        :class="{ disabled: guests.babies === 0}"
                        @click="removeGuest('baby')"
                      >-</span>
                      <div class="count">{{ guests.babies }}+</div>
                      <span
                        class="plus"
                        :class="{ disabled: guests.babies === 6}"
                        @click="addGuest('baby')"
                      >+</span>
                    </div>
                  </div>
                  <div class="guest-picker-bottom">
                    <span
                      v-show="guestCount > 0 || guests.babies > 0"
                      class="clear-pick"
                      @click="clearGuests"
                    >Temizle</span>
                    <span class="save-pick">Kaydet</span>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
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
  data() {
    return {
      guests: {
        adults: 0,
        children: 0,
        babies: 0
      },
      dates: null
    }
  },
  methods: {
    addGuest(type) {
      if (type === 'adult') {
        if (this.guestCount !== 16) {
          this.guests.adults += 1
        }
      } else if (type === 'children') {
        if (this.guestCount !== 16) {
          this.guests.children += 1
        }

        if (this.guests.adults === 0) {
          this.guests.adults += 1
        }
      } else if (type === 'baby') {
        if (this.guests.babies !== 6) {
          this.guests.babies += 1
        }

        if (this.guests.adults === 0) {
          this.guests.adults += 1
        }
      }
    },
    removeGuest(type) {
      if (type === 'adult') {
        if (this.guests.adults !== 0) {
          this.guests.adults -= 1
        }
      } else if (type === 'children') {
        if (this.guests.children !== 0) {
          this.guests.children -= 1
        }
      } else if (type === 'baby') {
        if (this.guests.babies !== 0) {
          this.guests.babies -= 1
        }
      }
    },
    clearGuests() {
      this.guests = {
        adults: 0,
        children: 0,
        babies: 0
      }
    }
  },
  computed: {
    guestCount() {
      return this.guests.adults + this.guests.children
    },
    guestInfo() {
      let info = 'Misafirler'
      if (this.guestCount > 0) {
        info = `${this.guestCount} misafir`
      }

      if (this.guests.babies > 0) {
        info = `${this.guestCount} misafir, ${this.guests.babies} bebek`
      }

      return info
    }
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

.guest-info {
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  font-size: 17px;
  outline: none;
  display: block;
  width: 100%;
  cursor: pointer;
}

.guest-picker {
  display: block;
  position: relative;
  padding: 20px;

  .guest {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .title {
      font-size: 16px;
      color: #484848;
      .title-info {
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;
      }
    }

    .guest-action {
      .count {
        display: inline-block;
        min-width: 30px;
        text-align: center;
      }
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgb(0, 132, 137);
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: 1px solid rgb(0, 132, 137);
        border-radius: 100%;
        margin: 0 10px;

        &.disabled {
          opacity: 0.5;
          cursor: auto;
        }
      }
    }
  }
  .guest-picker-bottom {
    display: block;

    span.clear-pick {
      cursor: pointer;
      color: #484848;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
        padding: 4px 0;
      }
    }

    span.save-pick {
      float: right;
      color: #008489;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
