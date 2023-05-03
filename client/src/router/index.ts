import MyActivity from "@/components/MyActivity.vue";
// import CreateWorkout from "@/views/CreateWorkout.vue";
import FriendsActivity from "@/views/FriendsActivity.vue";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import Users from "@/views/Users.vue";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { currentUser } from "@/data/user";
import type { User } from "@/model/user";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/myActivity",
      name: "myActivity",
      component: MyActivity,
      beforeEnter: secureGuard,
    },
    {
      path: "/friendsActivity",
      name: "friendsActivity",
      component: FriendsActivity,
      beforeEnter: secureGuard,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },

    {
      path: "/user",
      name: "user",
      component: Users,
      beforeEnter: secureGuard,
    },
  ],
});

export default router;

function secureGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  reloadCurrentUserFromLocalStorage();

  if (currentUser.value) {
    next();
  } else {
    next("/login");
  }
}

function reloadCurrentUserFromLocalStorage() {
  if (currentUser.value) {
    return;
  }

  const user = JSON.parse(localStorage.getItem("user") as string) as User;
  if (user) {
    currentUser.value = user;
  }
}
