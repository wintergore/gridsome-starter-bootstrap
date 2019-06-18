<template>
  <div class="md-toolbar-row">
      <span class="md-display-1">MY WEBSITE NAME</span>
  </div>
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
