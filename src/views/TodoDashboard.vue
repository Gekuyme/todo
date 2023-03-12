<script setup>
import TodoMain from "../components/TodoMain.vue";
import TodoMenu from "../components/TodoMenu.vue";
</script>

<template>
  <div class="dashboard">
    <todo-menu />
    <todo-main />
  </div>
</template>
<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #a18aff;
  display: flex;
}
</style>
