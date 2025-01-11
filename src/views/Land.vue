<template>
  <div class="land w-full p-5 bg-gray-300">
    <div class="grid grid-cols-3 gap-4 mx-5 my-2">
      <div
        class="bg-transparent rounded-sm  cursor-pointer py-3"
        v-for="lands in landDetails"
        :key="lands.id"
      >
        <div
          class="rounded-2xl flex justify-center align-middle"
        >
          <div class="bg-transparent block ">
           <div class="flex justify-center align-middle relative h-28 w-full ring-1 ring-yellow-700 rounded-t-full">
            <div class="absolute w-24 h-36  rounded-full flex justify-center align-middle overflow-auto scale-150 " >
              <img src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png"
            class="bg-cover overflow-auto" alt="logo" />
            </div>
           </div>
           <div class="bg-white rounded-b-2xl p-3 z-20">
             <h6
               class="text-xl font-semibold italic text-black flex justify-center "
             >
               {{ lands.name }}
             </h6>
             <p
               class="text-sm font-normal text-black px-2 leading-tight flex text-justify justify-center py-4"
             >
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Consectetur odit numquam praesentium at quibusdam? Eius corrupti
               id ibus. Accusantium, vel. Reprehenderit quaerat
             </p>
           </div>
          </div>
        </div>
        
      </div>

    </div>

  </div>
</template>

<script>
import manImage from '@/assets/man.png'

export default {
  data() {
    return {
      showModel: false,
      landDetails: [
        {
          id: 1,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
        {
          id: 2,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
        {
          id: 3,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
        {
          id: 4,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
        {
          id: 5,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
        {
          id: 6,
          name: "Owner Name",
          address: "",
          phone: "",
          district: "",
          refrenceNo: "",
        },
      ],


    };
  },
};
</script>