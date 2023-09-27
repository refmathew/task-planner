<script setup></script>

<template>
  <div class="profile-sidebar-video shadow-sm rounded bg-white">
    <div class="profile-sidebar-video__title p-16 font-semibold text-secondary">
      Video Introduction
    </div>
    <button class="profile-sidebar-video__main relative block">
      <img
        class="profile-sidebar-video__thumbnail"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <button
        class="profile-sidebar-video__play-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] text-white"
      >
        <font-awesome-icon icon="fa-solid fa-circle-play" />
      </button>
      <div
        class="profile-sidebar-video__timestamp absolute bottom-16 right-16 !p-6 rounded-[.6rem] bg-secondary text-white"
      >
        1:55
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
