<script setup>
import ColoredCircle from "../ColoredCircle.vue";
import checkAddon from "../addons/CheckAddon.vue";
import { computed } from "vue";

//init Props
const dataProps = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
const data = computed(() => dataProps);
</script>
<template>
  <div class="task">
    <div class="task_item">
      <colored-circle :color="data.color" />
      <div class="list_item">{{ data.name }}</div>
    </div>
    <div class="task_item">
      <div class="list_item">{{ data.time }}</div>
      <check-addon />
    </div>
  </div>
</template>

<style scoped>
.task {
  width: 70%;
  height: 30px;
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
.task_item {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  gap: 10px;
}
.list_item {
  font-size: 1.3em;
  font-weight: 700;
  color: #7e7e7e;
}
.task_item:nth-child(1) {
  justify-content: flex-start;
  margin-left: 5px;
  gap: 40px;
}
.task_item:nth-child(2) {
  justify-content: flex-end;
  gap: 40px;
  margin-right: 5px;
}
</style>
