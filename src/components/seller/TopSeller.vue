<template>
    <div class="block sm:block md:flex lg:flex xl:flex justify-start gap-2">
        <div class="card my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1  w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 ring-1 ring-red-500 overflow-hidden" v-for="carList in carLists" :key="carList.id">
            <router-link :to="{name:'carDetails',params:{id:carList.id}}">
            <div class="card-body h-48 w-full p-0 overflow-hidden">
                <img :src="carList.image" class="h-full w-full bg-cover bg-center" />
            </div>
        </router-link>
            <div class="card-text w-full h-auto p-2 py-2 bg-red-500">
                <h3 class="uppercase text-sm font-bold my-1 ">{{ carList.name }}</h3>
                <p class="text-sm font-normal my-1 text-white ">{{ carList.ownerName }} | {{ carList.phone }}</p>
                <p class="text-sm font-semibold my-1 text-white">{{ carList.model }}</p>
                <p class="text-sm font-bold my-2">Tk. {{ carList.price }}/day</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['carLists']
}
</script>

<style></style>