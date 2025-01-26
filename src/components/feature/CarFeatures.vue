<template>
  <div class="w-full h-full block p-3">
    <h2 class="text-xl font-bold text-black py-2">EXTRA FEATURES</h2>

    <ul class="grid grid-cols-4 gap-3 py-2">
      <li
        class="flex items-start p-0 leading-3 gap-1"
        v-for="feature in features"
        :key="feature"
      >
        <i
          class="bi bi-check-circle-fill text-lg font-medium text-blue-800"
        ></i>
        <p class="font-medium text-lg text-black text-wrap">
          {{ feature }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["features"],
};
</script>
