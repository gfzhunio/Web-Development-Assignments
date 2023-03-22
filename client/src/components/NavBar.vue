<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import router from "@/router";
import { useSession } from "@/model/session";

const isMenuActive = ref(false);
const userLogged = computed(() => !!useSession().user);
const usernames = ref(['karo', 'lucy', 'lucas'])
const currentUser = ref('');

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function login(username: string) {
  currentUser.value = username;
}
</script>

<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <RouterLink to="/home">
            <i class="fa-solid fa-dumbbell"></i>
          </RouterLink>
        </a>
        <div
          class="navbar-burger"
          :class="{ 'is-active': isMenuActive }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <RouterLink v-if="useSession()" to="/myActivity" class="navbar-item">
            <span class="icon">
              <i class="fas fa-running"></i>
            </span>
            <span>My activity</span>
          </RouterLink>
          <RouterLink
            v-if="useSession()"
            to="/friendsActivity"
            class="navbar-item"
          >
            <span class="icon">
              <i class="fas fa-people-roof"></i>
            </span>
            <span>Friends</span>
          </RouterLink>
          <RouterLink to="/search" class="navbar-item">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>Search</span>
          </RouterLink>
          <div
            v-if="useSession()"
            class="navbar-item has dropdown is-hoverable"
          >
            <span class="icon">
              <i class="fas fa-user-secret"></i>
            </span>
            <a class="navbar-link">Admin</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="router.push('/user')"></a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div v-if="currentUser" class="navbar-item">
            {{ currentUser }}
          </div>
          <div class="navbar-item">
            <div class="dropdown" :class="{ 'is-active': isMenuActive }">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="toggleMenu"
                >
                  <span>Login</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a v-for="user in usernames" class="dropdown-item" @click="login(user)">{{ user }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
