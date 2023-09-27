<script setup>
import useTaskStore from "@/store/task-store.js";
const taskStore = useTaskStore();

// Component
const props = defineProps({
  filterName: {
    type: String,
    required: true,
  },
});

// Event handling
const handleButtonClick = () => {
  taskStore.activeTask = props.filterName;
};
</script>

<template>
  <button
    class="task-filter px-[1.6rem] py-[.4rem] rounded-[.4rem] text-md text-gray-500 transition-colors"
    :class="{ 'bg-gray-200': taskStore.activeTask === filterName }"
    @click="handleButtonClick"
  >
    {{ filterName[0].toUpperCase() + filterName.slice(1) }}
    <span class="task__count" v-if="filterName != 'all'"
      >({{
        filterName === "important"
          ? taskStore.importantTasks.length
          : taskStore.doneTasks.length
      }})</span
    >
  </button>
</template>

<style lang="scss" scoped></style>
