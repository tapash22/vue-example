<template>
  <div class="student-list w-full h-full p-4 block md:flex lg:flex justify-start ">
    <div class="card p-0 mx-1 rounded-xl h-auto w-1/2 md:w-1/4 lg:1/4 xl:w-1/4 hover:shadow-2xl" v-for="student in students" :key="student.id">
        <Student :student="student" />
      </div>
  </div>
</template>

<script>
import Student from './Student.vue';

export default {
    props:['students'],

    components:{
        Student,
    }
}
</script>

<style>

</style>