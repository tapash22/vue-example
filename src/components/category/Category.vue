<template>
    <div class="category block sm:block md:flex lg:flex xl:flex  md:gap-3 lg:gap-3 xl:gap-3 py-3">
        <div class="card relative overflow-hidden shadow-orange-50 shadow-3xl items-center full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 rounded-2xl ring-2 ring-blue-100 " v-for="category in categorys"
            :key="category.id">
            <div class="w-full h-full overflow-hidden items-end flex justify-center">
                <img :src="category.image"
                    class=" scale-100 hover:scale-100 duration-300 hover:duration-700" />
            </div>
            <h2 class="absolute text-2xl font-bold uppercase  py-2 w-full flex justify-center text-black ring-2 ring-blue-100 hover:text-yellow-500 top-3/4  bg-white">{{ category.name }}</h2>
        </div>
    </div>
</template>

<script>
export default {

    props: ['categorys']

}
</script>
