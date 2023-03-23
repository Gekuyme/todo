<script setup>
import { computed } from "vue";

const defineColor = defineProps({
  color: String,
});

let color = computed(() => "background-color:" + defineColor.color + ";");
</script>

<template>
  <div class="circle" :style="color"></div>
</template>

<style scoped>
.circle {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  border-radius: 100%;
  border: 0px;
}
</style>
