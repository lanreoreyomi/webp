<template>
  <div class="footer">
<!--TODO: Check for attributions for used icons-->
    <h4> &#169; {{getFullYear()}} WebPexels

      <a href="https://icons8.com/"   target="_blank">Icons8.com</a>

      </h4>
  </div>
</template>

<script>
export default {
  name: "footer_comp",
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/colors";
.footer {
  position: relative;
  height: 30vh;
  background: $textColor;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  a{
    color: white;
  }
  h4 {
    position: absolute;
    margin: 0;
    padding: 10px;
    bottom: 0;
    right: 0;
    color: $alt-bg2;
  }
}
</style>