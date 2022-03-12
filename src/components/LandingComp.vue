<template>
  <div class="landingSection">
    <div class="leftSection">
      <div class="leftSectionText">

        <h1 data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="1500">
          Lanre Oreyomi, <span style="color: #ED542C;">Msc</span></h1>
        <h2 data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500">Software Developer</h2>
      </div>

      <div class="leftSectionButton">
        <a class="button1"  >Contact </a>
        <a class="button2"  >Projects</a>
      </div>
    </div>

    <div class="rightSection">
      <img src="../assets/Image/lanre.jpg" alt="lanre_image">
    </div>

  </div>

</template>

<script>
export default {
  name: "landing_comp"
}
</script>

<style lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.landingSection {
  background-size: 100% 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .rightSection {
    padding: 20px;
    margin: 10vh auto;
    img {
      padding: 20px;
      align-items: center;
      border-radius: 10px;
      max-width: 100%;
      width: 400px;
      text-align: center;
    }
  }
  .leftSection {
    text-align: center;
    margin-top: 20vh;
    .leftSectionButton {
      margin-bottom: 6vh;
      margin-top: 10vh;
    }
    .leftSectionText {
      h1 {
        font-size: 50px;
        color: $alt-bg;
        font-family: $headerFont;
        margin-top: 10vh;
        .name_highlight {
          cursor: pointer;
        }
      }
      h2 {
        margin-top: 40px;
        font-size: 30px;
        color: $alt-bg2;
        font-family: $headerFont;
      }
    }
  }
  -webkit-box-shadow: -38px 48px 34px 0px rgba(222, 222, 222, 1);
  -moz-box-shadow: -38px 48px 34px 0px rgba(222, 222, 222, 1);
  box-shadow: -38px 48px 34px 0px rgba(222, 222, 222, 1);
  .button1 {
    @include Button();
    border-radius: 0;
    padding: 15px;
    border: 1px solid ;
    &:hover {
      transition: all 0.2s;
      background: lighten($textColor, 10%);
    }
  }
  .button2 {
    @include Button();
    border-radius: 0;
    padding: 15px;
    background: $alt-bg;
    color: #0a1157;
    &:hover {
      transition: all 0.2s;
      background: lighten($textColor, 10%);
      color: $alt-bg;
    }
  }
}
@keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
@media (max-width: 768px) {
  .landingSection {
    grid-template-columns: 1fr;
    grid-template-areas: "a a a"
                  "b b b";
    .leftSection {
      padding: 0 !important;
      margin: 0 !important;
      grid-area: b;
      .leftSectionText {
        padding: 0 !important;
        margin: 0 !important;
        h1 {
          font-size: 40px !important;
          margin-top: 0;
        }
      }
    }
    .rightSection {
      justify-content: center;
      text-align: center;
      img {
        max-width: 100%;
      }
      margin-bottom: 0 !important;
    }
  }
}
@media only screen and (min-device-width: 767px) and (max-device-width: 1408px) {
  .landingSection {
    grid-template-columns: 1fr;
    grid-template-areas: "a a a"
                  "b b b";
    .leftSection {
      padding: 0 !important;
      margin: 0 !important;
      grid-area: b;
      .leftSectionText {
        padding: 0 !important;
        margin: 0 !important;
        h1 {
          font-size: 70px;
          margin-top: 0;
        }
      }
    }
    .rightSection {
      justify-content: center;
      text-align: center;
      img {
        max-width: 100%;
      }
      margin-bottom: 0 !important;
    }
  }
}
</style>