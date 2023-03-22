<script setup lang="ts">
import { closeModal, mustShowModal, workout } from "@/model/model";
import { workouts } from "@/model/session";

function addWorkoutWithClick() {
  workouts.value.push({ ...workout.value });
  closeModal();

  workout.value = {
    typeOfWorkout: "",
  date: "",
  // TODO: CHANGE DURATION TO STRING
  duration: 50,
  location: "",
  imageURL: "",
  };
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <form class="box">
      <div class="field">
        <label class="label">Type of workout</label>
        <div class="control">
          <input class="input" type="text" v-model="workout.typeOfWorkout" />
        </div>
      </div>

      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input class="input" type="text" v-model="workout.date" />
        </div>
      </div>

      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input class="input" type="text" v-model="workout.location" />
        </div>
      </div>

      <div class="field">
        <label class="label">Duration (mins)</label>
        <div class="control">
          <input class="input" type="text" v-model="workout.duration" />
        </div>
      </div>

      <div class="field">
        <label class="label">Image URL</label>
        <div class="control">
          <input class="input" type="text" v-model="workout.imageURL" />
        </div>
      </div>

      <p class="buttons">
        <button class="button is-success" @click.prevent="addWorkoutWithClick()">
          <span>Save Workout</span>
        </button>

        <button class="button">
          <span>Cancel</span>
        </button>
      </p>
    </form>
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</template>

<style scoped></style>
