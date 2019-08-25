<template>
  <Layout>
    <template v-slot:hero>
      <div class="hero-banner">
        <g-image :src="$page.pages.heroImage"></g-image>
        <div class="hero-banner__text">
          {{ $page.pages.heroTitle }}
          {{ $page.pages.heroSubTitle }}
        </div>
      </div>
    </template>
    <template v-slot:main>
    </template>
  </Layout>
</template>

<page-query>
query Pages{
   pages(path: "/page/home"){
    heroTitle
    heroSubTitle
    heroImage (width: 1920, height: 800, quality: 90)
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    };
  },
  metaInfo: {
    title: "test"
  }
};
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
