<script setup lang="ts">
  defineProps<{ content: string }>();
</script>
<template>
  <footer>
    <h2>{{ content }}</h2>
  </footer>
</template>

<style scoped>
  footer {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
  }
</style>
