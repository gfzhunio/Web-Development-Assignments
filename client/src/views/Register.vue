<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
    <div v-if="errorMessage" >
    <p class="text-red-500">{{ errorMessage }}</p>
    </div> 
    
    <form class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"></form>

    <h1 class="text" input:></h1>
    </div>
</template>

<script>
    import{ ref } from "vue";
    export default {
        name: "register",
        setup(){
            const email = ref(null);
            const password = ref(null);
            const confirmPassword = ref(null);
            const errorMessage = ref(null);

            return {email,password,confirmPassword,errorMessage};
        },
    }
</script>

<style lang="scss" scoped>

</style>