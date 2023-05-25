<script setup lang="ts">
  import AppTodos from './AppTodos.vue';

  defineProps<{ content: string }>();
</script>
<template>
  <main>
    <h2>{{ content }}</h2>
    <AppTodos />
  </main>
</template>

<style scoped></style>
