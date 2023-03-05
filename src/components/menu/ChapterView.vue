<script setup>
import SheduleIcon from "../icons/SheduleIcon.vue";
import TaskIcon from "../icons/TaskIcon.vue";
import SettingsIcon from "../icons/SettingsIcon.vue";
import { ref } from "vue";

const chapterProps = defineProps({
  name: String,
  icon: String,
});

const colorRef = ref();
let tasks = ref(false);
let shedulde = ref(false);
let settings = ref(false);

function changeColor() {
  colorRef.value.changeColor();
}

function setIcon() {
  switch (chapterProps.icon) {
    case "task":
      tasks.value = true;
      break;
    case "shedulde":
      shedulde.value = true;
      break;
    case "settings":
      settings.value = true;
      break;

    default:
      break;
  }
}
setIcon();
</script>
<template>
  <div
    class="chapter_group"
    @mouseenter="changeColor"
    @mouseleave="changeColor"
  >
    <shedule-icon ref="colorRef" v-if="shedulde" />
    <task-icon ref="colorRef" v-if="tasks" />
    <settings-icon ref="colorRef" v-if="settings" />
    <p class="chapter_name">{{ chapterProps.name }}</p>
  </div>
</template>

<style>
.chapter_group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 30px;
  gap: 20px;
  cursor: pointer;
}
.chapter_group:hover .chapter_name {
  color: #ca8bfe;
}
</style>
