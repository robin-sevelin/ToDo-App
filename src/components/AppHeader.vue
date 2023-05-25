<script setup lang="ts">
  defineProps<{ content: string }>();
</script>
<template>
  <header>
    <h1>{{ content }}</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
  header {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
