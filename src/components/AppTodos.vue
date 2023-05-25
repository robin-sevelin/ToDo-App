<script setup lang="ts">
  import AppTodo from './AppTodo.vue';
  import { Todo } from '../models/Todo';
  import { onMounted, ref } from 'vue';
  import AppForm from './AppForm.vue';

  const todos = ref<Todo[]>([]);

  onMounted(() => {
    localStorage.getItem('todos' || []);
  });

  const addTodo = (payload: string) => {
    todos.value = [...todos.value, new Todo(payload, new Date().getTime())];
  };

  const toggleDone = (payload: number) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === payload) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
  };

  const removeTodo = (payload: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== payload);
  };
</script>

<template>
  <AppForm @newTodo="addTodo" />
  <div class="todo-container">
    <AppTodo
      :todo="todo"
      v-for="todo in todos"
      :key="todo.id"
      @toggle="toggleDone"
      @remove="removeTodo"
    />
  </div>
</template>

<style scoped></style>
