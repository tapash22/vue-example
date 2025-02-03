<template>
  <div class="w-2/6 h-auto p-2 block">
    <div
      class="bg-white w-full h-auto overflow-hidden shadow-lg shadow-gray-300 flex justify-center items-center rounded-lg"
    >
      <!-- Vue Transition for Smooth Image Fade Effect -->
      <transition name="fade" mode="out-in">
        <img
          :src="selectedImage"
          :key="selectedImage"
          class="w-full h-auto bg-cover bg-center rounded-lg transform transition-all duration-500 ease-in-out scale-75 hover:scale-100"
        />
      </transition>
    </div>
    <!-- Main Image -->

    <!-- Thumbnails -->
    <div class="flex justify-start items-center p-2 gap-3">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :class="[
          'w-1/3 h-32 bg-cover bg-center bg-white p-2 rounded-lg',
          image.src === selectedImage ? 'opacity-100 ring-1 ring-gray-600' : 'opacity-60',
        ]"
        @click="selectedImage = image.src"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("@/assets/part1.png") },
        { src: require("@/assets/part2.png") },
        { src: require("@/assets/part3.png") },
      ],
      selectedImage: "",
    };
  },
  mounted() {
    this.selectedImage = this.images[0].src;
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
