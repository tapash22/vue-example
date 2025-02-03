<template>
  <div class="w-1/3 h-auto p-3 block">
    <h2 class="text-3xl font-bold text-black text-start my-3 uppercase">
      Stay in touch
    </h2>
    <div class="block w-full p-4 bg-white">
      <div class="block py-2">
        <h2 class="text-xl font-bold text-red-400 text-start my-2 uppercase">
          Address:
        </h2>
        <p class="text-sm font-light text-black">
          Chicago, IL 60606, 123, New Lenox
        </p>
      </div>
      <div class="block py-2">
        <h2 class="text-xl font-bold text-red-400 text-start my-2 uppercase">
          Phone:
        </h2>
        <p class="text-sm font-light text-black">
          0(800) 123-4545-67 <br /><br />
          0(800) 547-2589-22
        </p>
      </div>
      <div class="block py-2">
        <h2 class="text-xl font-bold text-red-400 text-start my-2 uppercase">
          E-mail:
        </h2>
        <p class="text-sm font-light text-black">
          info@example.com support@example.com
        </p>
      </div>
      <ul class="flex justify-start items-center py-5 gap-3">
        <li v-for="icon in icons" :key="icon">
          <i :class="icon" class="text-2xl font-medium text-black" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icons"],
};
</script>
