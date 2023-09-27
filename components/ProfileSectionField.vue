<script setup>
defineProps({
  field: { type: Object, required: true },
});
</script>

<template>
  <div class="profile-section-field flex w-[64%] gap-16">
    <div class="profile-section-field__title flex-1 text-gray-600">
      {{ field.title }}
    </div>

    <!-- Data -->
    <!-- no data -->
    <div
      class="profile-section-field__datum flex-1 text-secondary"
      v-if="!field.datum"
    >
      -
    </div>

    <!-- normal data -->
    <div
      class="profile-section-field__datum flex-1"
      :class="[
        {
          '!text-success': field.isTextGreen,
          'text-secondary': !field.isTextGreen,
        },
      ]"
      v-else
    >
      {{ field.datum }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
