<script setup lang="ts">
  import { ref } from 'vue';

  const todoInput = ref('');

  const emits = defineEmits<{
    (e: 'newTodo', payload: string): void;
  }>();

  const handleSubmit = () => {
    if (todoInput.value === '') {
      return;
    }
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

<style scoped>
  /* form {
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  button {
    position: relative;
    top: 10px;
  } */
</style>
