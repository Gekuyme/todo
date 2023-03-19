import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import axios from "axios";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([]);
  const filtredTasks = computed(() =>
    tasks.value.sort((a, b) => a.fullDate - b.fullDate)
  );
  function addTask(el) {
    //Converte task to JSON for push to backend
    // const data = JSON.stringify(el);
    let data = {
      name: "",
      color: "",
      time: new Date(),
      fullDate: new Date(),
    };
    data.fullDate = el.time;
    let current = el.time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    data.name = String(el.name);
    data.color = String(el.color);
    data.time = current;

    tasks.value.push(data);
    //push element to backend and state array
    // axios
    //   .post("https:127.0.0.1:8000", data)
    //   .then((res) =>
    //     res.data == 200 ? tasks.value.push(el) : createTask(data)
    //   );
  }

  return { tasks, addTask, filtredTasks };
});
