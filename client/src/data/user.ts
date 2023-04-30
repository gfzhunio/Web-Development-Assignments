import type { User } from "@/model/user";
import { computed, ref } from "vue";

export const currentUser = ref<User | null>(null);
export const userLogIn = computed(() => !!currentUser.value);

