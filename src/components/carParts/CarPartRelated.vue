<template>
  <div class="block w-full h-auto">
    <h2 class="text-2xl font-bold text-black text-start my-3 uppercase">
      Related products
    </h2>
    <CarPartCard :parts="parts" />
  </div>
</template>

<script>
import { parts } from "@/store/data";
import CarPartCard from "../main/CarPartCard.vue";
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
