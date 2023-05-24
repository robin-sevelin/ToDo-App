<script setup lang="ts">
  import AppForm from './AppForm.vue';
  import AppTodos from './AppTodos.vue';

  defineProps<{ content: string }>();
</script>
<template>
  <main>
    <h2>{{ content }}</h2>
    <AppForm />
    <AppTodos />
  </main>
</template>

<style scoped></style>
