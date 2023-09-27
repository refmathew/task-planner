<script setup>
import { computed } from "@nuxtjs/composition-api";

// Component
const props = defineProps({
  title: { type: String, required: true },
  iconName: { type: String, required: true },
  progress: { type: Number, required: true },
});

//  Progress bar
const progressWidthStyle = computed(() => {
  return { width: props.progress + "%" };
});
</script>

<template>
  <div class="profile-progress-reminder flex-1 flex gap-16">
    <div
      class="profile-progress-reminder__icon grid place-items-center w-[4rem] h-[4rem] rounded-full bg-gray-200"
    >
      <font-awesome-icon
        class="w-[1.6rem] h-[1.6rem] text-gray-700"
        :icon="`fa-regular fa-${iconName}`"
      />
    </div>
    <div class="profile-progress-reminder__main flex-1 flex flex-col gap-4">
      <div
        class="profile-progress-reminder__title font-bold text-gray-700"
        v-text="title"
      />
      <div
        class="profile-progress-reminder__progress-container flex items-center gap-8"
      >
        <div
          class="profile-progress-reminder__progress-bar relative flex-1 h-[.6rem] rounded-full bg-gray-200"
        >
          <div
            class="absolute h-full rounded-full"
            :class="[
              {
                'bg-danger': progress <= 50,
                'bg-warning': progress > 50 && progress <= 75,
                'bg-success': progress > 75 && progress <= 100,
              },
            ]"
            :style="[progressWidthStyle]"
          />
        </div>
        <div
          class="profile-progress-reminder__progress-percent"
          :class="[
            {
              'text-danger': progress <= 50,
              'text-warning': progress > 50 && progress <= 75,
              'text-success': progress > 75 && progress <= 100,
            },
          ]"
        >
          {{ progress + "%" }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
