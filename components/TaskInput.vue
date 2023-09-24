<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "@nuxtjs/composition-api";
import TaskService from "@/services/TaskService";
const router = useRouter();
const route = useRoute();

// Component
const props = defineProps({ placeholder: { type: String, required: false } });

// Event handling
const taskInputValue = ref(null);
const handleInputSubmit = () => {
  TaskService.addTask(taskInputValue.value);
  taskInputValue.value = "";
  if (route.value.path === "/") router.push("/tasks");
};

// Input Visual Change
const isInputFocused = ref(false);
const placeholder = computed(() => {
  if (props.placeholder) return props.placeholder;
  return isInputFocused.value
    ? `Try typing "Submit report by Friday 3 PM"`
    : `What's your plan for today?`;
});
</script>

<template>
  <div class="task-input flex flex-column gap-[.8rem] w-full max-w-[102.4rem]">
    <div
      class="task-input__main flex items-center gap-[.8rem] p-[1.6rem] rounded-[.4rem] bg-gray-100 focus:ring-1 focus:ring-primary"
      :class="{ 'shadow-md': props.placeholder }"
    >
      <Transition>
        <font-awesome-icon
          class="task-input__icon absolute w-[2rem] h-[2rem]"
          icon="fa-solid fa-plus"
          v-if="!isInputFocused"
        />
        <div
          class="absolute w-[2rem] h-[2rem] rounded-full border-2 border-gray-400"
          v-else
        />
      </Transition>

      <form
        class="task-input__input flex-1 text-sm h-full ml-[2.8rem]"
        @submit.prevent="handleInputSubmit"
      >
        <input
          class="w-full bg-gray-100 outline-none"
          type="text"
          :placeholder="placeholder"
          v-model="taskInputValue"
          @blur="isInputFocused = false"
          @focus="isInputFocused = true"
        />
      </form>
    </div>
    <div class="task-input__instruction text-xs text-gray-400">
      Press
      <span
        class="transition-[color] duration-[320ms]"
        :class="{ 'text-pink': !isInputFocused }"
        >enter</span
      >
      to add task
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";

.task-input__icon path {
  fill: $gray-400;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 150ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
