<template>
  <div class="cardetails">
    <div class="container mx-auto flex gap-2 p-4 py-5">
      <div class="image w-2/4 h-[100vh] p-2 border-2 shadow-lg">
        <!-- <img src="@/assets/car.jpg" class="p-2" /> -->
        <CarImage />
      </div>
      <div class="details w-1/4 h-[50vh] p-2 bg-white ">
        <h4 class="text-2xl font-semibold uppercase mb-2">Name of equipments for use</h4>
        <h5 class="text-2xl font-medium text-yellow-800 mb-2"><span class="text-xl font-bold text-gray-500">$</span>300.00
        </h5>
        <!-- rating -->
        <div class="flex items-center mb-3">
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>First star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Second star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Third star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fourth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fifth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <p class="text-sm font-normal text-gray-600">
            ( No Rewies )
          </p>
        </div>

        <!-- rating end -->
        <div>
          <ul>
            <li class="text-yellow-400 text-lg font-normal ">
              <i class="bi bi-check text-yellow-400 text-3xl font-semibold" ></i> In Stock
            </li>
            <li class="text-yellow-400 text-lg font-normal ">
              <i class="bi bi-check text-yellow-400 text-3xl font-semibold" ></i> Free delivery available
            </li>
            <li class="text-yellow-400 text-lg font-normal ">
              <i class="bi bi-check text-yellow-400 text-3xl font-semibold" ></i> Sale on 30% off
            </li>
          </ul>
        </div>

        <div class="block">
          <button lass="bg-gray-400 text-yellow-400 text-lg uppercase w-1/2 h-10">Add To Card</button>
          <button class="bg-yellow-400 text-white text-lg uppercase w-1/2 h-10 ">Buy IT NOW</button>
        </div>
      </div>
    <div class="color h-[100vh]  w-1/4 flex justify-center items-center">
      <div class="bg-gray-200 p-3">

      </div>
      <h4 class="flex  ">color:<input type="checkbox" class="w-[30px] h-[20px] " v-model="value" />red <br />
        <input type="checkbox" class="w-[30px] h-[20px] " v-model="value" />green
      </h4>
    </div>
  </div>
</div></template>

<script>

import CarImage from '@/components/cars/CarImage.vue';

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },

  components: {
    CarImage,
  }
}
</script>

<style></style>