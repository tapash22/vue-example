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
      <h2 class="text-2xl font-bold text-black py-2">EXTRA FEATURES</h2>

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
  </div>
</template>

<script>
import { featuresData,features } from "@/store/data";

export default {
  data() {
    return {
        featuresData,
        features
    };
  },
};
</script>

<style scoped></style>
