<script setup>
import { ref } from "vue";
import ColoredCircle from "./ColoredCircle.vue";
import ChapterView from "./menu/ChapterView.vue";
import PersonView from "./menu/PersonView.vue";
import CreateGroup from "./menu/CreateGroup.vue";
import { useGroupStore } from "../stores/group";
import { storeToRefs } from "pinia";
//get Task group list from Store
const store = useGroupStore();
const { group } = storeToRefs(store);
const showGroup = ref(false);
function onShowModal(el) {
  showGroup.value = el;
  console.log(el);
}
</script>

<template>
  <div class="todo">
    <div class="todo_person">
      <person-view />
      <div class="todo_item">
        <div class="segment"></div>
      </div>
    </div>
    <div class="todo_menu">
      <div class="todo_chapter">
        <chapter-view name="Today Tasks" icon="task" />
        <div class="chapter_list">
          <div
            class="chapter_create"
            v-for="(item, index) in group"
            :key="index"
          >
            <colored-circle :color="item.color" />
            <p class="task_item">{{ item.name }}</p>
          </div>
          <div class="chapter_create">
            <img
              src="../assets/plus.png"
              height="16"
              alt="addIcon"
              class="create_icon"
            />
            <p class="create_text" @click="onShowModal(true)">Add group</p>
            <create-group
              v-if="showGroup"
              class="task_group"
              @show="onShowModal"
            />
          </div>
        </div>
      </div>
      <div class="todo_chapter">
        <chapter-view name="Sheduled tasks" icon="shedulde" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.ttf");
}
.todo {
  min-height: 100vh;
  background-color: #fff;
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  flex-basis: 15%;
  min-width: 235px;
  font-family: "Montserrat", sans-serif;
  padding: 0px 15px;
}
.svg {
  width: 20px;
  height: 20px;
}

.chapter_create {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin: 0px 0px 0px 75px;
  border-right: 2px solid #fff;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.task_item {
  font-weight: bold;
}
.create_text {
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: rgb(174, 174, 174);
}
.chapter_create:hover {
  border-right: 2px solid #ca8bfe;
}
.chapter_create:hover .create_icon {
  transform: scale(1.2);
}
.chapter_create:hover .create_text {
  color: rgb(153, 153, 153);
}
.create_icon {
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.todo_person {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.todo_item {
  width: 100%;
  display: flex;
  justify-content: center;
}
.segment {
  height: 3px;
  width: 70%;
  background-color: #ca8bfe;
  margin: 2% 0 15% 0;
}
.task_group {
  animation: TaskGroup 2.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes TaskGroup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
