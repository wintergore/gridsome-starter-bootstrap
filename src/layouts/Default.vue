<template>
  <div class="page-container">
    <md-app md-waterfall :md-mode="($mq === 'xs' |  $mq === 'sm') ? 'reveal': 'flexible'">
      <md-app-toolbar class=" md-primary" :class="[$mq, ($mq === 'xs' |  $mq === 'sm') ? '': 'md-large' ]">
        
        <div class="md-toolbar-row">
          <div v-if="$mq === 'xs' |  $mq === 'sm'" class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <mq-layout :mq="['xs', 'sm']">
              <md-icon>menu</md-icon>
              </mq-layout>
            </md-button>
          </div>
          <div v-if="$mq === 'xs' |  $mq === 'sm'"  class="md-toolbar-section-end">
            <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
            </md-button>
          </div>
          <div v-if="$mq === 'xs' |  $mq === 'sm'" class="logo">
            <g-image immediate class="pig" src="~/assets/images/logo.jpg" width="295"></g-image>
          </div>
        </div>
        
        <div v-if="$mq === 'md' |  $mq === 'lg' |  $mq === 'xl'" class="md-toolbar-row md-toolbar-offset title-container" :class="$mq">
          <md-button class="md-small-hide" to="/about">ABOUT</md-button>
          <md-button class="md-small-hide" to="/reviews">REVIEWS</md-button>
          <md-button class="md-small-hide" to="/gallery">GALLERY</md-button>
          <mq-layout mq="md+"  class="logo" >
            <g-link to="/">
              <g-image immediate class="pig" src="~/assets/images/logo.jpg" width="295" ></g-image>
            </g-link>
          </mq-layout>
          <md-button class="md-small-hide" to="/menus">MENUS</md-button>
          <md-button class="md-small-hide" to="/catering">CATERING</md-button>
          <md-button class="md-small-hide" to="/contact">CONTACT</md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
        <SideBar/>
      </md-app-drawer>

      <md-app-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <slot name="hero"/>
          </div>
          <div class="md-layout-item md-size-100 px-20">
            <div class="md-layout">
              <div class="md-layout-item md-size-20"></div>
              <div class="md-layout-item main">
                <slot name="main"/>
              </div>
              <div class="md-layout-item md-size-20"></div>
            </div>
          </div>
          <div class="md-layout-item md-size-100 px-20 footer">
          ©{{ new Date().getFullYear() }} Smoklahoma. All rights reserved.
          </div>
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
    menuVisible: false,
  })
};
</script>


<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
    primary: md-get-palette-color(blue, A200), // The primary color of your application
    accent: md-get-palette-color(red, A200), // The accent or secondary color
    theme: dark // This can be dark or light
));

@import "~vue-material/dist/theme/all"; // Apply the theme


body {
  font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;

  p {
    font-size: 1.1em;
  }

  .footer {
    text-align: right;
  }
}

.md-app {
  max-height: 100vh;

  .md-app-container {
    overflow-x: hidden; //fixes overflow issue, exists in vuematerial docs
    .md-app-toolbar {
      min-height: 90px !important;
    }
  }
}
.md-app-toolbar {
  height: 150px;
  &.xs, &.sm {
    .logo > img {
      height: auto;
      width: 230px;
    }
  }
}

.md-app-content {
  padding: 0 !important;
  .px-20 {
    padding:0 20px;
  }
}

.md-layout-item.main {
  width: 500px;
  padding: 50px 0px 100px 0px;
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

  &.xs &.sm {
    position: absolute;
  }

  .logo {
    display: flex;
    width: auto;
    height: 100%;

      a, img {
      height: 100% !important;
      width: auto;
      padding: 10px 0; //test with 0 0 12% 0; //and fix mobile height.
      max-width: none;
    
    }
    
  }
  .md-display-1 {
    margin: 0;
  }
}
</style>
