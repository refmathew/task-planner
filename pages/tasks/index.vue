<script setup>
import { ref } from "vue";
import TaskService from "@/services/TaskService.js";
import UserService from "@/services/UserService";
TaskService.fetchTasks();
UserService.fetchUsers();

// Filter names
const filters = ["all", "important", "done"];

// Search
const searchInputValue = ref("");
const handleSearchInput = (input) => {
  searchInputValue.value = input;
};
</script>

<template>
  <div
    class="tasks relative flex flex-col items-center gap-[3.2rem] min-h-screen py-[12.8rem] px-[9.6rem]"
  >
    <nav
      class="tasks__heading flex justify-between items-center w-full max-w-[144rem]"
    >
      <NuxtLink
        class="tasks__home-link font-medium text-2xl !text-secondary !no-underline"
        to="/"
        >Task Planner</NuxtLink
      >
      <ul class="task__filters flex">
        <li
          class="task__filter"
          v-for="(filter, index) in filters"
          :key="index"
        >
          <TaskFilter :filter-name="filter" />
        </li>
      </ul>
    </nav>
    <TaskSearch @searchInput="handleSearchInput" />
    <TaskList :search-input-value="searchInputValue" />
    <div
      class="tasks__search-bar fixed bottom-[1.6rem] left-0 right-0 flex justify-center px-[12.8rem]"
    >
      <TaskInput placeholder="Add a task..." />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
