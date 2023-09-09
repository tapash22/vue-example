<template>
  <div class="car-view w-full h-full p-3 bg-gray-300">
    <div class="w-full h-auto bg-white px-10 py-2">
      <h3 class="text-black text-xl font-bold">Honda Elevate</h3>
      <div class="w-full flex">
        <star-rating :rating="rating" star-size="20"></star-rating>
        &nbsp; |
        <router-link to="" class="text-sm pt-1 font-normal text-blue-600 px-3"
          >Review</router-link
        >
      </div>
    </div>
    <!-- <div class="w-full h-64 py-3 ">
            <ul class="flex gap-3">
    <li v-for="tab in tabs" :key="tab.id">
      <button @click="activeTab = tab.id">{{ tab.label }}</button>
    </li>
  </ul>
  <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="bg-white p-3">
    {{ tab.content }}
  </div>

  

        </div> -->
    <!-- tabs with scroll -->

    
    <div class=" my-2">
      <nav class="sticky top-0 ring-1 ring-gray-200">
        <ul class="flex py-3 bg-white gap-6 px-4 ">
          <li v-scrollspy="'section1'" class="text-sm font-semibold text-gray-600  "><a href="#section1" class="hover:text-black">Overviews</a></li>
          <li v-scrollspy="'section2'" class="text-sm font-semibold text-gray-600 "><a href="#section2" class="hover:text-black">Versions</a></li>
          <li v-scrollspy="'section3'" class="text-sm font-semibold text-gray-600 "><a href="#section3" class="hover:text-black">Offers</a></li>
          <li v-scrollspy="'section4'" class="text-sm font-semibold text-gray-600 "><a href="#section4" class="hover:text-black">Key Specs</a></li>
          <li v-scrollspy="'section5'" class="text-sm font-semibold text-gray-600 "><a href="#section5" class="hover:text-black">Expart Optiions</a></li>
          <li v-scrollspy="'section6'" class="text-sm font-semibold text-gray-600 "><a href="#section6" class="hover:text-black">Mileage</a></li>
        </ul>
      </nav>

      <div>
        <section id="section1" v-scrollspy-target>
          <div class="w-full p-5 h-auto block sm:block md:flex lg:flex xl:flex bg-white">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-2  flex justify-center align-middle">
              <img src="@/assets/car.jpg" class="w-[600px] h-[350px] ring-1 ring-gray-500" />
            </div>
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-2  flex">
              <div class="block w-full ">
                <div class="flex w-full bg-white gap-3">
                  <div class="w-1/2 block h-16 ring-1 ring-gray-400 ">
                    <div class="flex px-2">
                      <p class="text-lg font-normal w-full">
                      Version
                    </p>
                    <i class="bi bi-arrow-right text-2xl"></i>

                    </div>
                    
                    <p class="text-base font-medium p-0 m-0 flex justify-center w-full text-gray-700">
                      show options
                    </p>
                  </div>

                  <div class="w-1/2 block h-16 ring-1 ring-gray-400 ">
                    <div class="flex px-2">
                      <p class="text-lg font-normal w-full">
                      City
                    </p>
                    <i class="bi bi-arrow-right text-xl"></i>

                    </div>
                    
                    <p class="text-base font-medium p-0 m-0 flex justify-center w-full text-gray-700">
                      show city
                    </p>
                  </div>
                </div>

                <div class="w-full p-2 py-3 mt-3 h-auto flex">
                  <p class="text-xl font-bold text-gray-600">
                    TK. 20.00 Lakh
                  </p>
                </div>
                <div class="w-full p-2 h-auto flex justify-between py-3">
                  <p class="text-sm font-medium text-gray-500">
                    EMI Price: (calculating price)
                  </p>
                  <button class="bg-transparent ring-2 ring-yellow-800 px-4 py-2 text-sm font-normal">
                    Get EMI Offers
                  </button>
                </div>

                <div class="w-full p-2 h-auto flex py-2 gap-3">
                  <i class="bi bi-clock text-lg text-gray-800"></i>
                  <p class="text-lg font-normal text-gray-400">
                    Waiting period: 10- 15 week
                  </p>
                </div>
                <div class="w-full p-2 h-auto flex mt-4">
                  <button class="text-sm font-bold text-gray-400 bg-yellow-800 py-3 w-1/3 uppercase">
Check Offers
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="section2" v-scrollspy-target>
          <div class="w-full sm:w-full md:w-full lg:w-full xl:w-full h-auto p-5  flex justify-center align-middle bg-white">
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 block">
                <h3 class="text-xl font-medium text-gray-600 py-2 ">
                  Honda Elevate Price
                </h3>
                <p class="text-sm font-normal text-gray-500">
                  Honda Elevate price for the base model starts at Rs. 13.13 Lakh and the top model price goes upto Rs. 19.19 Lakh (on-road Mumbai). Elevate price for 8 variants is listed below.
                </p>

                <div class="p-2 bg-gray-400 w-full ring-1 ring-gray-500">
                  <ul class="block">
                    <li class="flex justify-around border-b-2 border-white py-2">
                      <p class="text-sm font-bold text-gray-800 flex justify-center">
                        Version
                      </p>
                      <p class="text-sm font-bold text-gray-800 flex justify-center">
                        On Road Price
                      </p>
                    </li>
                    <li class="flex justify-around border-b-2 border-white py-2" v-for="cars in cardetails" :key="cars.id">
                      <p class="text-sm font-normal text-gray-800 flex justify-center">
                        {{cars.name}}
                        <br/>
                        {{ cars.address }}
                      </p>
                      <p class="text-sm font-normal text-gray-800 flex justify-center">
                        {{cars.price}}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">

</div>
            </div>
          <!-- Section 2 content -->
        </section>
        <section id="section3" v-scrollspy-target>
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-5  flex justify-center align-middle bg-white">
              <img src="@/assets/car.jpg" class="w-[600px] h-[350px] ring-1 ring-gray-500" />
            </div>
          <!-- Section 3 content -->
        </section>
        <section id="section4" v-scrollspy-target>
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-5  flex justify-center align-middle bg-white">
              <img src="@/assets/car.jpg" class="w-[600px] h-[350px] ring-1 ring-gray-500" />
            </div>
          <!-- Section 3 content -->
        </section>
        <section id="section5" v-scrollspy-target>
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-5  flex justify-center align-middle bg-white">
              <img src="@/assets/car.jpg" class="w-[600px] h-[350px] ring-1 ring-gray-500" />
            </div>
          <!-- Section 3 content -->
        </section>
        <section id="section6" v-scrollspy-target>
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto p-5  flex justify-center align-middle bg-white">
              <img src="@/assets/car.jpg" class="w-[600px] h-[350px] ring-1 ring-gray-500" />
            </div>
          <!-- Section 3 content -->
        </section>
      </div>
    </div>

    <!-- <div class="w-2/3 h-full shadow-lg p-2 block">
            <div class="w-40 h-48 overflow-hidden ring-2 ring-yellow-800">
                <img src="@/assets/car.jpg" class="w-full h-full"/>
            </div>
            <div class="w-full h-auto bg-white">
                <h2>

                </h2>
            </div>
        </div> -->
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Tabs from "@/components/tabs/Tabs.vue";
export default {
  data() {
    return {
      rating: 4,
      tabs: [
        {
          id: "profile",
          label: "Profile",
          content: "This is the profile tab content.",
        },
        {
          id: "dashboard",
          label: "Dashboard",
          content: "This is the dashboard tab content.",
        },
        // Add more tabs as needed
      ],
      activeTab: "profile",

      cardetails:[
        {
          id:1,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
        {
          id:2,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
        {
          id:3,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
        {
          id:4,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
        {
          id:5,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
        {
          id:6,
          name:'Honda',
          address:'Nikunjo-2, Khilkhat',
          price:"12Lak"
        },
      ]
    };
  },
  components: {
    StarRating,
    Tabs,
  },
};
</script>