import { defineStore } from "pinia";
import { ref } from "@nuxtjs/composition-api";

const useUserStore = defineStore("user", () => {
  const users = ref([]);

  return { users };
});

export default useUserStore;
