<script setup>
const emit = defineEmits(["showmodal"]);
function modal(val) {
  emit("showmodal", val);
}
</script>

<template>
  <div class="task">
    <input
      type="text"
      class="task_create"
      placeholder="Create task..."
      @focus="modal(true)"
      @keyup.enter="modal()"
    />
  </div>
</template>

<style scoped>
.task {
  width: 100%;
  display: flex;
  justify-content: center;
}
.task_create {
  width: 70%;
  height: 30px;
  margin: 0px;
  border-radius: 15px;
  border: 0;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px 60px;
}
.task_create:focus {
  outline: 0;
  box-shadow: 0px 0px 15px 7px rgba(38, 38, 38, 0.2);
  transform: scale(1.02);
}
</style>
