<script setup lang="ts">
  import { ref } from 'vue';

  const todoInput = ref('');

  const emits = defineEmits<{
    (e: 'newTodo', payload: string): void;
  }>();

  const handleSubmit = () => {
    emits('newTodo', todoInput.value);

    todoInput.value = '';
  };
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="new todo" v-model="todoInput" />
    <button>Submit Todo</button>
  </form>
</template>

<style scoped></style>
