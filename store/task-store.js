import { defineStore } from "pinia";
import { ref, computed } from "@nuxtjs/composition-api";

const useTaskStore = defineStore("task", () => {
  // Task list
  const tasks = ref([]);

  const importantTasks = computed(() => {
    return tasks.value.filter((task) => task.is_important);
  });

  const doneTasks = computed(() => {
    return tasks.value.filter((task) => task.is_done);
  });

  // Current filtered tasks
  const activeTask = ref("all");

  // Mutations
  const addTask = (task) => {
    tasks.value.push(task);
  };

  const updateTask = (taskId, updatedProperty) => {
    const updatedTaskIndex = tasks.value.findIndex(
      (task) => task.id === taskId
    );
    tasks.value[updatedTaskIndex][Object.keys(updatedProperty)[0]] =
      Object.values(updatedProperty)[0];
  };

  const removeTask = (taskId) => {
    const removedTaskIndex = tasks.value.findIndex(
      (task) => task.id === taskId
    );
    tasks.value.splice(removedTaskIndex, 1);
  };

  return {
    tasks,
    importantTasks,
    doneTasks,
    activeTask,
    addTask,
    updateTask,
    removeTask,
  };
});

export default useTaskStore;
