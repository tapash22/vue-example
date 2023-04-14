<template>
    <div class="student rounded-xl">
        <div class="card-header w-full flex justify-center p-1 bg-violet-400 rounded-2xl">
            <h6 class="text-sm font-medium p-2 text-center uppercase">{{ student.name }}</h6>
        </div>
        <div class="card-body w-full bg-violet-600">
            <p class="text-sm font-medium p-2 text-center uppercase">{{ student.campuse }}</p>
            <p class="text-sm font-normal p-2 text-center">{{ student.title }}</p>
            <p class="text-sm font-normal p-2 text-center">{{ student.passing_year }}</p>

        </div>
        <div class="card-footer w-full flex justify-center rounded-xl bg-violet-300">
            <p class="text-sm font-extrabold p-1 text-center">{{ student.cgpa }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['student'],
}
</script>

<style></style>