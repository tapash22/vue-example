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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
