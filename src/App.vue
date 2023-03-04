<script setup>
import TodoMenu from "./components/TodoMenu.vue";
import TodoMain from "./components/TodoMain.vue";
</script>

<template>
  <main class="app">
    <TodoMenu />
    <TodoMain />
  </main>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #a18aff;
  display: flex;
}
</style>
