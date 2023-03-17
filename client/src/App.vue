<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <header>

    <NavBar />
 
      <nav>
        <RouterView />
      </nav>
   
  </header>
  
</template>

<style scoped>

</style>
