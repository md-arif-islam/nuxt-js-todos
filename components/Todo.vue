<template>
  <div :class="`todo ${todo.done ? 'is-complete' : ''}`">
    <div class="content">{{ todo.content }}</div>
    <div class="buttons">
      <button>{{ todo.done ? "Undo" : "Done" }}</button>
      <button class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
};
</script>

<style scoped></style>
