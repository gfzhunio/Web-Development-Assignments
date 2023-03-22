<script setup lang="ts">
import { showModal, deleteWorkout } from "@/model/model";
import { workouts } from "@/model/session";
import Modal from "./Modal.vue";


</script>

<template>
  <div class="container mt-3">
    <h1 class="title">My activity</h1>

    <button
      class="button is-info is-fullwidth mt-5"
      @click="showModal"
      data-toggle="modal"
    >
      Create Workout
    </button>

    <Modal />

    <br />

    <div v-for="workout, workoutIndex in workouts">
      <nav class="level is-mobile">
        <article class="media box">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>

          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <small>31m</small> <br />
              </p>

              <div class="columns hast-text-centered"></div>
              <div>
                <large>{{ workout.typeOfWorkout }}</large>
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

            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
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
            </nav>
          </div>
          <div class="right">
            <button class="delete" @click="deleteWorkout(workoutIndex)"></button>
          </div>
        </article>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr, 1fr, 1fr;
}
</style>
