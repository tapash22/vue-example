<template>
  <div class="block sm:block md:flex lg:flex xl:flex justify-start gap-4">
    <div
      class="card my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 ring-2 ring-blue-100  overflow-hidden "
      v-for="carList in carLists"
      :key="carList.id"
    >
      <router-link :to="{ name: 'carDetails', params: { id: carList.id } }">
        <div class="card-body h-full w-full p-0 overflow-hidden">
          <img :src="carList.image" class=" w-full scale-100 bg-cover bg-center" />
        </div>
      </router-link>
      <div class="card-text w-full h-auto py-2 bg-blue-50 ">
        <h3 class="uppercase text-lg font-bold px-3 py-2 ">{{ carList.name }}</h3>
        <p
          class="text-lg font-normal uppercase bg-gray-100 p-3 text-white w-full flex justify-between"
        >
          <span class="font-normal text-lg text-black">{{ carList.ownerName }}</span>
          <span class="font-normal text-lg text-black">{{ carList.phone }}</span>
        </p>
        <p class="text-lg font-bold px-3 py-1 text-black">{{ carList.model }}</p>
        <p class="text-lg font-bold px-3 py-1">Tk. {{ carList.price }}/day</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carLists"],
};
</script>

<style></style>