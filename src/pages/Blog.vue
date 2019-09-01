<template>
  <Layout>
    <template v-slot:hero>Hello World</template>
    <template v-slot:main>
      <h1 class="my-4 mb-5">Blog</h1>

      <g-link
        :to="item.node.path"
        v-for="item in $page.posts.edges"
        :key="item.node.id"
        class="blog-post"
      >
        <div class="media my-5">
          <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
          <div class="media-body">
            <h5 class="mt-0">{{ item.node.title }}</h5>
            <p class="text-dark">{{item.node.excerpt}}</p>
          </div>
        </div>
      </g-link>
    </template>
  </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
        date
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  },
  methods: {
    formatDate: function(item) {
      var dt = new Date(item);
      return `${dt.getDate() + 1}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
