<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
        <div class="md-toolbar-row md-toolbar-offset title-container">
          <md-button class="md-small-hide md-medium-hide" to="/">ABOUT</md-button>
          <md-button class="md-small-hide md-medium-hide" to="/">REVIEWS</md-button>
          <md-button class="md-small-hide md-medium-hide" to="/">GALLERY</md-button>
          <div class="logo">
            <g-image class="pig" src="~/assets/images/logo.png"></g-image>
          </div>
          <md-button class="md-small-hide md-medium-hide" to="/">MENUS</md-button>
          <md-button class="md-small-hide md-medium-hide" to="/">CATERING</md-button>
          <md-button class="md-small-hide md-medium-hide"  to="/">CONTACT</md-button>
          <!-- <div class="md-title md-display-1">
            <span>MY WEBSITE NAME</span>
          </div> -->

           
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
        <SideBar/>
      </md-app-drawer>

      <md-app-content>
        <slot name="hero"/>
        <div class="md-layout">
          <div class="md-layout-item md-size-15"></div>
          <div class="md-layout-item">
            <slot name="main"/>
          </div>
          <div class="md-layout-item md-size-15"></div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";

export default {
  components: {
    Footer,
    Header,
    SideBar
  },
  name: "Flexible",
  data: () => ({
    menuVisible: false
  })
};
</script>


<style lang="scss">
body {
  font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.md-app {
  max-height: 100vh;

  .md-app-container {
    overflow-x: hidden; //fixes overflow issue, exists in vuematerial docs
  }
}
.md-app-toolbar {
  height: 192px;
}

.title-container {
  margin: 0 44px !important;
  width: calc(100% - 88px) !important;
  z-index: 3 !important;
  min-height: 100% !important;
  align-self: center !important;
  height: 100%;
  left: 0;
  
  justify-content: center;
  .logo {
    display: flex;
    width: auto;
    height: 100%;
    img {
      height: 100% !important;
      width: auto;
      padding: 10px 0;
    }
  }
  .md-display-1 {
    margin: 0;
  }
}
</style>
