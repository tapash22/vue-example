<template>
    <div class="block sm:block md:flex lg:flex xl:flex justify-start gap-2">
        <div class="card my-1" v-for="carList in carLists" :key="carList.id">
            <router-link :to="{name:'carDetails',params:{id:carList.id}}">
            <div class="card-body h-60 w-full p-0 overflow-hidden">
                <img :src="carList.image" class="h-full w-full" />
            </div>
        </router-link>
            <div class="card-text w-full h-auto p-2 py-2">
                <h3 class="uppercase text-sm font-bold my-1 ">{{ carList.name }}</h3>
                <p class="text-sm font-light my-1 text-red-900">{{ carList.ownerName }} | {{ carList.phone }}</p>
                <p class="text-sm font-light my-1">{{ carList.model }}</p>
                <p class="text-lg font-semibold my-2">Tk. {{ carList.price }}/day</p>
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