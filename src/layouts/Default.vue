<template>
  <div class="layout">
    <!-- app -->
    <div class="page-container">
      <!-- page-container, md-app -->
      <md-app md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <Header/>
        </md-app-toolbar>
        <!-- md-app-toolbar, -->
        <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
      <SideBar/>
      
    </md-app-drawer>
        <!-- md-app-drawer -->
        <md-app-content>
          <slot name="hero" />
          <div class="md-layout">
            <div class="md-layout-item md-size-15"></div>
            <div class="md-layout-item">
              <slot name="main"/>
            </div>
            <div class="md-layout-item md-size-15"></div>
          </div>
          
          <!-- md-app-content -->
        </md-app-content>
      </md-app>
    </div>
    <Footer/>
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


</style>
