<template>
    <div class="category flex gap-3 py-3">
        <div class="card  shadow-orange-50 shadow-2xl items-center w-1/4 bg-red-500  " v-for="category in categorys"
            :key="category.id">
            <div class="w-full h-[200px] overflow-hidden items-end flex justify-center">
                <img :src="category.image"
                    class="bg-transparent translate-x-0 hover:translate-x-10 scale-100 hover:scale-125 duration-300 hover:duration-700" />
            </div>
            <h2 class="text-xl   font-normal  py-3">{{ category.name }}</h2>
        </div>
    </div>
</template>

<script>
export default {

    props: ['categorys']

}
</script>

<style></style>