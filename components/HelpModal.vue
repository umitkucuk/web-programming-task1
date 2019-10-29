<template>
  <div class="help">
    <div class="help-header">
      <h5>Önerilen yardım</h5>
      <span class="help-close" @click="$emit('close', false)"><svg viewBox="0 0 24 24" role="img" aria-label="Kapat" focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule="evenodd"></path></svg></span>
    </div>
    <div class="help-content">
      Content
    </div>
    <div class="help-footer">
      <button type="button" class="secondary" style="width: 100%">Giriş yapın</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {

  },
  components: {
  },
  data() {
    return {
     
    }
  },
}
</script>

<style lang="scss" scoped>
.help {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 420px;
  z-index: 101;

  h5 {
    text-align: center;
    font-size: 16px;
    margin: 0;
  }

  .help-header {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid #efefef;

    span.help-close {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }

  .help-content {
    min-height: 1000px;
    overflow-y: auto;
    padding: 20px;
  }

  .help-footer {
    border-top: 1px solid #efefef;
    padding: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
