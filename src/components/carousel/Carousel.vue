<template>
  <carousel
    :perPageCustom="[
      [480, 1],
      [768, 2],
      [992, 3],
      [1200, 3],
    ]"
    :navigate-to="someLocalProperty"
    :mouse-drag="false"
    paginationActiveColor="red"
    paginationSize="10"
    paginationPadding="2"
    paginationColor="blue"
  >
    <slide style="padding: 10px" v-for="i in 6" :key="i">
      <div
        class="card w-full h-[300px] bg-transparent p-2 flex justify-center items-center "
      >
        <div class="block ">
          <div class="flex justify-center items-center">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              class="w-20 h-20 ring-2 ring-gray-500 rounded-full"
            />
          </div>
          <p class="text-lg font-medium text-black text-justify p-4 m-1 bg-white rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            recusandae ipsam doloremque totam ut consequatur voluptate illo,
            odio delectus non, quae ex nesciunt temporibus ducimus sed dolores.
            Dolores, esse obcaecati!
          </p>
          <ul class="w-full h-auto flex justify-center items-center p-2 gap-3">
            <li class="w-auto h-auto p-1" v-for="icon in iconlist" :key="icon">
              <i class="text-xl font-bold text-blue-300" :class="icon"></i>
            </li>
          </ul>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      iconlist: [
        "bi bi-border-width",
        "bi bi-heart",
        "bi bi-person",
        "bi bi-cart3",
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style>
.VueCarousel-pagination {
  align-items: left;
  margin-left: -47%;
}
</style>
