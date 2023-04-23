<script setup lang="ts">
import { currentUser } from "@/data/user";
import router from "@/router";
import { ref } from "vue";
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
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <i class="fa-solid fa-dumbbell"></i>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <div class="icon">
              <i class="fas fa-running"></i>
            </div>
            <span>My Activity</span>
          </a>

          <a class="navbar-item">
            <div class="icon">
              <i class="fas fa-people-roof"></i>
            </div>
            <span>Friends</span>
          </a>

          <a class="navbar-item">
            <div class="icon">
              <i class="fas fa-search"></i>
            </div>
            <span>Search</span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon">
                <i class="fas fa-user-secret"></i>
              </span>
              <span>Admin</span>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <RouterLink
                v-if="!currentUser"
                class="button is-primary"
                to="/register"
              >
                <strong>Register</strong>
              </RouterLink>
              <RouterLink
                v-if="!currentUser"
                class="button is-light"
                to="/login"
                >Login</RouterLink
              >
              <button
                v-if="currentUser"
                class="button is-light"
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
