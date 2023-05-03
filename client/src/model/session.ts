/* B"H
 */

import { reactive } from "vue";
import { useRouter } from "vue-router";


export const session = reactive({
  user: null as User | null,

});
interface User {
  username: string;
  email?: string;
  photo?: string;
  password?: string;
  isAdmin?: boolean;
}

export function useSession() {
  return session;
}

export function login() {
  session.user = {
    username: "gfugon",
    email: "gf@hotmail.com",
    photo: "",
    password: "12345",
    isAdmin: false,
  };
}

export function useLogout() {
  const router = useRouter();

  return function () {
    console.log({ router });
    session.user = null;
    router.push("/login");
  };
}


