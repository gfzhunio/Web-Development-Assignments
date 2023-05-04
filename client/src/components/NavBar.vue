<script setup lang="ts">
import { currentUser } from "@/data/user";
import { session } from "@/model/session";
import router from "@/router";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function onLogoutButtonClick() {
  currentUser.value = null;
  router.push("/");
}

</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <div class="icon">
            <i class="fa-solid fa-dumbbell"></i>
          </div>
        </RouterLink>
        <RouterLink v-if="currentUser" to="/myActivity" class="navbar-item">
          <div class="icon">
            <i class="fas fa-running"></i>
          </div>
          <span>My Activity</span>
        </RouterLink>

        <RouterLink
          v-if="currentUser"
          to="/friendsActivity"
          class="navbar-item"
        >
          <div class="icon">
            <i class="fas fa-people-roof"></i>
          </div>
          <span>Friends Activity</span>
        </RouterLink>

        <RouterLink to="/search" class="navbar-item">
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>
          <span>Search</span>
        </RouterLink>

        <a
          class="navbar-burger"
          :class="{ 'is-active': isMenuActive }"
          @click="toggleMenu"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isMenuActive }"
      >
        <div class="navbar-start" v-if="currentUser && !!currentUser?.isAdmin">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon">
                <i class="fas fa-user-secret"></i>
              </span>
              <span>Admin</span>
            </a>

            <RouterLink to="/user" class="navbar-dropdown">
              <span class="user ml-2">Users Table</span>
            </RouterLink>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <RouterLink
                v-if="!currentUser"
                class="button has-background-primary-light"
                to="/register"
              >
                <strong>Register</strong>
              </RouterLink>
              <RouterLink
                v-if="!currentUser"
                class="button has-background-warning-light"
                to="/login"
                >Login</RouterLink
              >
              <button v-if="currentUser" class="button has-background-primary-light">Welcome {{ currentUser.username }}</button>
              <button
                v-if="currentUser"
                class="button has-background-warning-light"
                @click="onLogoutButtonClick"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
