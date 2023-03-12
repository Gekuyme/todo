<script setup>
function redirect() {
  let link = document.location.href;
  document.location.href = link + "home";
}
</script>
<template>
  <div class="view">
    <div class="view_item">
      <img src="../../assets/user.png" height="128px" alt="" />
    </div>
    <div class="view_item">
      <h1 class="view_title">Login</h1>
    </div>
    <div class="view_item">
      <input type="text" class="input" placeholder="Login" />
    </div>
    <div class="view_item">
      <input type="text" class="input" placeholder="Password" />
    </div>
    <div class="view_item">
      <input type="checkbox" class="check" />
      <p class="view_text">Remember me</p>
    </div>
    <div class="view_item">
      <button class="view_btn" @click="redirect">Login</button>
    </div>
  </div>
</template>
<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.ttf");
}
.view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  gap: 20px;
}
.view_item {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.view_title {
  color: #c79aeb;
}
.view_btn {
  width: 40%;
  height: 40px;
  box-shadow: 0px 0px 15px 7px rgba(72, 72, 72, 0.076);
  border: 0;
  background-image: linear-gradient(135deg, #efe5fa, #dbb6fa);
  outline: 1px solid #dbb6fa;
  transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
}
.view_btn:hover {
  box-shadow: 0px 0px 15px 7px rgba(72, 72, 72, 0.2);
}
.input {
  width: 70%;
  height: 40px;
  padding: 0 0 0 10px;
  border: 0;
  box-shadow: 0px 0px 10px 4px rgba(72, 72, 72, 0.076);
  border-radius: 3px;
  color: #ca8bfe;
  transition: all 1.575s cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: 2px solid #fff;
}
.input:focus {
  outline: 2px solid #ca8bfe;
  box-shadow: 0px 0px 15px 7px rgba(72, 72, 72, 0.2);
}
</style>
