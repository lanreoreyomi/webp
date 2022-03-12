<template>
  <div id="app">
    <div id="nav">
      <div class="desktop">
        <desktop_navbar/>
      </div>
      <div class="mobile">
        <mobile_navbar/>
      </div>

    </div>
    <router-view />
  </div>
</template>
<script>
import desktop_navbar from '@/components/layout/DesktopNavbar.vue'
import mobile_navbar from '@/components/layout/MobileNav.vue'
export default {
  data() {
    return {
      mobileView: 0,
      showNav: false,
    }
  },
  components: {
    desktop_navbar,
    mobile_navbar,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth;
    }
  },
  created() {
    this.handleView();
  },
}
</script>

<style lang="scss">
@import "src/assets/Styles/colors";
.html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  line-height: 35px;
 }
</style>