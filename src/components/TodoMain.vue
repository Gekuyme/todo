<script setup>
import { ref } from "vue";
import CreateTask from "./tasks/CreateTask.vue";
import TaskModal from "./tasks/TaskModal.vue";
import TaskList from "./tasks/TaskList.vue";

let modal = ref(false);
// eslint-disable-next-line no-unused-vars
function onShowModal(val) {
  modal.value = val;
}
</script>

<template>
  <div class="main">
    <create-task @showmodal="onShowModal" />
    <div class="task_modal">
      <task-modal v-if="modal" class="task" @showmodal="onShowModal" />
    </div>
    <task-list class="task" />
  </div>
</template>

<style scoped>
.main {
  flex-basis: 85%;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.task {
  animation: task 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.task_modal {
  min-height: 50px;
}
@keyframes task {
  0% {
    transform: translateY(-100px);
  }
}
</style>
