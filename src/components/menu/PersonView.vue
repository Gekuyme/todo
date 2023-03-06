<script setup>
import avatar from "../../assets/avatar.webp";
const person = {
  name: "Garry",
  img: avatar,
};
</script>

<template>
  <div class="person">
    <div class="person_item">
      <img :src="person.img" alt="avatar" height="64" class="person_img" />
    </div>
    <div class="person_item">
      <p class="person_title">Do-it</p>
      <p class="person_name">{{ person.name }}</p>
    </div>
  </div>
</template>

<style>
.person {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 20px 30px 30px 30px;
  font-family: "Roboto", sans-serif;
}
.person_img {
  border-radius: 50%;
}
.person_item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.person_item:nth-child(2) {
  flex-direction: column;
  align-items: flex-start;
}
.person_title {
  margin: 0;
  font-size: 1.2em;
}
.person_name {
  margin: 0;
  color: #a18aff;
  font-size: 1.3em;
}
</style>
