<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

    const isMenuActive = ref(false);
    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-primary">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <i class="fa-solid fa-dumbbell"></i>
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

            <RouterLink to="/" class="navbar-item">Home</RouterLink>
            <RouterLink to="/myActivity" class="navbar-item">My Activity</RouterLink>
            <RouterLink to="/friendsActivity" class="navbar-item">Friends Activity</RouterLink>
            <RouterLink to="/search" class="navbar-item">Search</RouterLink>
            <RouterLink to="/admin" class="navbar-item">Admin</RouterLink>

          </div>
      
          <div class="navbar-end">

            <LoginBadge />

            <div class="navbar-item">
              <div class="buttons" data-v-1f0da592>
                <a href="/signup" class="button is-primary" data-v-1f0da592>
                  <strong data-v-1-1f0da592> Sign up</strong>
                </a>
                <div class="dropdown" data-v-1f0da592>
                  <div class="dropdown-tiger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span data-v-1f0da592>Log in</span>
                      <span class="icon is-small" data-v-1f0da592>
                      <i class="fas fa-angle-down"
                      aria-hidden="true" data-v-1f0da592></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a class="dropdown-item" data-v-1f0da592> Karo </a>
                      <a class="dropdown-item" data-v-1f0da592> Gisela </a>
                      <a class="dropdown-item" data-v-1f0da592> Lucas </a>
                      <a class="dropdown-item" data-v-1f0da592> Juan </a>
                      <a href="/login" class="dropdown-item is-disabled" data-v-1f0da592>Add Account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
      </nav>
</template>


<style scoped>
</style>