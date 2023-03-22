import Login from "@/components/Login.vue";
import MyActivity from "@/components/MyActivity.vue";
import CreateWorkout from "@/views/CreateWorkout.vue";
import FriendsActivity from "@/views/FriendsActivity.vue";
import Search from "@/views/Search.vue";
import User from "@/views/Users.vue";
import Home from "@/views/Home.vue";
import { useSession } from "@/model//session"
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/home",
      name:"home",
      component: Home,
    },
    
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/myActivity",
      name: "myActivity",
      component: MyActivity,
    },
    {
      path: "/friendsActivity",
      name: "friendsActivity",
      component: FriendsActivity,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/createWorkout",
      name: "createWorkout",
      component: CreateWorkout,
    },
    {
      path: "/user",
      name: "user",
      component: User,
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
    next("/login");
  }
}
