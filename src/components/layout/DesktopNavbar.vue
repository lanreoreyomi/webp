<template>

  <div id="desktopNav">
    <div class="navbar" :class="{db: scrollPosition>800}">
      <div id="nav-logo">
        <a><img :src="logoImg" alt="logo"></a>
      </div>
      <div id="nav-items">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}" class="router-link"  v-scroll-to="'#desktopNav'">Home</router-link>
          </li>

          <li @click="toggleMenu=!toggleMenu">
            <a class="button1"  v-scroll-to="'#services'" >About </a>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1"  v-scroll-to="'#projects'">Projects </a>
          </li>
          <!--          <li id="career-li">-->
          <!--            <router-link :to="{name: 'Portfolio'}" class="router-link  career" v-scroll-to="'#home-c'">Portfolio-->
          <!--            </router-link>-->
          <!--          </li>-->

        </ul>
      </div>

    </div>
  </div>

</template>

<script>
// import socialButton from '../social_comp';
export default {
  name: "desktop_navbar",
  data() {
    return {
      logoImg: require('../../assets/Image/blueLogo.svg'),
      scrollPosition: null
    }
  },
  components: {
    // socialButton,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 800) {
        this.logoImg = require('../../assets/Image/blueLogo.svg')
      } else {
        this.logoImg = require('../../assets/Image/blueLogo.svg');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#desktopNav {
  z-index: 9999 !important;
  .db {
    background: white !important;
    ul {
      li {
         a {
          color: $headerColor !important ;
        }
        &:hover{
          color: $textHighlight;
        }
      }
    }
  }
  .navbar {
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    z-index: 999;
    width: 100%;
    background: $bg-fill;
     #nav-logo {
      width: 35%;
      padding: 20px;
      img {
        width: 150px;
        padding: 0;
        margin: 0;
      }
    }
    #nav-items {
      margin: 0 auto;
      width: 65%;
      display: flex;
      ul {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li {
          display: inline-block;
          list-style: none;
          @include Button();
          width: 150px;
          a {
            color: $headerColor;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              text-decoration: none;
              text-underline: none;
              color: $textColor;
            }
          }
          .router-link-active {
            border-radius: 6px;
            color: $textHighlight;
          }
          .router-link {
            &:hover {
              img {
                display: unset;
              }
            }
          }
          #career-li {
            .career {
              color: $textHighlight !important;
            }
            &:hover {
              color: $textHighlight !important;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 820px) and (max-width: 1110px) {
  #desktopNav {
    .navbar {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      #nav-logo {
        width: 10%;
        padding: 20px;
        grid-column-start: 1;
      }
      #nav-items {
        margin: 0 auto;
        width: 85%;
        padding: 12px;
        padding-top: 0px !important;
        ul {
          grid-column-start: 2;
          text-align: end;
          justify-content: end;
          display: flex;
          li {
            display: inline-block;
            list-style: none;
            justify-content: end;
            @include Button();
            width: 120px;
          }
        }
      }
    }
  }
}
@media (max-width: 823px) {
  #desktopNav {
    display: none !important;
  }
}
</style>