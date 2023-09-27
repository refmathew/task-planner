<script setup>
import { ref, computed } from "@nuxtjs/composition-api";

// Components
const props = defineProps({
  userName: { type: String, required: true },
  progress: { type: Number, required: true },
  recommendations: { type: Array, required: false }, // for unfinished
});

//  Progress bar
const progressWidthStyle = computed(() => {
  return { width: props.progress + "%" };
});

// Hide recommendations
const shouldHideRecommendations = ref(false);
const handleRecommendationHide = () => {
  shouldHideRecommendations.value = !shouldHideRecommendations.value;
};
</script>

<template>
  <div
    class="profile-sidebar-progress flex flex-col p-16 gap-16 shadow-sm rounded bg-white leading-tight"
  >
    <!-- Heading -->
    <div class="profile-sidebar-progress__main flex flex-col gap-4">
      <div
        class="profile-sidebar-progress__main-heading flex justify-between items-end"
      >
        <div
          class="profile-sidebar-progress__title font-semibold text-gray-700"
        >
          Profile Completion
        </div>
        <div
          class="profile-sidebar-progress__progress-percent text-xs"
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
      <div
        class="profile-sidebar-progress__progress-bar relative h-[.6rem] rounded-full bg-gray-200"
      >
        <div
          class="absolute h-[.6rem] rounded-full"
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
    </div>

    <!-- Body -->
    <!-- 100% progress -->
    <div
      class="profile-sidebar-progress__body flex flex-col items-center gap-16"
      v-if="progress === 100"
    >
      <div class="profile-sidebar-progress__heading font-semibold text-success">
        Well done, {{ userName }}!
      </div>
      <img
        class="profile-sidebar-progress__icon w-64"
        src="/icon--achievement.png"
      />
      <div class="profile-sidebar-progress__text text-gray-700">
        You have one of the strongest professional profile in our talent pool.
        Expect progress on your application at any time soon.
      </div>
    </div>

    <!-- Less than 100% progress -->
    <div
      class="profile-sidebar-progress__body flex flex-col gap-16 text-left text-gray-700"
      v-else
    >
      <button
        class="profile-sidebar-progress__hide-recommendations flex items-center gap-8"
        @click="handleRecommendationHide"
      >
        <font-awesome-icon
          class="transition-transform"
          :class="[{ '-rotate-180': shouldHideRecommendations }]"
          icon="fa-solid fa-chevron-down"
        />
        Hide Recommendations
      </button>
      <div
        class="profile-sidebar-progress__recommendations flex flex-col gap-16 pl-24"
        v-if="!shouldHideRecommendations"
      >
        <div class="profile-sidebar-progress__recommendation-guide m-l">
          Fill-up the following items to strengthen your profile. This can help
          us matching your profile and increase your chances of landing into
          your desired role.
        </div>
        <div
          class="profile-sidebar-progress__recommendations flex flex-col gap-8"
        >
          <div
            class="profile-sidebar-progress__recommendation flex gap-6"
            v-for="(recommendation, index) in recommendations"
            :key="index"
          >
            <div
              class="basis-[1.2rem] grow-0 shrink-0 h-[1.2rem] rounded-full !border border-solid border-gray-700"
            ></div>
            <div class="profile-sidebar-progress__recommendation-main">
              <span class="profile-sidebar-progress__recommendation-action">
                {{ recommendation.action }}
              </span>
              <span
                class="profile-sidebar-progress__recommendation-subject text-primary"
              >
                {{ recommendation.subject }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
