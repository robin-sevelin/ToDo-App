<script setup lang="ts">
  import AppTodo from './AppTodo.vue';
  import { Todo } from '../models/Todo';

  const todos = <Todo[]>[];

  todos.push(new Todo('hej'));
  todos.push(new Todo('tjo'));

  console.log(todos);
</script>
<template>
  <AppTodo />
</template>

<style scoped></style>
