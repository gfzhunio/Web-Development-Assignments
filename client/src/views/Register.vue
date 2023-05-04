<script setup lang="ts">
import { BASE_URL } from "@/data/api";
import { currentUser } from "@/data/user";
import router from "@/router";
import axios from "axios";
import { computed, ref } from "vue";

const username = ref("gzhunio");
const email = ref("karo@fitness.com");
const password = ref("12345");
const isAdmin = ref(false);

const isUsernameValid = computed(() => username.value.length >= 5);
const isEmailValid = computed(() => validateEmail(email.value));
const isPasswordValid = computed(() => password.value.length >= 5);

function validateEmail(email: string) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

async function onRegisterButtonClicked() {
  const body = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  const { data } = await axios.post(`${BASE_URL}/user`, body);
  currentUser.value = data;
  await router.push("/login");
}
</script>

<template>
  <div class="box mt-5 is-centered has-background-success-light">
    <div class="container is-fluid">
      <!-- USERNAME -->
      <div class="field">
        <label class="label">Username</label>
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
        <p v-if="!isUsernameValid" class="help is-danger">Invalid username</p>
      </div>

      <!-- EMAIL -->
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success is-outlined"
            type="email"
            placeholder="Email input"
            v-model="email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <p v-if="!isEmailValid" class="help is-danger">Invalid email</p>
      </div>

      <!-- PASSWORD -->
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success is-outlined"
            type="email"
            placeholder="Email input"
            v-model="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <p v-if="!isPasswordValid" class="help is-danger">Invalid password</p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button
            :disabled="!isUsernameValid || !isEmailValid || !isPasswordValid"
            class="button is-success"
            @click="onRegisterButtonClicked"
          >
            Register
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
