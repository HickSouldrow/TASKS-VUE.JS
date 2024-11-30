const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: '',
      tasks: [] // Each task will now have a 'text' and 'editing' property
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask.trim(), editing: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    startEditing(index) {
      this.tasks[index].editing = true;
    },
    saveEditing(index) {
      if (this.tasks[index].text.trim()) {
        this.tasks[index].editing = false;
      } else {
        this.removeTask(index); // Remove the task if the text is empty
      }
    }
  }
}).mount('#app');
