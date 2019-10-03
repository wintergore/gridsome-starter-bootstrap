<template>
  <div>
    <vue-picture-swipe
            :items="[
            { src: $page.sliders.imageone.src, thumbnail: $page.sliders.imageone.srcset[0], w: $page.sliders.imageone.size.width, h: $page.sliders.imageone.size.height},
            { src: $page.sliders.imagetwo.src, thumbnail: $page.sliders.imagetwo.srcset[0], w: $page.sliders.imagetwo.size.width, h: $page.sliders.imagetwo.size.height},
            { src: $page.sliders.imagethree.src, thumbnail: $page.sliders.imagethree.srcset[0], w: $page.sliders.imagethree.size.width, h: $page.sliders.imagethree.size.height},
            { src: $page.sliders.imagefour.src, thumbnail: $page.sliders.imagefour.srcset[0], w: $page.sliders.imagefour.size.width, h: $page.sliders.imagefour.size.height},
            { src: $page.sliders.imagefive.src, thumbnail: $page.sliders.imagefive.srcset[0], w: $page.sliders.imagefive.size.width, h: $page.sliders.imagefive.size.height},
            { src: $page.sliders.imagesix.src, thumbnail: $page.sliders.imagesix.srcset[0], w: $page.sliders.imagesix.size.width, h: $page.sliders.imagesix.size.height},
            { src: $page.sliders.imageseven.src, thumbnail: $page.sliders.imageseven.srcset[0], w: $page.sliders.imageseven.size.width, h: $page.sliders.imageseven.size.height},
            { src: $page.sliders.imageeight.src, thumbnail: $page.sliders.imageeight.srcset[0], w: $page.sliders.imageeight.size.width, h: $page.sliders.imageeight.size.height}
          ]"
          ></vue-picture-swipe>
          <pre>{{ $page.sliders }}</pre>
  </div>
</template>

<page-query>
query Pages{
  sliders: pages(path: "/page/sliders") {
    imageone (width: 1920, height: 1080, quality: 90)
    imagetwo (width: 1920, height: 1080, quality: 90)
    imagethree (width: 1920, height: 1080, quality: 90)
    imagefour (width: 1920, height: 1080, quality: 90)
    imagefive (width: 1920, height: 1080, quality: 90)
    imagesix (width: 1920, height: 1080, quality: 90)
    imageseven (width: 1920, height: 1080, quality: 90)
    imageeight (width: 1920, height: 1080, quality: 90)
  }
}
</page-query>

<script>
import Gallery from "../components/Gallery";
export default {
  components: {
    Gallery
  },
  metaInfo: {
    title: "About"
  }
};
</script>