
<template>
  <div class="desktopNav">
    <div class="menu" :class="{db: scrollPosition>800}">
      <div class="brandName">
        <img :src="logoImg" alt="" width="160px;"></div>
      <div class="contact"></div>
      <div class="menuIcon">
        <img src="../../assets/Image/menus.svg" alt="hamburger" width="40" style="padding:10px; margin-right: 5px;"
             v-on:click="toggleMenu =!toggleMenu">
      </div>
    </div>
    <div class="navBar" :class="{'expandMenu': !toggleMenu}">
      <div class="closeNavBar">
        <img src="../../assets/Image/shutdown.svg" alt="" width="50" v-on:click="toggleMenu =!toggleMenu"
             style="padding:10px;">
      </div>
      <div class="brandLogo"></div>
      <div class="navLinks">
        <ul>
          <li v-on:click="toggleMenu =!toggleMenu">
            <router-link :to="{name: 'Home'}" class="router-link" >Home</router-link>
          </li>

          <li @click="toggleMenu=!toggleMenu">
            <a class="button1" >About </a>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1">Projects </a>
          </li>
          <!--          <li v-on:click="toggleMenu =!toggleMenu">-->
          <!--            <router-link :to="{name: 'Portfolio'}" class="router-link  career" v-scroll-to="'#home-c'">Portfolio-->
          <!--            </router-link>-->
          <!--          </li>-->

        </ul>
        <div>
        </div>


      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      logoImg: require('../../assets/Image/white_logo.svg'),
      scrollPosition: null,
      toggleMenu: true,
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
        this.logoImg = require('../../assets/Image/white_logo.svg');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/colors";
.desktopNav {
  display: none !important;
}
@keyframes slide-anim {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: rotateY(0);
  }
}
@media screen and (max-device-width: 667px) {
  .desktopNav {
    display: block !important;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: $headerColor;
    //height: 10vh;
    font-family: 'Poppins', sans-serif;
    .db {
      background: #F1F2F6 !important;
      ul {
        li {
          a {
            color: $headerColor !important;
          }
        }
      }
    }
    .menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 12px;
      .contact {
        display: none;
      }
      .openNavbar {
        cursor: pointer;
        top: 0;
        right: 0;
      }
      .brandName {
        text-align: start;
        padding: 0;
        margin-left: 20px;
        width: 100%;
        img {
          margin: 0;
          padding: 0;
        }
      }
      .menuIcon {
        margin: 0;
        width: 10%;
        text-align: end;
        padding: 0;
      }
    }
    .navBar {
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: $headerColor;
      overflow-x: hidden;
      transition: 0.9s;
      width: 0;
      .navLinks {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        ul {
          animation-name: slide-anim;
          animation-duration: 4s;
          li {
            list-style: none;
            a {
              cursor: pointer;
              padding: 8px;
              text-decoration: none;
              font-size: 16px;
              display: block;
              transition: 0.3s;
              color: white;
            }
            .router-link-active {
              border-radius: 6px;
              color: #ED542C;
              border-bottom: none !important;
              padding: 8px;
              &:hover {
                color: $backgroundColor;
              }
            }
            .career {
              background: #ED542C !important;
              border-radius: 6px;
              padding: 6px;
              color: $headerColor !important;
              border: 2px solid #ED542C !important;
              width: 40%;
              margin: 0 auto;
              img {
                display: none;
                width: 16px;
                text-align: center;
                justify-content: center;
                align-items: center;
              }
              &:hover {
                img {
                  display: inline;
                }
              }
            }
          }
        }
      }
      .closeNavBar {
        cursor: pointer;
      }
    }
  }
  .expandMenu {
    width: 70% !important;
  }
}
@media (max-width: 823px) {
  .desktopNav {
    display: block !important;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: $headerColor;
    //height: 10vh;
    font-family: 'Poppins', sans-serif;
    .db {
      background: #F1F2F6 !important;
      ul {
        li {
          a {
            color: $headerColor !important;
          }
        }
      }
    }
    .menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 12px;
      .contact {
        display: none;
      }
      .openNavbar {
        cursor: pointer;
        top: 0;
        right: 0;
      }
      .brandName {
        text-align: start;
        padding: 0;
        margin-left: 20px;
        width: 100%;
        img {
          margin: 0;
          padding: 0;
        }
      }
      .menuIcon {
        margin: 0;
        width: 10%;
        text-align: end;
        padding: 0;
        cursor: pointer;
      }
    }
    .navBar {
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: $headerColor;
      overflow-x: hidden;
      transition: 0.9s;
      width: 0;
      .navLinks {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        ul {
          animation-name: slide-anim;
          animation-duration: 4s;
          text-align: center !important;
          li {
            list-style: none;
            justify-content: center;
            text-align: center !important;
            text-transform: uppercase;
            color: $white_text;
            background: #0a1157;
            font-family: 'Poppins', sans-serif;
            width: 80%;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;
            border-radius: 2rem;
            margin: 20px auto;
            a {
              cursor: pointer;
              padding: 8px;
              text-decoration: none;
              font-size: 16px;
              display: block;
              transition: 0.3s;
              color: white;
              text-align: center !important;
            }
            .router-link-active {
              border-radius: 6px;
              color: $textHighlight;
              padding: 8px;
              &:hover {
                color: $backgroundColor;
              }
            }
            .career {
              background: none !important;
              border: none !important;
              color: white !important;
              text-align: center;
            }
          }
        }
      }
      .closeNavBar {
        cursor: pointer;
      }
    }
  }
  .expandMenu {
    width: 70% !important;
  }
}
</style>