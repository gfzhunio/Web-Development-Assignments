<script setup lang="ts">


</script>
<template>
    <div class="container">
        <button class="button is-primary mt-5">
            <span class="icon is-small">
                <i class="fa-sharp fa-solid fa-plus"></i>
            </span>
            <span>Add User</span>
        </button>
    </div>
    <div class="container">
        <div class="column is-full">
    <table class="table is-bordered is-stripped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th><abbr title="firstName">First Name</abbr></th>
                <th><abbr title="lastName">Last Name</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="isAdmin">Is Admin</abbr></th>
                <th><abbr title="box"></abbr></th>
            </tr>
        </thead>

        <tbody>
            <th>Gisela</th>
            <th>Zhunio</th>
            <th>Gisela@hotmail.com</th>
            <th>yes</th>
            <th>
                <abbr title="Played">
                    <button class="button"><i class="fas fa-edit"></i></button>
                    <button class="button"><i class="fas fa-trash"></i></button>
                  </abbr>
            </th>
        </tbody>
    </table>
</div>
</div>
    
</template>


<style scoped>
.container {
    align-content: center;
}
</style>