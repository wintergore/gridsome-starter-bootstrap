<template>
  <span class="md-title">
    <g-link class="logo-container" to="/">
      <img class="logo-image" alt="logo" src="../assets/images/logo.png">
    </g-link>

    <md-button to="/">
      <span class="md-title">{{ $static.metaData.siteName }}</span>
    </md-button>
  </span>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
  .md-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
