<template>
  <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full">
    <h2 class="text-3xl font-bold text-black text-center mb-3">
      Must have you know
    </h2>
    <div class="block sm:block md:flex lg:flex xl:flex justify-center mx-2">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from '../carousel/Carousel.vue';

export default {
  components: {
    Carousel,
  },
};
</script>
