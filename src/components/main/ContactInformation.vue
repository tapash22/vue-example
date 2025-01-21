<template>
  <div class="p-5 sm:p-2 md:p-5 lg:p-5 xl:p-5 w-full h-full">
    <div class="email block sm:block md:flex lg:flex xl:flex p-5">
      <div
        class="w-full h-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 gap-3 align-middle flex justify-center space-x-2 my-auto px-3 sm:px-3 md:px-2 lg:px-0 xl-px-0"
      >
        <div
          class="ring-8 ring-blue-500 rounded-full flex justify-center items-center border-white pa-2 w-10 sm:w-10 md:w-20 lg:w-24 xl:w-24 h-10 sm:h-10 md:h-20 lg:h-24 xl:h-24 my-auto"
        >
          <i
            class="bi bi-envelope-paper text-5xl font-bold text-white hover:scale-150 transition-all"
          ></i>
        </div>
        <div class="block my-auto">
          <h2
            class="uppercase text-xl sm:text-xl md:text-2xl ld:text-3xl xl:text-3xl font-semibold text-white"
          >
            Signup and save !
          </h2>
          <p class="text-sm font-thin text-white">
            Exclusive email offers & Limited time discount specials
          </p>
        </div>
      </div>
      <div
        class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 flex justify-center h-full"
      >
        <form
          class="flex my-auto w-full h-20 border-2 border-red-500 rounded-xl"
        >
          <input
            class="form-control w-3/4 h-20 text-lg font-bold rounded-l-lg"
            placeholder="Enter your email"
          />
          <button
            class="w-1/4 bg-red-500 text-2xl uppercase font-medium text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
