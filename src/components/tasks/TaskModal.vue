<script setup>
import { ref } from "vue";
import ColoredCircle from "../ColoredCircle.vue";
import checkAddon from "../addons/CheckAddon.vue";

let selected = ref("Personal");
let color = ref("#FD99AF");

function selectedColor(val) {
  switch (val) {
    case "Personal":
      color.value = "#FD99AF";
      break;
    case "Freelance":
      color.value = "#3FD4F4";
      break;
    case "Work":
      color.value = "#FAC608";
      break;
    default:
      color.value = "A18AFF";
      break;
  }
  console.log(selected.value);
}

const emit = defineEmits(["showmodal"]);

function closeModal() {
  setTimeout(() => {
    emit("showmodal", false);
  }, 775);
}
</script>

<template>
  <div class="modal">
    <colored-circle :color="color" />
    <select
      name=""
      id=""
      class="dropdown"
      v-model="selected"
      @change="selectedColor(selected)"
    >
      <option value="Personal" class="option">Personal</option>
      <option value="Freelance" class="option">Freelance</option>
      <option value="Work" class="option">Work</option>
    </select>
    <input type="time" class="time" />
    <div class="close" @click="closeModal">
      <check-addon />
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 20%;
  min-width: 300px;
  height: 50px;
  background-color: white;
  position: relative;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.dropdown {
  height: 50%;
  border: 0px;
  outline: 0;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  scroll-behavior: smooth;
}
.dropdown:focus {
  outline: 0;
  box-shadow: 0px 0px 13px 4px rgb(231, 231, 231);
}
.time {
  border: 0px;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.time:focus {
  outline: 0;
  box-shadow: 0px 0px 13px 4px rgb(231, 231, 231);
}
.option:focus {
  outline: 0;
  border: 0;
}
.close {
  cursor: pointer;
}
</style>
