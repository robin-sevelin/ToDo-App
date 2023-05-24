<script setup lang="ts">
  import { ITodoProps } from '../models/ITodoProps';

  const props = defineProps<ITodoProps>();
</script>
<template>
  <div todo="todo">
    <h3>{{ props.todo.name }}</h3>
    <input type="checkbox" :v-if="todo.done === true" checked />
  </div>
</template>

<style scoped></style>
