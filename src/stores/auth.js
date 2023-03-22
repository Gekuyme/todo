import { ref } from "vue";
import { defineStore } from "pinia";
export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref({
      name: "",
      password: "",
    });
    function createUser(el) {
      user.value.name = el.name;
      user.value.password = el.password;
    }
    return { user, createUser };
  },
  {
    persist: true,
  }
);
