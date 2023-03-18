<script setup lang="ts">
import { ref } from "vue";

const mustShowModal = ref(false);

function showModal() {
  mustShowModal.value = true;
}

function closeModal() {
  mustShowModal.value = false;
}

function addWorkoutWithClick() {
  showModal();
}
</script>

<template>
  <body>
    <div class="container">
      <div>
        <div class="columns">
          <div class="column is-half is off-set-one-quarter media">
            <button
              class="button is-info is-fullwidth"
              @click="addWorkoutWithClick"
              data-toggle="modal"
            >
              Create Workout
            </button>
            <form>
              <div class="modal" :class="{ 'is-active': mustShowModal }">
                <div class="modal-background" @click="closeModal"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Create Workout</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="name" data-v-0c75939c
                        >Type of workout
                      </label>
                      <input
                        type="text"
                        class="input"
                        id="name"
                        data-v-0c75939c
                      />
                    </div>
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="date" data-v-0c75939c
                        >Date</label
                      >
                      <input
                        type="date"
                        class="input"
                        id="date"
                        data-v-0c75939c
                      />
                    </div>
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="duration" data-v-0c75939c
                        >Duration</label
                      >
                      <input
                        type="text"
                        class="input"
                        id="duration"
                        data-v-0c75939c
                      />
                    </div>
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="location" data-v-0c75939c
                        >Location</label
                      >
                      <input
                        type="text"
                        class="input"
                        id="location"
                        data-v-0c75939c
                      />
                    </div>
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="picture" data-v-0c75939c
                        >Picture</label
                      >
                      
                      <div class="file is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
  </label>
</div>
                
                      
                    </div>
                    <div class="field" data-v-0c75939c>
                      <label class="label" for="type" data-v-0c75939c
                        >Workout Type</label
                      >
                      <div class="select is-full-width" data-v-0c75939c>
                        <select class="form-control" id="type" data-v-0c75939c>
                          <option value="run" data-v-0c75939c>Walk</option>
                          <option value="run" data-v-0c75939c>Jogging</option>
                          <option value="run" data-v-0c75939c>Run</option>
                          <option value="run" data-v-0c75939c>Bike</option>
                          <option value="run" data-v-0c75939c>Cardio</option>
                          <option value="run" data-v-0c75939c>
                            Stairmaster
                          </option>
                          <option value="run" data-v-0c75939c>
                            Lift Weights
                          </option>
                          <option value="run" data-v-0c75939c>HIIT</option>
                          <option value="run" data-v-0c75939c>Traidmill</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <footer class="modal-card-foot">
                    <button class="button is-success">Save</button>
                    <button class="button">Cancel</button>
                  </footer>
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
