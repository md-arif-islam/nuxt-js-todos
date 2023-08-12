export const state = () => ({
  tasks: [],
});

export const mutations = {
  ADD_TODO(state, task) {
    state.tasks = [
      {
        content: task,
        done: false,
      },
      ...state.tasks,
    ];
  },

  REMOVE_TODO(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TODO(state, task) {
    task.done = !task.done;
  },
};
