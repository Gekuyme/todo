<script setup>
import { ref } from "vue";
import { useGroupStore } from "../../stores/group";
const store = useGroupStore();

const pickedColor = ref("#000000");
const groupName = ref();
const emit = defineEmits(["show"]);
function checkColor() {
  emit("show", false);
  store.addToGroup({
    name: groupName.value,
    color: pickedColor.value,
  });
}
</script>
<template>
  <div class="group">
    <div class="group_items">
      <input type="color" class="group_color" v-model="pickedColor" />
      <input
        type="text"
        alt="name"
        class="group_name"
        placeholder="Type..."
        v-model="groupName"
      />
    </div>
    <button @click="checkColor" class="btn">Add filter</button>
  </div>
</template>
<style scoped>
.group {
  width: 40%;
  min-width: 300px;
  height: 150px;
  background-color: white;
  position: absolute;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.group_items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn {
  width: 150px;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #fff;
  border: 0;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  cursor: pointer;
  padding: 10px;
}
.btn:hover {
  box-shadow: 7px 7px 10px 2px rgba(0, 0, 0, 0.25);
  border-right: 2px solid #ca8bfe;
  border-bottom: 2px solid #ca8bfe;
}
.group_color {
  border: 0;
  background-color: #fff;
  outline: 0;
}
.group_name {
  width: 40%;
  height: 30px;
  margin: 0px;
  border-radius: 15px;
  border: 0;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px 60px;
  box-shadow: 0px 0px 5px 3px rgba(38, 38, 38, 0.2);
}
.group_name:focus {
  outline: 0;
  box-shadow: 0px 0px 15px 7px rgba(38, 38, 38, 0.2);
  transform: scale(1.02);
}
</style>
