<script setup>
import { ref } from "vue";
import TodoMain from "../components/TodoMain.vue";
import TodoMenu from "../components/TodoMenu.vue";

const menu = ref(true);
const btn = ref(false);
function onShowMenu(val) {
  if (val == true) {
    btn.value = false;
    menu.value = true;
  } else {
    menu.value = false;
    btn.value = true;
  }
}
</script>

<template>
  <div class="dashboard">
    <todo-menu v-if="menu" @showMenu="onShowMenu" class="dashboard_item" />
    <img
      src="../assets/menu.png"
      alt="menu"
      class="btn"
      v-if="btn"
      @click="onShowMenu(true)"
    />
    <todo-main class="dashboard_item" />
  </div>
</template>
<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #a18aff;
  display: flex;
}
.btn {
  display: none;
  height: 36px;
  width: 36px;
  position: relative;
  top: 30px;
  left: 5%;
  transition: all 0.575s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.btn:hover {
  transform: rotate(90deg);
}
@media screen and (max-width: 750px) {
  .btn {
    display: block;
  }
  .dashboard_item:nth-child(1) {
    position: absolute;
    z-index: 1;
  }
}
</style>
