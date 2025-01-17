<template>
  <div class="home relative overflow-hidden">
    <div
      class="home1 bg-fixed flex justify-center items-center h-full bg-center"
    >
      <div class="block w-full h-full">
        <div
          class="w-full"
          style="margin-top: 250px !important; margin-bottom: 250px !important"
        >
          <h2
            class="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold tracking-widest py-4 uppercase text-center text-black"
          >
            Select your vehicle
          </h2>
          <div
            class="search block sm:block md:flex lg:flex xl:flex gap-2 justify-center w-full"
          >
            <div
              class="h-24 ring-4 ring-blue-100  items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
            >
              <select
                class="h-full w-full bg-white text-lg font-medium tracking-wider text-center overflow-hidden"
              >
                <option selected class="font-bold text-2xl">Select year</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              class="h-24 ring-4 ring-blue-100 items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
            >
              <select
                class="h-full w-full bg-white text-lg font-medium tracking-wider text-center overflow-hidden"
              >
                <option selected class="font-bold text-2xl">
                  Select Brand
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              class="h-24 ring-4 ring-blue-100 items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden rounded-lg"
            >
              <select
                class="h-full w-full bg-white text-lg font-medium tracking-wider text-center overflow-hidden"
              >
                <option selected class="font-bold text-2xl">
                  Select Model
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              class="h-24 flex justify-center bg-blue-100 ring-4 ring-blue-100 sm:w-full md:w-1/12 lg:w-1/12 xl:w-1/12 rounded-xl"
            >
              <button
                class="bg-transparent h-full text-2xl font-medium tracking-wider text-center text-black uppercase"
              >
                GO
              </button>
            </div>
          </div>
          <div
            class="tag hidden sm:hidden md:flex lg:flex xl:flex justify-center mt-5"
          >
            <div class="w-2/3 flex justify-evenly">
              <a
                href="#"
                class="text-xl text-black uppercase font-medium tracking-wide"
                >Shop By Product</a
              >
              <span class="font-semibold text-xl text-black">|</span>
              <a href="#" class="text-xl text-black font-medium tracking-wide"
                >Shop By Brand</a
              >
            </div>
          </div>
        </div>
        <!-- first part of header -->
        <div
          class="p-5 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full sm:block lg:flex md:flex xl:flex"
        >
          <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
            <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
              <router-link to="/">
                <img
                  src="@/assets/car.jpg"
                  class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
                />
                <h2
                  class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
                >
                  This is new car
                </h2>
              </router-link>
            </div>
            <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
              <img
                src="@/assets/car.jpg"
                class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
              />
              <h2
                class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
              >
                This is new car
              </h2>
            </div>
          </div>
          <div
            class="sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 overflow-hidden border-4 rounded-lg relative"
          >
            <img
              src="@/assets/car.jpg"
              class="relative scale-100 hover:scale-110 transition duration-300 hover:duration-700 rounded-lg rotate-0 hover:rotate-2 h-full"
            />

            <h2
              class="text-3xl text-white font-bold w-full absolute top-1/2 left-72"
            >
              This is new car
            </h2>
          </div>

          <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
            <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
              <img
                src="@/assets/car.jpg"
                class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
              />
              <h2
                class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
              >
                This is new car
              </h2>
            </div>
            <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
              <img
                src="@/assets/car.jpg"
                class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2"
              />
              <h2
                class="text-3xl text-white font-bold w-full absolute top-1/2 left-1/4"
              >
                This is new car
              </h2>
            </div>
          </div>
        </div>
        <!-- first part end of header -->
        <!-- category -->
        <div class="sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
          <h2 class="text-3xl font-bold text-black text-center mb-3 uppercase">
            Find Your Destination !!
          </h2>
          <div class="">
            <Category :categorys="categorys" />
          </div>
        </div>
        <!-- category end -->
        <!-- banner -->
        <div class="w-full py-5">
          <div
            class="box p-3 bg-black w-full h-[200] hidden sm:block md:flex lg:flex xl:flex opacity-80 shadow-2xl shadow-gray-400 mx-4"
          >
            <div class="w-1/2 flex justify-center align-middle">
              <h3
                class="text-4xl font-bold text-white text-center my-auto px-2 w-1/2"
              >
                Get 20% off for your order
                <br />
                <span class="text-xl font-normal p-0"
                  >this is new car want to drive</span
                >
                <br />
                <span class="text-sm font-normal p-0">for your journey</span>
              </h3>
            </div>

            <img
              src="https://i.ibb.co/Ks3VZYX/vector-car-png-favpng-gpin-VUFdw-Jp91d2ih-TCQu1-Ww-S-removebg-preview.png"
              class="w-1/2 bg-cover"
            />
          </div>
        </div>
        <!-- banner end -->
        <!-- best seller -->
        <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
          <div class="px-3 w-full">
            <h2 class="text-3xl font-bold text-black text-center mb-3 uppercase">
              Best hier for You
            </h2>
            <TopSeller :carLists="carLists" />
          </div>
        </div>
        <!-- best seller end -->
        <!-- must have for every car -->
        <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
          <div class="px-3 w-full">
            <h2 class="text-3xl font-bold text-black text-center mb-3 uppercase">
              Must have for every car
            </h2>
            <div class="flex justify-center">
              <p
                class="text-sm font-normal mb-3 text-center w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3"
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
        <!-- must have for every car end -->
        <div class=" p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full">
          <h2 class="text-3xl font-bold text-black text-center mb-3">
            Must have you know
          </h2>
          <div
            class="block sm:block md:flex lg:flex xl:flex justify-center mx-2"
          >
            <Carousel />
          </div>
        </div>
        <!-- contact us -->
        <div class="p-5 sm:p-2 md:p-5 lg:p-5 xl:p-5 w-full h-full">
          <div class="email block sm:block md:flex lg:flex xl:flex p-5">

            <div
              class="w-full h-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 gap-3 align-middle flex justify-center  space-x-2 my-auto px-3 sm:px-3 md:px-2 lg:px-0 xl-px-0"
            >
              <div
                class="ring-8 ring-blue-500 rounded-full flex justify-center items-center border-white pa-2 w-10 sm:w-10 md:w-20 lg:w-24 xl:w-24 h-10 sm:h-10 md:h-20 lg:h-24 xl:h-24 my-auto"
              >
                <i
                  class="bi bi-envelope-paper text-5xl font-bold text-white hover:scale-150 transition-all"
                ></i>
              </div>
              <div class="block my-auto">
                <h2
                  class="uppercase text-xl sm:text-xl md:text-2xl ld:text-3xl xl:text-3xl font-semibold text-white"
                >
                  Signup and save !
                </h2>
                <p class="text-sm font-thin text-white">
                  Exclusive email offers & Limited time discount specials
                </p>
              </div>
            </div>
            <div
              class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 flex justify-center h-full"
            >
              <form class="flex my-auto w-full h-20 border-2 border-red-500 rounded-xl">
                <input
                  class="form-control w-3/4 h-20 text-lg font-bold rounded-l-lg"
                  placeholder="Enter your email"
                />
                <button class="w-1/4 bg-red-500 text-2xl uppercase font-medium text-white">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- contact us end-->
      </div>
    </div>
  </div>
</template>

<script>
import TopSeller from "@/components/seller/TopSeller.vue";
import Category from "../components/category/Category.vue";
import Carousel from "../components/carousel/Carousel.vue";
import { categorys, parts, carLists } from "@/store/data";
export default {
  data() {
    return {
      email: "",
      inputColor: false,
      categorys,
      carLists,
      parts,
    };
  },

  computed: {
    emailT() {
      let emails = this.email.length;
      if (emails.includes("@")) {
        return {
          // inputColor = true;
          // text-color = true;
        };
      }
    },
  },

  components: {
    Category,
    TopSeller,
    Carousel,
  },
};
</script>

<style>
.home1 {
  background-image: url("@/assets/car2.jpg");
  width: 100%;
  background-size: cover;
  background-position: center;
}

input:focus {
  outline: none;
}

.emailT {
  border: 1px solid black;
}

input[id="cb1"] + label {
  width: 14px;
  height: 14px;
  border: 1px solid green;
  border-radius: 2px;
  cursor: pointer;
}

input[id="cb1"]:checked + label:after {
  position: relative;
  top: -10px;
  left: -5px;
  content: "\2714";
  font-size: 6px;
}

input[id="cb1"] {
  display: none;
}

/* input[id="cb1"]:checked::before{
    background-color:green;
} */
input[type="checkbox"]:checked + label {
  color: blue;
}

.t:after {
  content: "\2714";
  font-size: 10px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: #49a6db !important;
}

.email {
  background-image: url("@/assets/bottom_car.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  filter: brightness(60%);
  padding: 10px;
}
::placeholder {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
}
</style>
