<script setup lang="ts">
import { users, workouts} from '@/model/session';
import { showModal, deleteWorkout} from '@/model/model';
import CreateWorkoutModal from '@/components/CreateWorkoutModal.vue';


function getUserWorkout(username: string) {
  return users[username as keyof typeof users]
}

</script>

<template>
  <!-- <div v-for="workouts, username in users">
    <div>{{ username }} </div>
    <div v-for="workout in workouts">
      <div>{{ workout.typeOfWorkout }} {{ workout.location }} {{ workout.duration }} mins</div>
    </div>
  </div> -->

  <body>
    <div class="container is-max-desktop mt-3">
    <h1 class="title">Friends activity</h1>

    <button
      class="button is-info is-fullwidth mt-5"
      @click="showModal"
      data-toggle="modal"
    >Create Workout</button>

    <CreateWorkoutModal/>

    <br />

    <div v-for="workout, username in workouts">
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
                <div> {{ username }} </div>
              </p>
              
              <div class="columns hast-text-centered">
              <div>
                <large>{{ workout.typeOfWorkout }}</large>
                <p class="heading mr-4" >Type</p>
              </div>
              <div>
                <small>{{ workout.duration }}</small>
                <p class="heading mr-5">Duration</p>
              </div>
              <div>
                <small>{{ workout.location }}</small>
                <p class="heading mr-5">Location</p>
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
            <!-- <button class="delete" @click="deleteWorkout(workoutIndex)"></button> -->
          </div>
        </article>
      </div>
    </div>
    </div>
  </body>
</template>