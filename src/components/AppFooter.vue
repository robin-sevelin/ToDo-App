<script setup lang="ts">
  defineProps<{ content: string }>();
</script>
<template>
  <footer>
    <h2>{{ content }}</h2>
  </footer>
</template>

<style scoped></style>
