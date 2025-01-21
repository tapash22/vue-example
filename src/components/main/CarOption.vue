<template>
  <div
    class="p-5 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full sm:block lg:flex md:flex xl:flex"
  >
    <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
      <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
        <router-link to="/">
          <img
            src="@/assets/car.jpg"
            class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
          />
          <h2
            class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
          >
            This is new car
          </h2>
        </router-link>
      </div>
      <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
        <img
          src="@/assets/car.jpg"
          class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
        />
        <h2
          class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
        >
          This is new car
        </h2>
      </div>
    </div>
    <div
      class="sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 overflow-hidden border-4 rounded-lg relative"
    >
      <img
        src="@/assets/car.jpg"
        class="relative scale-100 hover:scale-110 transition duration-300 hover:duration-700 rounded-lg rotate-0 hover:rotate-2 h-full"
      />

      <h2 class="text-3xl text-white font-bold w-full absolute top-1/2 left-72">
        This is new car
      </h2>
    </div>

    <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
      <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
        <img
          src="@/assets/car.jpg"
          class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
        />
        <h2
          class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
        >
          This is new car
        </h2>
      </div>
      <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
        <img
          src="@/assets/car.jpg"
          class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
        />
        <h2
          class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
        >
          This is new car
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
