<script setup lang="ts">
import { BASE_URL } from "@/data/api";
import { currentUser } from "@/data/user";
import router from "@/router";
import axios from "axios";
import { computed, ref } from "vue";

const username = ref("gzhunio");
const password = ref("12345");

const isUsernameValid = computed(() => username.value.length >= 5);
const isPasswordValid = computed(() => password.value.length >= 5);

async function onLoginButtonClicked() {
  try {
    const body = { username: username.value, password: password.value };
    const { data } = await axios.post(`${BASE_URL}/login`, body);

    currentUser.value = data;
    localStorage.setItem("user", JSON.stringify(currentUser.value));
    router.push("/");
  } catch (error) {
    currentUser.value = null;
  }
}
</script>

<template>
  <div class="box mt-5 has-background-success-light is-centered">
    <div class="container is-fluid">
      <!-- USERNAME -->
      <div class="field">
        <label class="label has-text-success-dark">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success is-outlined"
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
        <label class="label has-text-success-dark">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success is-outlined"
            type="email"
            placeholder="Email input"
            v-model="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
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
            class="button is-success"
            @click="onLoginButtonClicked"
          >
            Login
          </button>
        </div>
        <div class="control">
          <button class="button is-danger is-light">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: auto;
  width: 382px;
}
</style>
