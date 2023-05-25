<script setup lang="ts">
  import AppTodos from './AppTodos.vue';

  defineProps<{ content: string }>();
</script>
<template>
  <main>
    <AppTodos />
  </main>
</template>

<style scoped>
  /* main {
    max-width: 960px;
    margin: auto;
    top: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
</style>
