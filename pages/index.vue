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
        this.newTodo = "";
      }
    },
  },
};
</script>

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
    <div class="todos">
      <Todo
        v-for="(todo, index) in $store.state.todos"
        :key="index"
        :todo="todo"
      />
    </div>
  </main>
</template>
