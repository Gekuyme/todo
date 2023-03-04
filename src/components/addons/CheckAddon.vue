<script setup>
import { ref } from "vue";
let showCheck = ref(false);
function check() {
  if (showCheck.value == true) {
    showCheck.value = false;
  } else {
    showCheck.value = true;
  }
}
</script>
<template>
  <div class="check" @click="check">
    <img
      src="../../assets/check.png"
      alt="check"
      v-if="showCheck"
      width="16"
      height="16"
      class="icon"
    />
  </div>
</template>

<style scoped>
.check {
  display: flex;
  min-width: 18px;
  min-height: 18px;
  justify-content: center;
  align-items: center;
  border: 2px solid #a18aff;
  padding: 3px;
  border-radius: 50%;
}
.icon {
  animation: Check 0.775s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes Check {
  0% {
    transform: scale(0.1);
  }
}
</style>
