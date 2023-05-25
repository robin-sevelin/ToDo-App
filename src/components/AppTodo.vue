<script setup lang="ts">
  import { ITodoProps } from '../models/ITodoProps';

  const props = defineProps<ITodoProps>();

  // const emits = defineEmits(['toggle', 'remove']);

  const emits = defineEmits<{
    (e: 'toggle', payload: number): void;
    (e: 'remove', payload: number): void;
  }>();

  const toggleClick = () => {
    emits('toggle', props.todo.id);
  };

  const removeClick = () => {
    emits('remove', props.todo.id);
  };
</script>
<template>
  <div>
    <h3 :class="{ done: props.todo.isDone }">{{ props.todo.name }}</h3>
    <button class="toggle" @click="toggleClick" todo="todo">Toggle Todo</button>
    <button class="remove" @click="removeClick">Remove Todo</button>
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }

  .toggle {
    background-color: lightgreen;
  }

  .remove {
    background-color: red;
    color: white;
  }
</style>
