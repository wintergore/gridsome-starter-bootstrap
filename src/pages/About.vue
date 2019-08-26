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
      <div class="md-layout">
        <div class="md-layout-item">
          <h1 class="mb-4">About</h1>
          <p>Smoklahoma is an authentic southern American pitt style barbeque caterer based in Middlesbrough catering to the surrounding areas and the North East of England.</p>
          <p>We provide catering at any event from weddings, corporate events and private parties to public events and festivals.</p>
          <p>We’re all about serving quality produce, cooked live on site using flavoured lump wood/charcoal giving that authentic barbecue taste we all crave for.</p>
          <p>We can cater for any number and will work to your needs giving guests an unforgettable experience.</p>
          <p>Any questions please ask and we look forward to hearing from you.</p>
          <p>In the meantime take a look at reviews on our site, which are taken from our facebook page @smoklahomapitbbq and our add-to-event page to get an idea of what we're about or even better pop along to one of our many street food events and say hello and have a feed.</p>
        </div>
        <div class="md-layout-item">
          
        </div>
      </div>
    </template>
  </Layout>
</template>

<page-query>
query Pages{
   pages(path: "/page/home"){
    heroTitle
    heroSubTitle
    heroImage (width: 1920, height: 300, quality: 90)
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  }
};
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
