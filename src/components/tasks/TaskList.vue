<script setup>
import TaskView from "./TaskView.vue";
let data = [
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
];
function show(val) {
  console.log(typeof val);
}
</script>
<template>
  <div class="list">
    <task-view
      v-for="(item, index) in data"
      :key="index"
      v-bind="item"
      @click="show(item)"
    />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
