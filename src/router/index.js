import { createRouter, createWebHistory } from "vue-router";
import TodoDashboard from "../views/TodoDashboard.vue";
import TodoAuth from "../views/TodoAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodoDashboard,
    },
    {
      path: "/auth",
      name: "auth",
      component: TodoAuth,
    },
  ],
});

export default router;
