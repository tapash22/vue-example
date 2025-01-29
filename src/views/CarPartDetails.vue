<template>
  <div class="block w-full h-full ">
    <!-- car details -->
    <div class="w-full h-full flex justify-center bg-gray-100 p-5">
      <!-- first part -->
      <div class="block w-3/4 h-full gap-1">
        <CarPartTop />
        <CarPartTabs />
        <CarPartRelated />
      </div>
    </div>
  </div>
</template>

<script>
import CarPartTop from "@/components/carParts/CarPartTop.vue";
import CarPartTabs from "@/components/carParts/CarPartTabs.vue";
import CarPartRelated from "@/components/carParts/CarPartRelated.vue";

export default {
  data() {
    return {};
  },

  components: {
    CarPartTop,
    CarPartTabs,
    CarPartRelated,
  },
};
</script>
