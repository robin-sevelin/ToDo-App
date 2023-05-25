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
  <div class="todo">
    <h3 :class="{ done: props.todo.isDone }">{{ props.todo.name }}</h3>
    <div class="button-container">
      <button class="toggle" @click="toggleClick" todo="todo">
        Toggle Todo
      </button>
      <button class="remove" @click="removeClick">Remove Todo</button>
    </div>
  </div>
</template>

<style scoped>
  .todo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    min-width: 500px;
  }
  .done {
    text-decoration: line-through;
  }

  .remove {
    background-color: red;
    color: white;
  }

  .toggle {
    background-color: lightgreen;
    color: black;
  }

  button {
    border-radius: 5px;
    height: 40px;
    border: none;
    width: 100px;
    margin-left: 10px;
  }

  button:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 0.3s ease-in-out;
  }
</style>
