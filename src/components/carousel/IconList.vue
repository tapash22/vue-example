<template>
  <ul
    class="w-full h-auto flex justify-center items-center p-2 gap-3 bg-gray-400 rounded-b-xl relative"
  >
    <li
      class="w-auto h-auto p-1 relative"
      v-for="icon in iconList"
      :key="icon.id"
      @mouseover="hoveredIcon = icon.id"
      @mouseleave="hoveredIcon = null"
    >
      <p
        v-if="hoveredIcon === icon.id"
        :class="[
          'h-auto p-1 rounded-full ring-2 -top-10 -left-32 ring-blue-800 absolute bg-gray-400 text-black font-medium text-lg text-center z-40 ',
        ]"
        :style="{ width: getDynamicWidth(icon.data) + 'px' }"
      >
        {{ icon.data }}
      </p>
      <i
        class="text-3xl font-extrabold text-blue-900 z-50 cursor-pointer"
        :class="icon.icon"
      ></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "IconList",
  props: {
    iconList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      hoveredIcon: null,
    };
  },
  methods: {
    getCounts(text) {
      if (!text) return { letterCount: 0, spaceCount: 0, plusCount: 0 };
      const letterCount = text.replace(/[^a-zA-Z]/g, "").length; // Letters only
      const spaceCount = (text.match(/ /g) || []).length; // Spaces
      const plusCount = (text.match(/\+/g) || []).length; // `+` characters
      return { letterCount, spaceCount, plusCount };
    },
    getDynamicWidth: (text) => {
      const letterCount = text.replace(/ /g, "").length; // Count letters
      const spaceCount = (text.match(/ /g) || []).length; // Count spaces
      const totalLength = letterCount + spaceCount;
      const additionalWidth = totalLength * 12 + 5; // Add 12px for each word/space
      return additionalWidth;
    },
  },
};
</script>

