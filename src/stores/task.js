import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import axios from "axios";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([
    {
      name: "Working home",
      color: "#FD99AF",
      time: "15:30",
    },
    {
      name: "Buy fruits",
      color: "#3FD4F4",
      time: "17:30",
    },
  ]);
  const filtredTasks = computed(() =>
    tasks.value.filter((task) => task.time == Date.now())
  );
  function addTask(el) {
    //Converte task to JSON for push to backend
    // const data = JSON.stringify(el);
    let data = {
      name: "",
      color: "",
      time: "",
    };
    data.name = String(el.name);
    data.color = String(el.color);
    data.time = String(el.time);

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
