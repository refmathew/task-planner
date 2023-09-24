<script setup>
import { computed } from "vue";
import draggable from "vuedraggable";
import useTaskStore from "@/store/task-store";
const taskStore = useTaskStore();

// Component
const props = defineProps({
  searchInputValue: { type: String, required: true },
});

// Task data
const filteredTasks = computed({
  get() {
    switch (taskStore.activeTask) {
      case "important":
        return taskStore.importantTasks;
      case "done":
        return taskStore.doneTasks;
      default:
        return taskStore.tasks;
    }
  },
  set(newValue) {
    switch (taskStore.activeTask) {
      case "important":
        return (taskStore.importantTasks = newValue);
      case "done":
        return (taskStore.doneTasks = newValue);
      default:
        return (taskStore.tasks = newValue);
    }
  },
});
const searchedTasks = computed({
  get() {
    return filteredTasks.value.filter((task) => {
      return String(task.title)
        .toLowerCase()
        .includes(props.searchInputValue.toLowerCase());
    });
  },
});
</script>

<template>
  <div class="w-full">
    <template v-if="searchInputValue">
      <div
        class="task-list rel flex flex-col items-center gap-[1.6rem] w-full"
        tag="div"
      >
        <TaskItem
          v-for="(task, index) in searchedTasks"
          :key="index"
          :task="task"
        />
      </div>
    </template>
    <template v-else>
      <draggable
        class="task-list rel flex flex-col items-center gap-[1.6rem] w-full"
        tag="div"
        v-model="filteredTasks"
      >
        <TaskItem
          class="cursor-move"
          v-for="(task, index) in filteredTasks"
          :key="index"
          :task="task"
        />
      </draggable>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
