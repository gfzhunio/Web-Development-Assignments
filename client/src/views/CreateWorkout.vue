<script setup lang="ts">

</script>

<template>
  <form>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Create Workout</p>
            <button class="delete" aria-label="close">
                
            </button>
            </header>
            <section class="modal-card-body">
            <div class="field" data-v-0c75939c>
                <label class="label" for="name" data-v-0c75939c>Type of workout
                </label>
                <input type="text" class="input" id="name" data-v-0c75939c>
            </div>
            <div class="field" data-v-0c75939c>
                <label class="label" for="date" data-v-0c75939c>Date</label>
                <input type="date" class="input" id="date" data-v-0c75939c>
            </div>
            <div class="field" data-v-0c75939c>
                <label class="label" for="duration" data-v-0c75939c>Duration</label>
                <input type="text" class="input" id="duration" data-v-0c75939c>
            </div>
            <div class="field" data-v-0c75939c>
                <label class="label" for="location" data-v-0c75939c>Location</label>
                <input type="text" class="input" id="location" data-v-0c75939c>
            </div>
            <div class="field" data-v-0c75939c>
                <label class="label" for="picture" data-v-0c75939c>Picture</label>
                <input type="text" class="input" id="picture" data-v-0c75939c>
            </div>
            <div class="field" data-v-0c75939c>
                <label class="label" for="type" data-v-0c75939c>Workout Type</label>
                <div class="select is-full-width" data-v-0c75939c>
                    <select class="form-control" id="type" data-v-0c75939c>
                        <option value="run" data-v-0c75939c>Walk</option>
                        <option value="run" data-v-0c75939c>Jogging</option>
                        <option value="run" data-v-0c75939c>Run</option>
                        <option value="run" data-v-0c75939c>Bike</option>
                        <option value="run" data-v-0c75939c>Cardio</option>
                        <option value="run" data-v-0c75939c>Stairmaster</option>
                        <option value="run" data-v-0c75939c>Lift Weights</option>
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

</template>