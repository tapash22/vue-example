<template>
  <ul class="w-full h-auto block">
    <li
      class="w-full h-auto p-2 flex justify-start items-center border-b-2 border-x-white bg-gray-400 "
      v-for="cardetail in carDetails"
      :key="cardetail.title"
    >
      <span
        class="text-sm font-normal text-black flex justify-start align-middle  w-50 px-2"
        >{{ cardetail.title }}</span
      ><span
        class="text-sm font-normal text-black flex justify-start align-middle w-50"
        >{{ cardetail.value }}</span
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ["carDetails"],
};
</script>
