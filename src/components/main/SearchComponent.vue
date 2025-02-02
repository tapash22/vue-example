<template>
  <div
    class="w-full"
    style="margin-top: 250px !important; margin-bottom: 250px !important"
  >
    <h2
      class="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold tracking-widest py-4 uppercase text-center text-black"
    >
      Select your vehicle
    </h2>
    <div
      class="search block sm:block md:flex lg:flex xl:flex gap-1 justify-center w-full"
    >
      <div
        class="h-24 ring-4 ring-white items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
      >
        <select
          class="h-full w-full bg-white font-bold text-2xl tracking-wider text-center overflow-hidden"
        >
          <option selected class="font-bold text-2xl">Select year</option>
          <option class="font-bold text-2xl" value="1">One</option>
          <option class="font-bold text-2xl" value="2">Two</option>
          <option class="font-bold text-2xl" value="3">Three</option>
        </select>
      </div>
      <div
        class="h-24 ring-2 ring-white items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
      >
        <select
          class="h-full w-full bg-white font-bold text-2xl tracking-wider text-center overflow-hidden"
        >
          <option selected class="font-bold text-2xl">Select Brand</option>
          <option class="font-bold text-2xl" value="1">One</option>
          <option class="font-bold text-2xl" value="2">Two</option>
          <option class="font-bold text-2xl" value="3">Three</option>
        </select>
      </div>
      <div
        class="h-24 ring-2 ring-white items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
      >
        <select
          class="h-full w-full bg-white tracking-wider text-center font-bold text-2xl overflow-hidden"
        >
          <option selected class="font-bold text-2xl">Select Model</option>
          <option  class="font-bold text-2xl py-1" value="1">One</option>
          <option class="font-bold text-2xl py-1" value="2">Two</option>
          <option class="font-bold text-2xl py-1" value="3">Three</option>
        </select>
      </div>
      <div
        class="h-24 flex justify-center bg-blue-100 ring-2 ring-white sm:w-full md:w-1/12 lg:w-1/12 xl:w-1/12 rounded-r-xl"
      >
        <button
          class="bg-transparent text-2xl font-bold tracking-wider text-center text-black uppercase"
        >
          GO
        </button>
      </div>
    </div>
    <div
      class="tag hidden sm:hidden md:flex lg:flex xl:flex justify-center mt-5"
    >
      <div class="w-2/3 flex justify-evenly">
        <a
          href="#"
          class="text-xl text-black uppercase font-medium tracking-wide"
          >Shop By Product</a
        >
        <span class="font-semibold text-xl text-black">|</span>
        <a href="#" class="text-xl text-black font-medium tracking-wide"
          >Shop By Brand</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
