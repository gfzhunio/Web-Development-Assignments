<script setup lang="ts">
</script>
<template>
   <div class="container">
  <div class="column is-hidden-touch is-two-fifths">
  </div>
  <div class="column">
    <div class="box has-text-success summary has-background-success-light">
        <h2 class="title has-text-primary has-text-centered">Today</h2>
        <div class="columns is-multiline">
            <div class="column is-half">
                <h3 class="value">0 ft</h3>
                <caption class="caption">Distance</caption>
            </div>
            <div class="column is-half">
                <h3 class="value">1 hr</h3>
                <caption class="caption">Duration</caption>
            </div>
            <div class="column is-half">
                <h3 class="value">0 ft</h3>
                <caption class="caption">Avg Pace</caption>
            </div>
            <div class="column is-half">
                <h3 class="value">120</h3>
                <caption class="caption">Calories</caption>
            </div>
        </div>
    </div>
    <div class="column is-hidden-touch is-two-fifths">
  </div>
  </div>
</div>
</template>
<style scoped>
.container {
    width: 400px;
}
</style>