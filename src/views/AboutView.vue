<template>
  <div class="about">
    <div
      class="container flex justify-between items-center w-full h-auto py-5"
      v-for="about in aboutInfo"
      :key="about.id"
    >
      <div
        class="flex justify-between items-center w-full"
        v-if="!about.messages"
      >
        <div class="w-1/2">
          <img :src="about.image" class="bg-cover bg-center" />
        </div>
        <div class="block w-1/2 h-auto p-2">
          <h2 class="text-xl font-bold text-black text-start mb-3 uppercase">
            {{ about.title }}
          </h2>
          <p class="textt-sm font-normal text-gray-500 text-justify">
            {{ about.subtitle }}
          </p>
          <p class="text-sm font-normal text-black text-justify py-3">
            {{ about.description }}
          </p>
          <span class="text-sm font-thin text-gray-700">
            {{ about.tag }}
          </span>
        </div>
      </div>

      <div class="flex justify-start items-center w-full" v-else>
        <div class="block w-1/2 h-auto p-4">
          <h2 class="text-xl font-bold text-black text-start mb-3 uppercase">
            {{ about.title }}
          </h2>
          <p class="textt-sm font-normal text-gray-500 text-justify">
            {{ about.subtitle }}
          </p>
          <hr class="my-3" />
          <ul class="block w-full h-auto">
            <li
              class="flex justify-start items-center gap-2"
              v-for="message in about.messages"
              :key="message"
            >
              <i class="bi bi-check text-blue-500 text-lg font-semibold"></i>
              <span class="text-sm font-medium text-black">
                {{ message }}
              </span>
            </li>
          </ul>
        </div>
        <div class="w-1/2 flex justify-end">
          <img :src="about.image" class="bg-cover bg-center" />
        </div>
      </div>
    </div>

    <div class="w-full h-auto bg-gray-900 p-5">
      <CarCarousel :carGallery="carGallery" />
    </div>
  </div>
</template>

<script>
import { aboutInfo, carGallery } from "@/store/data";
import CarCarousel from "@/components/carousel/CarCarousel.vue";
export default {
  data() {
    return {
      aboutInfo,
      carGallery,
    };
  },

  components: {
    CarCarousel,
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
}
/* .col,
.col-6 {
  background: red;
  border: 2px solid gray;
} */
</style>
