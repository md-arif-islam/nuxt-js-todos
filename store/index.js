export const state = () => ({
  todos: [],
});

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [
      {
        content: todo,
        done: false,
      },
      ...state.todos,
    ];
  },

  REMOVE_TASK(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  TOGGLE_TASK(state, todo) {
    todo.done = !todo.done;
  },
};
