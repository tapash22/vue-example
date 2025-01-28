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
    :paginationPadding="2"
    paginationColor="blue"
  >
    <slide style="padding: 10px" v-for="i in expartDetails" :key="i.id">
      <div
        class="card w-full h-auto bg-transparent p-2 flex justify-center items-center"
      >
        <div class="block">
          <div class=" w-full flex justify-center items-center">
            <img
              :src="i.image"
              class="w-1/2 h-36 "
            />
          </div>
          <p
            class="text-lg font-medium text-black text-justify p-4 bg-white rounded-t-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            recusandae ipsam doloremque totam ut consequatur voluptate illo,
            odio delectus non, quae ex nesciunt temporibus ducimus sed dolores.
            Dolores, esse obcaecati!
          </p>
          <IconList :icon-list="i.iconList" />
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { expartDetails } from "@/store/data";
import IconList from "./IconList.vue";

export default {
  data() {
    return {
      expartDetails,
      hoveredIcon: null,
    };
  },
  components: {
    Carousel,
    Slide,
    IconList
  },

};
</script>

<style>
.VueCarousel-pagination {
  align-items: left;
  margin-left: -47%;
}
</style>
