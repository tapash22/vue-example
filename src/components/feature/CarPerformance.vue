<template>
  <div class="w-full h-full p-3">
    <!-- Grid Container -->
    <div class="grid grid-cols-2 gap-6">
      <!-- First Column: Single Block -->
      <div>
        <h3 class="flex justify-start items-center gap-2">
          <i :class="engineDetails[0].icon" class="text-3xl text-blue-300"></i>
          <span class="text-lg font-bold text-black">{{
            engineDetails[0].title
          }}</span>
        </h3>
        <ul class="block w-full p-2">
          <li
            v-for="(feature, index) in engineDetails[0].child"
            :key="index"
            class="flex justify-between py-2 border-b-2 border-blue-300"
          >
            <span class="font-semibold text-sm text-black">{{
              feature.title
            }}</span>
            <span class="text-black font-semibold text-sm">{{
              feature.value
            }}</span>
          </li>
        </ul>
      </div>

      <!-- Second Column: Two Stacked Blocks -->
      <div class="grid grid-rows-2 gap-6 w-full">
        <!-- Dynamic Stacked Blocks -->
        <div
          v-for="(block, blockIndex) in engineDetails.slice(1)"
          :key="blockIndex"
          class="w-full"
        >
          <h3 class="flex justify-start items-center gap-2">
            <i :class="block.icon" class="text-3xl text-blue-300"></i>
            <span class="text-lg font-bold text-black">{{ block.title }}</span>
          </h3>
          <ul class="block w-full p-2">
            <li
              v-for="(feature, index) in block.child"
              :key="index"
              class="flex justify-between py-2 border-b-2 border-blue-300"
            >
              <span class="font-semibold text-sm text-black">{{
                feature.title
              }}</span>
              <span class="text-black font-semibold text-sm">{{
                feature.value
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["engineDetails"],
};
</script>
