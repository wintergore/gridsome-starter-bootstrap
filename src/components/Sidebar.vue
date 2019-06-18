<template>
  <md-list>
    <md-list-item to="/">
      <md-icon>home</md-icon>
      <span class="md-list-item-text">Home</span>
    </md-list-item>
    <md-list-item to="/about">
      <md-icon>whatshot</md-icon>
      <span class="md-list-item-text">About</span>
    </md-list-item>
    <md-list-item to="/blog">
      <md-icon>comment</md-icon>
      <span class="md-list-item-text">Blog</span>
    </md-list-item>

    <md-list-item to="/contact">
      <md-icon>call</md-icon>
      <span class="md-list-item-text">Contact</span>
    </md-list-item>
  </md-list>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {},
  props: ["menuVisible"]
};
</script>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media (max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media (max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
