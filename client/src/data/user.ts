import type { User } from "@/model/user";
import { ref } from "vue";

export const currentUser = ref<User | null>(null);
export const users = ref<User[]>([
  {
    id: 1,
    username: "gzhunio",
    email: "gzhunio@fitness.com",
    password: "12345",
  },
  {
    id: 2,
    username: "jfugon",
    email: "jfugon@fitness.com",
    password: "12345",
  },
]);
