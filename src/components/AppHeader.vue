<script setup lang="ts">
  defineProps<{ content: string }>();
</script>
<template>
  <header>
    <h1>{{ content }}</h1>
  </header>
</template>

<style scoped></style>
