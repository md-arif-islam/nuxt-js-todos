<script>
export default {
  props: ["todo"],
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_TODO", this.todo);
    },

    removeTodo() {
      this.$store.commit("REMOVE_TODO", this.todo);
    },
  },
};
</script>

<template>
  <div :class="`todo ${todo.done ? 'is-complete' : ''}`">
    <div class="content">{{ todo.content }}</div>
    <div class="buttons">
      <button @click="toggleDone">{{ todo.done ? "Undo" : "Done" }}</button>
      <button @click="removeTodo" class="delete">Delete</button>
    </div>
  </div>
</template>

<style scoped></style>
