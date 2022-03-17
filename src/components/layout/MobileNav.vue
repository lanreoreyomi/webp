<template>
  <div class="desktopNav">
    <div class="menu">
      <div class="brandName">
        <img src="../../assets/Image/blueLogo.svg "/></div>
      <div class="menuIcon">
        <img src="../../assets/Image/menu-icon.png" alt="hamburger" width="40" style="padding:10px; margin-right: 5px;"
             v-on:click="toggleMenu =!toggleMenu">
      </div>
    </div>
    <div class="navBar" :class="{'expandMenu': !toggleMenu}">
      <div class="closeNavBar">
        <img src="../../assets/Image/close-menu.png" alt="" width="40" v-on:click="toggleMenu =!toggleMenu"
             style="padding:10px;">
      </div>
      <div class="brandLogo"></div>
      <div class="navLinks">
        <ul>
          <li v-on:click="toggleMenu =!toggleMenu">
            <router-link :to="{name: 'Home'}" class="router-link" v-scroll-to="'#home'">Home</router-link>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1"  v-scroll-to="'#services'" >About </a>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1"  v-scroll-to="'#projects'">Projects </a>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1"  v-scroll-to="'#contact'">Contact </a>
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
      logoImg: require('../../assets/Image/blueLogo.svg'),
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


@media all and (max-width: 1279px) {
  .desktopNav {
    display: block !important; ;
    position: fixed;
    z-index: 99999;
    width: 100%;
    background: $bg_fill;

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
      display: flex !important;
      justify-content: space-between;

      .brandName {
        text-align: start;
        padding: 0;
        width: 60%;

        img {
          margin-top: 15px;
          margin-left: 15px;
          padding: 0;
          width: 200px;
        }
      }

      .menuIcon {
        margin: 0;
        width: 30%;
         cursor: pointer;
        text-align: end;
       }
    }

    .navBar {
      height: 100vh !important;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: $bg_fill;
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
            background: $textColor;
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
                color: $textHighlight;
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