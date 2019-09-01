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
      <h1 class="mb-4">Contact</h1>
    </template>
  </Layout>
</template>

<page-query>
query Pages{
  pages(path: "/page/home"){
    heroTitle
    heroSubTitle
    heroImage (width: 1920, height: 300, quality: 90)
    galleryImage: heroImage (width:  640, height:  640, quality: 90)
    galleryThumbImage: heroImage (width: 160, height: 160, quality: 90)
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
