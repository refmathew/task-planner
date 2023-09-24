<script setup>
import { onMounted, ref } from "vue";

// Component
const props = defineProps({ currentTask: { type: String, required: true } });
defineEmits(["cancel", "save"]);

// Task input value
const taskInputValue = ref("");
taskInputValue.value = props.currentTask;

// Focus on input
const $taskInput = ref(null);
onMounted(() => {
  $taskInput.value.focus();
});
</script>

<template>
  <CustomModal
    color="primary"
    @cancel="$emit('cancel')"
    @ctaClick="$emit('save', taskInputValue)"
  >
    <template #icon>
      <font-awesome-icon
        class="edit-modal__icon w-[2rem] h-[2rem]"
        icon="fa-solid fa-pen-to-square"
      />
    </template>

    <template #heading>Edit Task</template>

    <template #body>
      <input
        class="w-full outline-none border border-solid border-gray-300 p-[.8rem] selection:bg-primary selection:text-white"
        ref="$taskInput"
        type="text"
        v-model="taskInputValue"
        @keyup.enter="$emit('save', taskInputValue)"
      />
    </template>

    <template #cta>Save</template>
  </CustomModal>
</template>

<style lang="scss">
@import "@/assets/css/variables";

.edit-modal__icon path {
  fill: $primary;
}
</style>
