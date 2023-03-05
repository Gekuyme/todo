import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([]);
  const filtredTasks = computed(() =>
    tasks.value.filter((task) => task.time == Date.now())
  );
  function createTask(el) {
    //Converte task to JSON for push to backend
    const data = JSON.stringify(el);

    //push element to backend and state array
    axios
      .post("https:127.0.0.1:8000", data)
      .then((res) =>
        res.data == 200 ? tasks.value.push(el) : createTask(data)
      );
  }

  return tasks, createTask, filtredTasks;
});
