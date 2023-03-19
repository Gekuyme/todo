import { ref } from "vue";
import { defineStore } from "pinia";
export const useGroupStore = defineStore("group", () => {
  const group = ref([
    {
      name: "Personal",
      color: "#FD99AF",
    },
    {
      name: "Freelance",
      color: "#3FD4F4",
    },
    {
      name: "Work",
      color: "#FAC608",
    },
  ]);
  function addToGroup(el) {
    group.value.push(el);
  }
  return { group, addToGroup };
});
