<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  // The data
  fields: {
    type: Array,
    required: true,
  },
  hasBottomBorder: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>

<template>
  <div
    class="profile-section group relative flex flex-col gap-20 p-24 border-b border-solid border-gray-100"
  >
    <div class="profile-section__title font-bold text-md text-secondary">
      {{ title }}
    </div>
    <ProfileSectionField
      v-for="(field, index) in fields"
      :key="index"
      :field="field"
    />
    <button
      class="profile-section__edit-button absolute opacity-0 right-24 top-24 text-gray-600 group-hover:!opacity-100"
    >
      <font-awesome-icon icon="fa-regular fa-pen-to-square" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
