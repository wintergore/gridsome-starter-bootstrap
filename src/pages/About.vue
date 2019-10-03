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
        <div class="md-layout-item">,</div>
      </div>
      <vue-picture-swipe
        :items="[
            { src: $page.sliders.imageone.src, thumbnail: $page.sliders.imageonethumb.src, w: $page.sliders.imageone.size.width, h: $page.sliders.imageone.size.height},
            { src: $page.sliders.imagetwo.src, thumbnail: $page.sliders.imagetwothumb.src, w: $page.sliders.imagetwo.size.width, h: $page.sliders.imagetwo.size.height},
            { src: $page.sliders.imagethree.src, thumbnail: $page.sliders.imagethreethumb.src, w: $page.sliders.imagethree.size.width, h: $page.sliders.imagethree.size.height},
            { src: $page.sliders.imagefour.src, thumbnail: $page.sliders.imagefourthumb.src, w: $page.sliders.imagefour.size.width, h: $page.sliders.imagefour.size.height},
            { src: $page.sliders.imagefive.src, thumbnail: $page.sliders.imagefivethumb.src, w: $page.sliders.imagefive.size.width, h: $page.sliders.imagefive.size.height},
            { src: $page.sliders.imagesix.src, thumbnail: $page.sliders.imagesixthumb.src, w: $page.sliders.imagesix.size.width, h: $page.sliders.imagesix.size.height},
            { src: $page.sliders.imageseven.src, thumbnail: $page.sliders.imageseventhumb.src, w: $page.sliders.imageseven.size.width, h: $page.sliders.imageseven.size.height},
            { src: $page.sliders.imageeight.src, thumbnail: $page.sliders.imageeightthumb.src, w: $page.sliders.imageeight.size.width, h: $page.sliders.imageeight.size.height}
          ]"
      ></vue-picture-swipe>
    </template>
  </Layout>
</template>

<page-query>
query Pages{
  pages(path: "/page/home"){
    heroTitle
    heroSubTitle
    heroImage (width: 1920, height: 300, quality: 90)
  },
  sliders: pages(path: "/page/sliders") {
    imageone (width: 1024, height: 576, quality: 90)
    imageonethumb: imageone (width: 128, height: 72, quality: 90)
    imagetwo (width: 1024, height: 576, quality: 90)
    imagetwothumb: imagetwo (width: 128, height: 72, quality: 90)
    imagethree (width: 1024, height: 576, quality: 90)
    imagethreethumb: imagethree (width: 128, height: 72, quality: 90)
    imagefour (width: 1024, height: 576, quality: 90)
    imagefourthumb: imagefour (width: 128, height: 72, quality: 90)
    imagefive (width: 1024, height: 576, quality: 90)
    imagefivethumb: imagefive (width: 128, height: 72, quality: 90)
    imagesix (width: 1024, height: 576, quality: 90)
    imagesixthumb: imagesix (width: 128, height: 72, quality: 90)
    imageseven (width: 1024, height: 576, quality: 90)
    imageseventhumb: imageseven (width: 128, height: 72, quality: 90)
    imageeight (width: 1024, height: 576, quality: 90)
    imageeightthumb: imageeight (width: 128, height: 72, quality: 90)
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
