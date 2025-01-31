<template>
  <div class="block">
    <h2 class="text-xl font-medium text-black text-start uppercase">
      Additional information
    </h2>
    <table class="border-collapse border border-gray-400 w-full my-4">
      <tbody>
        <tr
          class="py-3 px-2 flex ring-1 ring-gray-200"
          v-for="additionalInformation in carPartAdditionalInformation"
          :key="additionalInformation.id"
        >
          <p
            class="text-xl font-normal text-black gap-2 flex text-wrap p-0 m-0"
            :style="{
              width: getDynamicWidth(additionalInformation.title) + 'px',
            }"
          >
            {{ additionalInformation.title }} :
          </p>
          <p
            class="text-lg font-normal text-black w-full flex justify-start gap-2 px-3 m-0"
          >
            {{ additionalInformation.value }}
          </p>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["carPartAdditionalInformation"],

  methods:{
    getDynamicWidth: (text) => {
      const letterCount = text.replace(/ /g, "").length; // Count letters
      const spaceCount = (text.match(/ /g) || []).length; // Count spaces
      const totalLength = letterCount + spaceCount;
      const additionalWidth = totalLength * 12 + 15; // Add 12px for each word/space
      return additionalWidth;
    },
  }
};
</script>
