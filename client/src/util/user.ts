import { users } from "@/data/user";
import type { User } from "@/model/user";

export function addUser(
  username: string,
  email: string,
  password: string
): void {
  const newUser = {
    id: users.value.length + 1,
    username,
    email,
    password,
  };

  users.value.push(newUser);
}

export function login(username: string, password: string): User | null {
  const user = users.value.find(
    (user) => user.username === username && user.password === password
  );

  return user ?? null;
}
