<template>
  <div class="bg-white p-3 w-full h-auto">
    <ul class="flex justify-start items-center p-2 gap-3">
      <li
        class="w-auto h-auto text-xl font-medium text-gray-300 cursor-pointer uppercase"
        v-for="i in 3"
        :key="i"
        @click="activeTabs(i)"
      >
        {{ i === 1 ? 'first' : i=== 2 ? 'second' : 'third' }}
      </li>
    </ul>
    <div class="px-3 ease-in-out" v-if="activeIndex === 1">hi</div>
    <div class="px-3 ease-in-out" v-else-if="activeIndex === 2">this</div>
    <div class="px-3 ease-in-out" v-else>me</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    activeTabs(i) {
      this.activeIndex = i;
    },
  },
};
</script>
