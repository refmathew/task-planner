<script setup>
import { computed } from "vue";
import { useRoute } from "@nuxtjs/composition-api";
const route = useRoute();

// Component
const props = defineProps({
  link: { type: String, required: true },
  title: { type: String, required: true },
  iconName: { type: String, required: false },
  iconSvg: { type: String, required: false },
  notifications: { type: Number, required: false, default: 0 },
});

// Icon
const icon = computed(() => {
  return `fa-regular fa-${props.iconName}`;
});
</script>

<template>
  <a
    class="sidebar-link group flex justify-stretch items-center w-full min-w-[16rem] gap-16 p-16 rounded text-gray-700 !no-underline hover:bg-gray-100 hover:!text-primary transition-colors"
    href="v#"
    :class="[{ '!bg-gray-100': link === route.path }]"
  >
    <!-- Icon -->
    <div
      class="sidebar-link__icon grid place-items-center w-[2rem] transition-colors"
      :class="[{ '!text-primary': link === route.path }]"
      v-if="iconName"
    >
      <font-awesome-icon class="w-[1.6rem] h-[1.6rem]" :icon="icon" />
    </div>
    <div
      class="sidebar-link__icon grid place-items-center w-[2rem] h-[1.6rem]"
      :class="[{ '!text-primary': link === route.path }]"
      v-else
      v-html="iconSvg"
    />

    <!-- Text -->
    <div
      class="sidebar-link__text flex items-center flex-1 gap-8 transition-colors"
      :class="[{ '!text-primary': link === route.path }]"
    >
      {{ title }}
      <span
        class="grid place-items-center w-[2.4rem] h-[2.4rem] rounded-[.4rem] bg-red text-white"
        v-if="notifications"
      >
        {{ notifications }}
      </span>
    </div>

    <!-- Chevron -->
    <font-awesome-icon
      class="sidebar-link__chevron w-[1.3rem] h-[1.3rem] transition-colors"
      :class="[{ '!text-primary': link === route.path }]"
      icon=" fa-solid fa-chevron-right"
      v-if="route.path === link"
    />
  </a>
</template>

<style lang="scss">
@import "@/assets/css/variables";

.sidebar-link {
  // & svg path {
  //   fill: $gray-700;
  // }

  // &:hover .sidebar-link__icon svg path {
  //   fill: $primary;
  // }

  // &--active {
  //   background-color: $gray-100;

  //   .sidebar-link__icon svg path,
  //   .sidebar-link__chevron path {
  //     fill: $primary;
  //   }

  //   .sidebar-link__text {
  //     color: $primary !important;
  //   }
  // }
}
</style>
