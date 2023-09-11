<template>
  <div class="w-full flex justify-between h-20">
    <a class=" w-1/4 text-xl font-normal bg-red-300 text-red-800 flex justify-center uppercase pt-8" href="#">
        Example Vue
    </a>
    <ul class="w-3/4 flex justify-end items-center p-2 bg-red-400 opacity-100 ">
        <li class=" rounded-xl bg-transparent border-2  border-red-700  mx-2 h-8">
            <router-link class="text-sm font-bold justify-center text-white tracking-wider p-5" to="/">Home</router-link> 
        </li>
        <li class=" rounded-xl bg-white border-2  border-white  mx-2 h-8">
            <router-link class="text-sm font-bold justify-center text-red tracking-wider p-5" to="/land">About</router-link> 
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>