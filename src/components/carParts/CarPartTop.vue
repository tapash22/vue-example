<template>
  <div class="w-full h-auto flex justify-between align-middle">
   <CarPartsDetailsImage />
    <div class="w-4/6 h-auto p-2 block">
      <h1 class="text-3xl font-bold px-5 text-black">$195.00 – $295.00</h1>
      <form class="w-full h-auto p-2">
        <div class="block px-4 py-1">
          <label class="px-3 py-1 text-lg font-normal text-black"> Year </label>
          <select
            class="w-full h-12 m-1 py-1 px-3 ring-1 ring-gray-300 rounded-2xl"
          >
            <option class="w-full h-16 py-1" selected>English</option>
            <option class="w-full h-20 py-1">Bangle</option>
          </select>
        </div>
        <div class="block px-4 py-1">
          <label class="px-3 py-1 text-lg font-normal text-black">
            Model
          </label>
          <select
            class="w-full h-12 m-1 py-1 px-3 ring-1 ring-gray-300 rounded-2xl"
          >
            <option class="w-full h-16 py-1" selected>2024</option>
            <option class="w-full h-16 py-1">2022</option>
            <option class="w-full h-20 py-1">2019</option>
          </select>
        </div>
        <div class="block px-4 py-1">
          <label class="px-3 py-1 text-lg font-normal text-black"> Make </label>
          <select
            class="w-full h-12 m-1 py-1 px-3 ring-1 ring-gray-300 rounded-2xl"
          >
            <option class="w-full h-16 py-1" selected>CSRM</option>
            <option class="w-full h-20 py-1">CMMS</option>
          </select>
        </div>

        <div class="block px-4 py-1">
          <label class="px-3 py-1 text-lg font-normal text-black">
            Color
          </label>
          <div class="flex justify-start items-center px-3 gap-2">
            <div
              class="w-6 h-6 rounded-full ring-2 ring-gray-400 bg-black"
              v-for="i in 2"
              :key="i"
            >
              {{ (i = 1 ? "" : "") }}
            </div>
          </div>
        </div>
        <div class="block px-4 py-1">
          <label class="px-3 py-1 text-lg font-normal text-black">
            Engraving
          </label>
          <select
            class="w-full h-12 m-1 py-1 px-3 ring-1 ring-gray-300 rounded-2xl"
          >
            <option class="w-full h-16 py-1" selected>Yes</option>
            <option class="w-full h-20 py-1">No</option>
          </select>
        </div>
        <div class="flex justify-start items-center gap-3 px-4 py-3">
          <div
            class="flex justify-start items-center rounded-lg ring-1 w-24 h-12 p-1"
          >
            <input
              class="w-2/3 h-12 px-3 text-xl font-medium text-black text-center"
              type="number"
              v-model="count"
            />
            <div class="block w-1/3 h-auto">
              <i
                class="bi bi-chevron-compact-up text-black w-full font-bold text-lg p-2"
                @click="countPlus()"
              ></i>
              <i
                class="bi bi-chevron-compact-down text-black w-full font-bold text-lg p-2"
                @click="countMinuse()"
              ></i>
            </div>
          </div>
          <button
            class="px-4 py-2 text-lg font-semibold text-white bg-blue-400 rounded-full"
          >
            <i class="bi bi-cart-check"></i>
            BUY NOW
          </button>
        </div>
      </form>
      <CarPartsInfo :car-parts="carParts" />
    </div>
  </div>
</template>

<script>
import { carParts } from "@/store/data";
import CarPartsDetailsImage from "./CarPartsDetailsImage.vue";
import CarPartsInfo from "./CarPartsInfo.vue";

export default {
  data() {
    return {
      count: 1,
      carParts,
    };
  },

  components:{
    CarPartsDetailsImage,
    CarPartsInfo
  },

  methods: {
    countPlus() {
      this.count++;
    },
    countMinuse() {
      this.count--;
    },
  },

  watch: {
  $route() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


};
</script>
