<script setup>
defineProps({ user: { type: Object, required: true } });
</script>

<template>
  <header
    class="header flex items-center justify-between w-full px-24 py-16 text-sm bg-white shadow-sm header"
  >
    <!-- nav -->
    <nav class="header__nav flex items-center gap-32">
      <a class="header__brand w-[11rem] mr-32" href="#">
        <img
          src="https://go.team/wp-content/uploads/2022/05/goteam-logo-dark.png"
          alt="GoTeam brand"
        />
      </a>
      <a
        class="text-gray-500 hover:!text-primary hover:!no-underline transition-colors"
        href="#"
        >Careers</a
      >
      <a
        class="text-gray-500 hover:!text-primary hover:!no-underline transition-colors"
        href="#"
        >Find your Role</a
      >
    </nav>

    <!-- search -->
    <div
      class="header__search absolute left-[50%] -translate-x-[50%] flex items-center !p-4 rounded-full !border border-solid border-gray-300"
    >
      <input
        class="min-w-[30.4rem] pl-16 outline-none text-secondary placeholder:text-gray-300 text-md"
        type="text"
        placeholder="Type for job title or role"
      />
      <button
        class="header__search-button flex items-center gap-4 px-16 py-8 text-sm text-white rounded-fullbg-primary"
        type="submit"
      >
        <font-awesome-icon icon="fa-solid fa-search" />
        Search
      </button>
    </div>

    <!-- right side -->
    <button class="header__user flex items-center gap-8">
      <div class="flex flex-col items-end">
        <div class="header__user-name !font-medium text-secondary">
          {{ user.name.first + " " + user.name.last }}
        </div>
        <div
          class="header__user-email text-primary"
          :href="`mailto:${user.email}`"
        >
          {{ user.email }}
        </div>
      </div>
      <div class="flex items-center gap-8">
        <img
          class="header__user-avatar w-[3.2rem] h-[3.2rem] overflow-hidden !border border-solid border-gray-300 rounded-full"
          :src="user.profile.imgSrc"
          alt="User Avatar"
        />
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </div>
    </button>
  </header>
</template>
v

<style lang="scss" scoped>
@import "@/assets/css/variables";

.header__search-button :deep(svg path) {
  fill: $white;
}

font-awesome-icon :deep(path) {
  fill: $gray-300;
}
</style>
