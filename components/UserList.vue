<script setup>
// Component
defineProps({
  users: { type: Array, required: true },
  currentUser: { type: String, required: false },
});
defineEmits(["userPick"]);
</script>

<template>
  <div class="user-dropdown__list h-[25.6rem] flex flex-col">
    <button
      class="user-dropdown__list-item px-[1.6rem] py-[.8rem] flex items-center gap-[.8rem] text-gray-700 transition-colors hover:bg-gray-200"
      :class="[{ '!bg-primary/50 text-white': user.name === currentUser }]"
      v-for="(user, index) in users"
      :key="index"
      @click="$emit('userPick', user)"
    >
      <img
        class="user-dropdown__user-avatar w-[2rem] h-[2rem] rounded-full overflow-hidden"
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}&backgroundColor=0fbcf9,6f42c1,e83e8c,ffc048,0be881,36b9cc,34495e,27ae60,2ecc71,2980b9`"
        :alt="user.name"
      />
      <div
        class="user-dropdown__user-name text-sm"
        alt="User Avatar"
        v-text="user.name"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
