<template>
    <div class="w-full">
      <div class="flex">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="['cursor-pointer', 'px-4 py-2', {'bg-blue-500 text-white': activeTab === index, 'bg-gray-300': activeTab !== index}]"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  