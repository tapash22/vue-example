<template>
  <div class="w-full h-auto flex justify-between align-middle">
    <div class="w-2/6 h-auto p-2 block">
      <img
        src="@/assets/part.png"
        class="w-full h-auto bg-cover bg-center bg-white shadow-lg shadow-gray-300 rounded-lg"
      />
      <div class="flex justify-start items-center p-2 gap-3">
        <img
          src="@/assets/part1.png"
          class="w-1/3 h-32 bg-cover bg-center bg-white p-2 rounded-lg opacity-80"
        />
        <img
          src="@/assets/part2.png"
          class="w-1/3 h-32 bg-cover bg-center bg-white p-2 rounded-lg opacity-60"
        />
        <img
          src="@/assets/part3.png"
          class="w-1/3 h-32 bg-cover bg-center bg-white p-2 rounded-lg opacity-60"
        />
      </div>
    </div>
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
        <div class="flex justify-start items-center gap-4 px-4 py-3">
          <div
            class="flex justify-start items-center rounded-lg ring-1 w-24 h-12 p-2"
          >
            <input
              class="w-2/3 h-12 px-3 text-2xl font-medium text-black"
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
      <ul class="px-3 w-full h-auto block">
        <li
          class="w-full h-auto py-2 flex justify-start items-center gap-2"
          v-for="carP in carParts"
          :key="carP.id"
        >
          <span class=" h-auto text-lg font-semibold text-black w-auto whitespace-normal">
            {{ carP.title }}
          </span>
          :
          <span class="w-full flex justify-start items-center h-auto text-lg font-normal text-black " v-if="typeof carP.value === 'string' || typeof carP.value === 'number'" >
            {{ carP.value }}
          </span>
          <span class="w-full flex justify-start items-center h-auto text-lg font-normal text-black gap-2" v-else>
            <span v-for="carV in carP.value" :key="carV" class="gap-3">

              {{ carV }} ,
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { carParts } from "@/store/data";

export default {
  data() {
    return {
      count: 1,
      carParts,
    };
  },

  methods: {
    countPlus() {
      this.count++;
    },
    countMinuse() {
      this.count--;
    },
  },
};
</script>
