<template>
  <div class="block sm:block md:flex lg:flex xl:flex justify-start gap-4">
    <div
      class="card my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 ring-2 ring-blue-100 overflow-hidden"
      v-for="(carList, carIndex) in carLists"
      :key="carList.id"
    >
      <div class="card-body h-full w-full p-0 overflow-hidden">
        <!-- Display image based on hoveredIndex -->
        <img
          :src="carList.images[hoveredIndex[carIndex] - 1]?.image"
          class="w-full h-64 scale-100 bg-cover bg-center"
          alt="Car Image"
        />
      </div>
      <ul
        class="w-full h-4 bg-white flex justify-start items-center gap-1 rounded-lg"
      >
        <li
          class="bg-red hover:bg-red-300 h-1  w-1/4 cursor-pointer rounded-lg"
          v-for="i in 4"
          :key="i"
          @mouseover="updateHoveredIndex(carIndex, i)"
          @mouseleave="resetHoveredIndex(carIndex)"
        ></li>
      </ul>
      <div class="card-text w-full h-auto py-2 bg-blue-50">
        <router-link :to="{ name: 'carFeature', params: { id: carList.id } }">
          <h3 class="uppercase text-lg font-bold px-3 py-2">
            {{ carList.name }}
          </h3>
        </router-link>
        <p
          class="text-lg font-normal uppercase bg-gray-100 p-3 text-white w-full flex justify-between"
        >
          <span class="font-normal text-lg text-black">{{
            carList.ownerName
          }}</span>
          <span class="font-normal text-lg text-black">{{
            carList.phone
          }}</span>
        </p>
        <p class="text-lg font-bold px-3 py-1 text-black">
          {{ carList.model }}
        </p>
        <p class="text-lg font-bold px-3 py-1">Tk. {{ carList.price }}/day</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carLists"],
  data() {
    return {
      // Array to track the hovered index for each car card
      hoveredIndex: [],
    };
  },
  methods: {
    updateHoveredIndex(carIndex, i) {
      // Set the hovered index for the specific car card
      this.$set(this.hoveredIndex, carIndex, i);
    },
    resetHoveredIndex(carIndex) {
      // Reset the hovered index to default (1st image)
      this.$set(this.hoveredIndex, carIndex, 1);
    },
  },
  mounted() {
    // Initialize hoveredIndex array with default value of 1 for each car card
    this.hoveredIndex = this.carLists.map(() => 1);
  },
};
</script>

<style>
.bg-red {
  background-color: red;
}
.hover\:bg-white:hover {
  background-color: white;
}
</style>
