import { createRouter, createWebHistory } from "vue-router";
import TodoDashboard from "../views/TodoDashboard.vue";
import TodoAuth from "../views/TodoAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: TodoDashboard,
    },
    {
      path: "/",
      name: "auth",
      component: TodoAuth,
    },
  ],
});

export default router;
