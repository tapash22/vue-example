<template>
    <div class="category block sm:block md:flex lg:flex xl:flex  md:gap-3 lg:gap-3 xl:gap-3 py-3">
        <div class="card   shadow-orange-50 shadow-2xl items-center full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 " v-for="category in categorys"
            :key="category.id">
            <div class="w-full h-[200px] overflow-hidden items-end flex justify-center">
                <img :src="category.image"
                    class="bg-transparent  scale-100 hover:scale-125 duration-300 hover:duration-700" />
            </div>
            <h2 class="text-lg font-semibold text-white uppercase  py-2 bg-red-600 w-full flex justify-center">{{ category.name }}</h2>
        </div>
    </div>
</template>

<script>
export default {

    props: ['categorys']

}
</script>

<style></style>