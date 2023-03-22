<script setup lang="ts">
import { users } from '@/model/session';

function getUserWorkout(username: string) {
  return users[username as keyof typeof users]
}

</script>

<template>
  <div v-for="workouts, username in users">
    <div>{{ username }} </div>
    <div v-for="workout in workouts">
      <div>{{ workout.typeOfWorkout }} {{ workout.location }} {{ workout.duration }} mins</div>
    </div>
  </div>
</template>