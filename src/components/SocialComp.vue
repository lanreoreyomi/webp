<template>
  <div class="socialMedia">

    <Button><a href="https://www.linkedin.com/in/lanre-oreyomi-1012/" target="_blank"><img
        src="../assets/Image/linkedin-round-color.svg" alt="linkedin"/></a></Button>

    <Button><a href="https://github.com/lanreoreyomi" target="_blank"> <img src="../assets/Image/github.svg" alt="github"/></a>
    </Button>

  </div>
</template>

<script>
export default {
  name: "social_comp"
}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
.socialMedia {
  text-align: center;
  Button {
    padding: 0;
    margin: 20px;
    width: 50px;
    background: none;
    border: none;
    a {
      padding: 0;
      margin: 0;
      img {
        cursor: pointer;
        display: inline-block;
        width: 40px;
        color: white;
        &:hover {
          padding: 10px;
        }
      }
    }
  }
}
</style>