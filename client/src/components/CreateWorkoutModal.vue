<script setup lang="ts">
import { BASE_URL } from "@/data/api";
import { currentUser } from "@/data/user";
import { closeModal, mustShowModal, workout, workouts } from "@/model/model";
import axios from "axios";

async function reloadWorkouts() {
  const { data } = await axios.get(
    `${BASE_URL}/workout/${currentUser.value?._id}`
  );

  workouts.value = data;
}

async function onCreateWorkoutButtonClicked() {
  await axios.post(`${BASE_URL}/workout`, {
    ...workout.value,
    userId: currentUser.value?._id,
  });
  reloadWorkouts();
  closeModal();
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <form class="box has-background-success-light">
        <div class="field">
          <label class="label">Type of workout</label>
          <div class="control">
            <input class="input" type="text" v-model="workout.typeOfWorkout" />
          </div>
        </div>

        <div class="field">
          <label class="label">Duration</label>
          <div class="control">
            <input class="input" type="text" v-model="workout.duration" />
          </div>
        </div>

        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input class="input" type="text" v-model="workout.location" />
          </div>
        </div>

        <p class="buttons">
          <button
            class="button is-success"
            @click.prevent="onCreateWorkoutButtonClicked()"
          >
            <span>Create Workout</span>
          </button>

          <button class="button has-background-danger-light" @click="closeModal">
            <span>Cancel</span>
          </button>
        </p>
      </form>
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</template>

<style scoped></style>
