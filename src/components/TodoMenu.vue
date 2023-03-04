<script setup>
// import ColoredCircle from "./ColoredCircle.vue";
// let taskGroup = [];
import sheduledIcon from "./icons/SheduleIcon.vue";
</script>

<!-- <div v-for="(item, index) in taskGroup" :key="index" class="">
  <colored-circle :color="item.color" />
  <span>{{ item.name }}</span>
</div> -->

<template>
  <div class="todo">
    <div class="todo_person">
      <img src="" alt="" />
      <div class="person_info">
        <!-- <p>{{ person.name }}</p> -->
      </div>
      <div class="segment"></div>
    </div>
    <div class="todo_menu">
      <div class="todo_chapter">
        <div class="chapter_group">
          <img src="" alt="" class="chapter_icon" />
          <p class="chapter_name">Today tasks</p>
        </div>
        <div class="chapter_list"></div>
        <div class="chapter_create">
          <img src="" alt="" class="create_icon" />
          <p class="create_text">Add filter</p>
        </div>
      </div>
      <div class="todo_chapter">
        <div class="chapter_group">
          <sheduledIcon />
          <p class="chapter_name">Sheduled tasks</p>
        </div>
      </div>
      <div class="todo_chapter">
        <div class="chapter_group">
          <img src="" alt="" class="chapter_icon" />
          <p class="chapter_name">Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo {
  min-height: 100vh;
  background-color: #fff;
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  flex-basis: 15%;
  min-width: 235px;
}
.svg {
  width: 20px;
  height: 20px;
}
.chapter_group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 10px;
  gap: 20px;
}
</style>
