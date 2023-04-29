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
  router.push("/home");
}
</script>

<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <i class="fa-solid fa-dumbbell"></i>
        </a>

        
    
          <RouterLink to="/myActivity" class="navbar-item">
            <div class="icon">
              <i class="fas fa-running"></i>
            </div>
            <span>My Activity</span>
          </RouterLink>

          <RouterLink to="/friendsActivity" class="navbar-item">
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
          class="navbar-burger is-active"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
          </div>
          
          <div id="navbarBasicExample" class="navbar-menu is-active">
          <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon">
                <i class="fas fa-user-secret"></i>
              </span>
              <span>Admin</span>
            </a>

            <RouterLink to="/user" class="navbar-dropdown">
            <span>Users Table</span>
          </RouterLink>
          
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
