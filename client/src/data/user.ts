import type { User } from "@/model/user";
import { ref } from "vue";

export const currentUser = ref<User | null>(null);
