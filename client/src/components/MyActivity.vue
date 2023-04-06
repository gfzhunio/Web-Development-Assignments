<script setup lang="ts">
import { showModal, deleteWorkout } from "@/model/model";
import { workouts } from "@/model/session";
import Modal from "./Modal.vue";


</script>

<template>
  <div class="container is-max-desktop mt-3">
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
      <div class="container">
        <article class="media box">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>

          <div class="media-content ml-1">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <small>31m</small> <br />
              </p>

              <div class="columns hast-text-centered">
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
            </div>
          </div>
          <div class="right">
            <button class="delete" @click="deleteWorkout(workoutIndex)"></button>
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
