<template>
  <div class="bg-white p-3 w-full h-auto">
    <ul class="flex justify-start items-center p-3 gap-3">
      <li
        class="w-auto h-auto text-xl font-medium text-gray-300 cursor-pointer uppercase"
        v-for="carPartTab in carPartTabs"
        :key="carPartTab.id"
        @click="activeTabs(carPartTab.id)"
      >
        {{
          carPartTab.id === 1
            ? "first"
            : carPartTab.id === 2
            ? "second"
            : "third"
        }}
      </li>
    </ul>
    <div class="px-3 py-2 ease-in-out" v-if="activeIndex === 1">
      <p class="text-lg font-normal text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab
      </p>
    </div>
    <div class="px-3 py-2 ease-in-out" v-else-if="activeIndex === 2">
      <CarPartsAdditionalInformation
        :car-part-additional-information="carPartAdditionalInformation"
      />
    </div>
    <div class="px-3 py-2 ease-in-out" v-else>
      <div class="block">
        <h2 class="text-xl font-normal text-black text-start uppercase py-2">
        {{ localData && localData.length }}  review for OE Replacement Calipers
        </h2>
        <div class="py-2 flex justify-start items-center" v-for="localreview in localData" :key="localreview">
          <div class="flex justify-start items-center w-auto ">
            <img :src="carPartReviewPerson.image" class="w-32 h-12" />
          </div>
          <div class="flex justify-start items-center w-full">
            <div class="block w-full px-2">
              <p class="text-lg font-medium text-black">
                {{ localreview.name }} - {{ localreview.date }}
              </p>
              <p class="text-sm font-semibold text-black">
                {{ localreview.note }}
              </p>
            </div>
          </div>
        </div>

        <div class="py-4 flex justify-start items-center w-full">
          <form class="block w-full" @submit.prevent="addNewComment()">
            <h2 class="text-2xl font-normal text-black">Add a review</h2>
            <div class="block w-full my-2">
              <div class="flex justify-start items-center gap-4">
                <div class="block w-1/2">
                  <label class="px-2 py-1 text-lg font-normal text-black">
                    Name
                  </label>
                  <input
                    class="w-full ring-1 ring-gray-300 rounded-full h-12 px-3 text-xl font-medium text-black text-start"
                    type="text"
                    v-model="name"
                  />
                </div>
                <div class="block w-1/2">
                  <label class="px-2 py-1 text-lg font-normal text-black">
                    Email
                  </label>
                  <input
                    class="w-full ring-1 ring-gray-300 rounded-full h-12 px-3 text-xl font-medium text-black text-start"
                    type="text"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="block w-full py-2">
                <label class="px-2 py-1 text-lg font-normal text-black">
                  Your review
                </label>
                <textarea
                  class="w-full ring-1 ring-gray-300 rounded-lg h-24 px-3 py-2 text-xl font-medium text-black text-start"
                  type="text"
                  v-model="review"
                />
              </div>
              <div class="flex justify-start w-full py-3 px-2">
                <input type="checkbox" class="" v-model="reviewCheck" />
                <p class="text-sm font-light text-gray-500 px-2">
                  I agree that my submitted data is being collected and stored.
                  For further details on handling user data, see our Privacy
                  Policy.
                </p>
              </div>
              <div class="flex justify-start w-full py-2">
                <button
                  class="px-4 py-3 rounded-full bg-gray-300 text-lg font-semibold uppercase"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  carPartTabs,
  carPartAdditionalInformation,
  carPartReviewPerson,
} from "@/store/data";
import CarPartsAdditionalInformation from "./CarPartsAdditionalInformation.vue";

export default {
  data() {
    return {
      activeIndex: 3,
      carPartTabs,
      carPartAdditionalInformation,
      carPartReviewPerson,
      name:'',
      email:'',
      review:'',
      reviewCheck:false,
      localData: [],
    };
  },

  components: {
    CarPartsAdditionalInformation,
  },

  created(){
    this.loadLocalData()
  },
  methods: {
    activeTabs(i) {
      this.activeIndex = i;
    },

    loadLocalData() {
      const storedData = localStorage.getItem("myLocalData");
      if (storedData) {
        this.localData = JSON.parse(storedData);
      } else {
        this.localData = myData;
        this.saveLocalData();
      }
    },

    saveLocalData() {
      localStorage.setItem("myLocalData", JSON.stringify(this.localData));
    },

    getFormattedDate() {
      const date = new Date();
      return date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      }); 
    },

    addNewComment() {
      const newReview = {
        id: this.localData.length + 1,
        name: this.name,
        date: this.getFormattedDate(),
        note: this.review,
        check:this.reviewCheck,
        image: require("@/assets/man2.png"),
      };
      this.localData.push(newReview);
      this.saveLocalData();
    },
  },
};
</script>
