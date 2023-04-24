<script setup lang="ts">
import { login } from "@/util/user";
import { currentUser } from "@/data/user";
import { computed, ref } from "vue";
import router from "@/router";

const username = ref("jfugon");
const password = ref("12345");

const isUsernameValid = computed(() => username.value.length >= 5);
const isPasswordValid = computed(() => password.value.length >= 5);

function onLoginButtonClicked() {
  currentUser.value = login(username.value, password.value);
  router.push("/home");
}


</script>

<template>
  <div class="container is-fluid mt-5">
    <!-- USERNAME -->
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="username"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <p v-if="!isUsernameValid" class="help is-danger">
        Please enter at least 5 characters
      </p>
    </div>

    <!-- PASSWORD -->
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="Email input"
          v-model="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <p v-if="!isPasswordValid" class="help is-danger">
        Please enter at least 5 characters
      </p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button
          :disabled="!isUsernameValid || !isPasswordValid"
          class="button is-link"
          @click="onLoginButtonClicked"
        >
          Login
        </button>
      </div>
        <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
