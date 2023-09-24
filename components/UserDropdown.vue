<script setup>
import { onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import useUserStore from "../store/user-store";
const userStore = useUserStore();

// Component
defineProps({
  currentUser: { type: String, required: false },
});
const emit = defineEmits(["userPick", "close"]);

// Search
const searchInputValue = ref("");
const searchedUsers = ref([]);
const handleSearchInput = () => {
  searchedUsers.value = userStore.users.filter((user) =>
    user.name.toLowerCase().includes(searchInputValue.value.toLowerCase())
  );
};

// User pick event
const handleUserPick = (user) => {
  emit("userPick", user);
};

// Dropdown close
const $dropdown = ref(null);
onClickOutside($dropdown, () => {
  emit("close");
});

// Position
const left = ref("");
onMounted(() => {
  const width = $dropdown.value.getBoundingClientRect().width;
  left.value = `-${width / 10}rem`;
});
</script>

<template>
  <div
    class="user-dropdown absolute top-[1.6rem] z-50 shadow-lg rounded-[.4rem] bg-white flex flex-col gap-[.8rem]"
    :style="{ left: left }"
    ref="$dropdown"
  >
    <div
      class="user-dropdown__search !border border-solid border-gray-400 rounded-[.4rem] mx-[1.6rem] mt-[1.6rem] mb-[.8rem] p-[.8rem] flex items-center gap-[.8rem]"
    >
      <font-awesome-icon
        class="user-dropdown__search-icon w-[1.6rem] h-[1.6rem]"
        icon="fa-solid fa-plus"
      />
      <input
        class="user-dropdown__search-input text-xs text-gray-700 outline-none placeholder:text-gray-400"
        type="text"
        placeholder="Search Team Member"
        v-model="searchInputValue"
        @input="handleSearchInput"
      />
    </div>
    <perfect-scrollbar>
      <UserList
        v-show="searchInputValue"
        :users="searchedUsers"
        :current-user="currentUser"
        @userPick="handleUserPick"
      />
      <UserList
        v-show="!searchInputValue"
        :users="userStore.users"
        :current-user="currentUser"
        @userPick="handleUserPick"
      />
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss" scoped></style>
