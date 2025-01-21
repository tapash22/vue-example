<template>
     <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
          <div class="px-3 w-full">
            <h2
              class="text-3xl font-bold text-black text-center mb-3 uppercase"
            >
              Must have for every car
            </h2>
            <div class="flex justify-center py-3">
              <p
                class="text-lg font-semibold mb-3 text-center w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3"
              >
                Enjoy an entirely new level of driving experience with our
                in-depth selection of superior car bulbs, brake pads, spark
                plugs, and other azirspares parts and accessories designed to
                keep your car running at its absolute best
              </p>
            </div>

            <div
              class="block sm:block md:flex lg:flex xl:flex justify-center gap-4"
            >
              <div
                class="card my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 ring-2 ring-blue-100 rounded-xl overflow-hidden"
                v-for="part in parts"
                :key="part.id"
              >
                <!-- <router-link :to="{ name: 'carDetails', params: { id: carList.id } }"> -->
                <div class="card-body h-60 w-full p-0 overflow-hidden">
                  <img :src="part.image" class="h-full w-full" />
                </div>
                <!-- </router-link> -->
                <div class="card-text w-full h-auto ring-2 ring-blue-100">
                  <h3
                    class="uppercase text-lg font-bold py-2 text-black text-center bg-white"
                  >
                    {{ part.name }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import { parts } from "@/store/data";

export default{
data(){
    return{
        parts 
    }
}
}
</script>