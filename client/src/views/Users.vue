<script setup lang="ts">
import { currentUser } from "@/data/user";
import type { User } from "@/model/user";
import axios from "axios";
import { ref } from "vue";

const users = ref<User[]>([]);

async function getUsers() {
  const { data } = await axios.get(`http://localhost:3000/user`);
  users.value = data;
}

getUsers();
</script>
<template>
  <div class="container is-fluid">
    <button class="button is-success mt-5">
      <span class="icon is-small">
        <i class="fa-sharp fa-solid fa-plus"></i>
      </span>
      <span>Add User</span>
    </button>
  </div>
  <div class="container is-fluid mt-2">
    <table
      class="table is-bordered is-stripped is-narrow is-hoverable is-fullwidth has-background-success-light"
    >
      <thead>
        <tr>
          <th><abbr title="firstName">Username</abbr></th>
          <th><abbr title="email">Email</abbr></th>
          <th><abbr title="isAdmin">Is Admin</abbr></th>
          <th><abbr title="box"></abbr></th>
          <th></th>
        </tr>
      </thead>

      <tbody v-for="currentUser in users">
        <th>{{ currentUser.username }}</th>
        <th>{{ currentUser.email }}</th>
        <th>{{ currentUser.isAdmin }}</th>
        <th></th>
        <th>
          <abbr title="Played">
            <button class="button"><i class="fas fa-edit"></i></button>
            <button class="button"><i class="fas fa-trash"></i></button>
          </abbr>
        </th>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  align-content: center;
}
</style>
