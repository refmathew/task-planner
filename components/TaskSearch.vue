<script setup>
import { ref } from "vue";
import { useDebounceFn } from "@vueuse/core";

// Component
const emit = defineEmits(["searchInput"]);

// Search
const searchInputValue = ref("");
const handleSearchInput = useDebounceFn(() => {
  emit("searchInput", searchInputValue.value.trim());
}, 512);
</script>

<template>
  <div
    class="task-search flex gap-[.8rem] w-full max-w-[144rem] p-[1.6rem] py-[.8rem] !border border-solid border-gray-4000 rounded-full"
  >
    <font-awesome-icon
      class="task-search__icon w-[1.4rem] h-[1.4rem]"
      icon="fa-solid fa-search"
    />
    <input
      class="flex-1 text-sm font-medium text-gray-700 outline-none search__input placeholder:text-gray-400"
      type="text"
      placeholder="Search"
      v-model="searchInputValue"
      @input="handleSearchInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.task-search__icon :deep(path) {
  fill: #bdc1cc;
}
</style>
