<script setup lang="ts">
  import { ref } from 'vue';

  const todoInput = ref('');

  const handleSubmit = () => {
    console.log('boom');
  };
</script>
<template>
  <form @submit="handleSubmit">
    <input type="text" placeholder="new todo" v-model="todoInput" />
    <button>Submit Todo</button>
  </form>
</template>

<style scoped></style>
