<script setup lang="ts">
import { currentUser } from "@/data/user";
import { showModal, workouts } from "@/model/model";
import axios from "axios";
import CreateWorkoutModal from "./CreateWorkoutModal.vue";

async function reloadWorkouts() {
  const { data } = await axios.get(
    `http://localhost:3000/workout/${currentUser.value?._id}`
  );

  workouts.value = data;
}

async function deleteWorkout(workoutId: string) {
  await axios.delete(`http://localhost:3000/workout/${workoutId}`);
  await reloadWorkouts();
}

reloadWorkouts();
</script>

<template>
  <div class="container is-fluid mt-5">
    <h1 class="title has-text-success-dark">My activity</h1>

    <button
      class="button has-background-success-light is-fullwidth mt-5 has-text-success-dark is-success is-outlined is-rounded"
      @click="showModal"
      data-toggle="modal"
    >
      Create Workout
    </button>

    <CreateWorkoutModal />

    <br />

    <div v-for="workout in workouts">
      <div class="container">
        <article class="media box has-background-success-light">
          <div class="media-content ml-3">
            <div class="content">
              <p>
                <strong>{{ workout.user?.username }}</strong>
                <small>{{ workout.user?.email }}</small> <small>31m</small>
                <br />
              </p>

              <div class="columns hast-text-centered mt-3">
                <div>
                  <large>{{ workout.typeOfWorkout }}</large>
                  <p class="heading">Workout Name</p>
                </div>
                <div>
                  <small>{{ workout.duration }}</small>
                  <p class="heading">Duration</p>
                </div>
                <div>
                  <small>{{ workout.location }}</small>
                  <p class="heading">Location</p>
                </div>
              </div>
            </div>

            <div class="level">
              <div class="level-left">
                <a class="level-item ">
                  <span class="icon is-small"
                    ><i class="fas fa-reply"></i
                  ></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"
                    ><i class="fas fa-retweet"></i
                  ></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"
                    ><i class="fas fa-heart"></i
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div class="right">
            <button class="delete" @click="deleteWorkout(workout._id as string)"></button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-content {
  display: inline-grid;
}
.columns {
  column-gap: 50px;
  column-width: auto;
  rid-template-columns: 8ch auto;
  margin-left: 10px;
}
</style>
