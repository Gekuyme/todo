<script setup>
import AuthView from "../components/auth/AuthView.vue";
</script>
<template>
  <div class="auth">
    <div class="auth_modal">
      <auth-view />
    </div>
  </div>
</template>

<style>
.auth {
  min-height: 100vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth_modal {
  min-width: 600px;
  min-height: 800px;
  background-color: #fff;
  background-image: linear-gradient(135deg, #fff, #e6d0fe);
  box-shadow: 0px 0px 45px 20px rgba(124, 124, 124, 0.204);
  border-radius: 15px;
  display: flex;
  justify-content: center;
}
</style>
