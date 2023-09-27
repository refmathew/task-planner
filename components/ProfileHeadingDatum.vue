<script setup>
import { computed } from "@nuxtjs/composition-api";

const props = defineProps({
  datum: { type: String, required: true },
  iconName: { type: String, required: true },
  isSolid: { type: Boolean, required: false, default: true }, // variant of icon
  color: { type: String, required: false },
});

const icon = computed(() => {
  return props.isSolid
    ? `fa-solid fa-${props.iconName}`
    : `fa-regular fa-${props.iconName}`;
});
</script>

<template>
  <div class="profile-page__degree flex items-center gap-8 text-gray-700">
    <font-awesome-icon
      class="w-[2rem] grid place-items-center text-md"
      :icon="icon"
    />
    <span :class="{ 'text-success': color }"> {{ datum }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
