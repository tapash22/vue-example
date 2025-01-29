<template>
  <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
    <div class="px-3 w-full">
      <h2 class="text-3xl font-bold text-black text-center mb-3 uppercase">
        Must have for every car
      </h2>
      <div class="flex justify-center py-3">
        <p
          class="text-lg font-semibold mb-3 text-center w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3"
        >
          Enjoy an entirely new level of driving experience with our in-depth
          selection of superior car bulbs, brake pads, spark plugs, and other
          azirspares parts and accessories designed to keep your car running at
          its absolute best
        </p>
      </div>

      <CarPartCard :parts="parts" />
    </div>
  </div>
</template>

<script>
import { parts } from "@/store/data";
import CarPartCard from "./CarPartCard.vue";
export default {
  data() {
    return {
      parts,
    };
  },
  components: {
    CarPartCard,
  },
};
</script>
