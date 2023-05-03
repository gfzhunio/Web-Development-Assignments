import MyActivity from "@/components/MyActivity.vue";
// import CreateWorkout from "@/views/CreateWorkout.vue";
import FriendsActivity from "@/views/FriendsActivity.vue";
import Search from "@/views/Search.vue";
import User from "@/views/Users.vue";
import Home from "@/views/Home.vue";
import { useSession } from "@/model//session";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

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
      beforeEnter: secureRoute,
    },
    {
      path: "/friendsActivity",
      name: "friendsActivity",
      component: FriendsActivity,
      beforeEnter: secureRoute,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },

    {
      path: "/user",
      name: "user",
      component: User,
      beforeEnter: secureRoute,
    },
  ],
});

export default router;

function secureRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const session = useSession();
  if (session.user) {
    next();
  } else {
    if (!session.redirectUrl && to.path != "/login") {
      session.redirectUrl = to.fullPath;
    }
    next("/login");
  }
}
