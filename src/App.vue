<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader content="My Todo App" />

  <RouterView />

  <AppFooter content="My footer" />
</template>

<style scoped></style>
