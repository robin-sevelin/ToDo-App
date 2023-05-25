<script setup lang="ts">
  defineProps<{ content: string }>();
</script>
<template>
  <header>
    <h1>{{ content }}</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <RouterView></RouterView>
  </header>
</template>

<style scoped>
  /* header {
    background-color: aqua;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
</style>
