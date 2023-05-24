<script setup lang="ts">
  import AppTodo from './AppTodo.vue';
  import { Todo } from '../models/Todo';

  const todos = <Todo[]>[];

  todos.push(new Todo('hej', false, 1));
</script>
<template>
  <div class="todo-container">
    <AppTodo :todo="todo" v-for="todo in todos" :key="todo.id" />
  </div>
</template>

<style scoped></style>
