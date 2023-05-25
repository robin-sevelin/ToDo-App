<script setup lang="ts">
  import { ITodoProps } from '../models/ITodoProps';

  const props = defineProps<ITodoProps>();

  const emits = defineEmits(['toggle', 'remove']);

  const toggleClick = () => {
    emits('toggle', props.todo.id);
    console.log(props.todo.isDone);
  };

  const removeClick = () => {
    emits('remove', props.todo.id);
  };
</script>
<template>
  <div>
    <h3 :class="{ done: props.todo.isDone }">{{ props.todo.name }}</h3>
    <button @click="toggleClick" todo="todo">Toggle done</button>
    <button @click="removeClick">Remove todo</button>
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
