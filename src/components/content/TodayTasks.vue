<script setup>
import { ref } from "vue";
import CreateTask from "../tasks/CreateTask.vue";
import TaskModal from "../tasks/TaskModal.vue";
import TaskList from "../tasks/TaskList.vue";
import { useTaskStore } from "../../stores/task";

const store = useTaskStore();
let modal = ref(false);
let getText = ref();
let task = {
  name: "",
  color: "",
  time: new Date(),
};
// eslint-disable-next-line no-unused-vars
function onShowModal(val) {
  modal.value = val;
}
// take task title from child component and add task to store
function getTitle(data) {
  task.name = data.value;
  store.addTask(task);
}
//take task color and time from child component and call child function to get task title
function onCreateTask(data) {
  task.color = data.group.value;
  task.time = data.time;
  getText.value.pushText();
}
</script>
<template>
  <div class="today">
    <create-task @showmodal="onShowModal" ref="getText" @pushText="getTitle" />
    <div class="task_modal">
      <task-modal
        v-if="modal"
        class="task"
        @showModal="onShowModal"
        @createTask="onCreateTask"
      />
    </div>
    <task-list class="task" />
  </div>
</template>
<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.ttf");
}
.today {
  flex-basis: 85%;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: "Montserrat", sans-serif;
}
.task {
  animation: task 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.task_modal {
  min-height: 50px;
  transform: translateY(10px);
}
@keyframes task {
  0% {
    transform: translateY(-100px);
  }
}
</style>
