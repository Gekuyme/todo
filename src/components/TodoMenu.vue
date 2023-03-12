<script setup>
import ColoredCircle from "./ColoredCircle.vue";
import ChapterView from "./menu/ChapterView.vue";
import PersonView from "./menu/PersonView.vue";
//create tasks group list
const data = [
  {
    name: "Personal",
    color: "#FD99AF",
  },
  {
    name: "Freelance",
    color: "#3FD4F4",
  },
  {
    name: "Work",
    color: "#FAC608",
  },
];

//person info
</script>

<!-- <div v-for="(item, index) in taskGroup" :key="index" class="">
  <colored-circle :color="item.color" />
  <span>{{ item.name }}</span>
</div> -->

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
            v-for="(item, index) in data"
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
            <p class="create_text">Add filter</p>
          </div>
        </div>
      </div>
      <div class="todo_chapter">
        <chapter-view name="Sheduled tasks" icon="shedulde" />
      </div>
      <div class="todo_chapter">
        <chapter-view name="Settings" icon="settings" />
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
}
.task_item {
  font-weight: bold;
}
.create_text {
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: rgb(174, 174, 174);
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
</style>
