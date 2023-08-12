<template>
  <main>
    <h1>Nuxt JS Todos</h1>
    <p>Create a list of todos</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTodo"
        placeholder="Add a new todo"
        @keypress.enter="addTodo"
      />
      <button @click="addTodo">Add Todo</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTodo: "",
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.commit("ADD_TODO", this.newTodo);
      }
    },
  },
};
</script>
