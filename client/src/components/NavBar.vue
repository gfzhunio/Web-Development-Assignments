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
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <RouterLink to="/services" class="navbar-item">Services</RouterLink>
            <RouterLink to="/news" class="navbar-item">Contacts</RouterLink>


          
          </div>
      
          <div class="navbar-end">

            <LoginBadge />

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button has-background-primary-light">
                    <span class="icon">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <span>
                      Become A Member
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </nav>
</template>


<style scoped>
</style>