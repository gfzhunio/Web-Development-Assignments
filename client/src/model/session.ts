/* B"H
 */

import { reactive } from "vue";
import { useRouter } from "vue-router";

export const session = reactive({
  user: null as User | null,
});
interface User {
  name: string;
  lastName: string;
  firstName: string;
  email?: string;
  photo?: string;
  admin: Boolean;
}

export function useSession() {
  return session;
}

export function login() {
  session.user = {
    name: "Gisela Fugon",
    lastName: "Fugon",
    firstName: "Gisela",
    email: "gf@hotmail.com",
    admin: true,
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
