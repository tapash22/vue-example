<template>
  <div class="w-3/4 h-full block">
    <!-- image block -->
    <div class="w-full h-auto p-2 flex justify-center align-center">
      <img
        src="@/assets/car.jpg"
        class="scale-100 ring-4 ring-blue-500 rounded-xl"
      />
    </div>
    <!-- image block end -->

    <!-- car briefing -->
    <div class="w-full h-auto block p-3">
      <h2 class="text-2xl font-bold text-black py-2">Vehicle overview</h2>
      <span class="text-sm font-normal text-gray-400 text-justify">
        Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr
        convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel,
        dapibus lectus. Etiam ac suscipit eros, eget maximus
      </span>
      <p class="text-sm font-normal text-black text-justify py-2 leading-6">
        Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien.
        Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque.
        Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi
        aliquam ut turpis sit amet ultrices. Vestibulum mattis blandit nisl, et
        tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet.
        Ut rutrum risus et nunc pretium scelerisque. Fusce viverra, ligula quis
        pellentesque interdum, leo felis congue dui, ac accumsan sem nulla id
        lorem. Praesent ut tristique dui, nec condimentum lacus. Maecenas
        lobortis ante id egestas placerat. Nullam at ultricies lacus. Nam in
        nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus
        gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue
        diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget
      </p>

      <div
        class="w-full h-auto px-2 py-4 flex justify-start align-middle gap-2"
      >
        <div
          class="w-1/12 h-auto flex justify-center items-center ring-2 ring-blue-300 rounded-full px-4"
        >
          <i class="bi bi-disc-fill text-2xl font-extrabold text-blue-400"></i>
        </div>
        <p class="text-lg font-medium text-black text-justify w-11/12 px-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <p class="text-sm font-normal text-black text-justify py-2 leading-6">
        Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus.
        Nam in nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus
        gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue
        diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget
        tellus laoreet ultrices.
      </p>
    </div>
    <!-- car briefing end -->

    <!-- features -->
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
    <!-- features end -->

    <div class="w-full h-full p-3">
      <!-- Grid Container -->
      <div class="grid grid-cols-2 gap-6">
        <!-- First Column: Single Block -->
        <div>
          <h3 class="flex justify-start items-center gap-2">
            <i
              :class="engineDetails[0].icon"
              class="text-3xl text-blue-300"
            ></i>
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
              <span class="text-lg font-bold text-black">{{
                block.title
              }}</span>
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

    <!-- feature option -->
    <div class="w-full h-full block p-3">
      <h2 class="text-2xl font-bold text-black py-2">Features & Options</h2>
      <div class="grid grid-cols-2 gap-8">
        <!-- Loop through groups -->
        <div v-for="(group, groupName) in featuresData" :key="groupName">
          <!-- Group title -->
          <h2 class="text-sm font-bold py-2">{{ group.title }}</h2>
          <!-- List items -->
          <ul class="space-y-2">
            <li
              v-for="(item, index) in group.items"
              :key="index"
              class="flex items-start gap-2"
            >
              <i class="bi bi-check-circle text-blue-500"></i>
              <span class="text-base font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- feature option end -->
    <hr class="my-3 px-5" />

    <!-- design -->
    <div class="w-full h-full p-3">
      <div class="flex justify-start items-center gap-2">
        <div class="w-1/4 h-auto block" v-for="design in designView" :key="design.id">
          <h2 class="text-sm font-semibold text-black py-2">
            {{ design.title }}
          </h2>
            <ul class="block">
              <li class="flex justify-start items-center gap-2 py-1" v-for="d in design.child" :key="d">
                <i class="bi bi-check-circle text-lg font-medium text-blue-400"></i>
                <p class="text-sm font-medium text-black">
                  {{ d }}
                </p>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <!-- design end-->

  </div>
</template>

<script>
import {
  featuresData,
  features,
  engineDetails,
  designView,
} from "@/store/data";

export default {
  data() {
    return {
      featuresData,
      features,
      engineDetails,
      designView,
    };
  },
};
</script>

<style scoped></style>
