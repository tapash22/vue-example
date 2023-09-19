<template>
  <div class="cardetails block">
    <div class="d-flex">
      <div class="image w-2/4 h-full p-2 border-2 shadow-sm">
        <img src="@/assets/car.jpg" class="p-2" />
        <!-- <CarImage /> -->
      </div>
      <div class="details w-2/4 h-full px-3 py-2 bg-white">
        <h4 class="text-xl font-medium italic mb-2">
          Name of equipments for use
        </h4>
        <h5 class="text-2xl font-medium text-yellow-800 mb-2">
          <span class="text-xl font-extrabold text-gray-500 pr-2">$</span>300.00
        </h5>
        <!-- rating -->
        <div class="flex items-center mb-3">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <p class="text-sm font-normal text-gray-600">( No Rewies )</p>
        </div>

        <!-- rating end -->
        <div class="mb-4">
          <ul>
            <li
              class="text-yellow-700 text-sm font-normal p-0 m-0"
              v-for="count in 8"
              :key="count"
            >
              <i class="bi bi-check text-yellow-700 text-xl font-semibold"></i>
              This one are the quality full product
            </li>
          </ul>
        </div>

        <div class="flex gap-2 mx-4">
          <button
            class="bg-gray-400 text-yellow-800 text-lg uppercase mb-2 w-full h-10"
          >
            Add To Card
          </button>
          <button
            class="bg-yellow-800 text-gray-400 text-lg uppercase w-full h-10"
          >
            Buy IT NOW
          </button>
        </div>
      </div>
    </div>

    <!-- for chart placement -->

    <div class="flex mx-2 my-3">
      <div class="w-1/2 h-full px-3 py-2 block">
        <h2
          class="text-lg font-bold py-2 flex justify-start italic text-yellow-900 px-2"
        >
          Service Chart
        </h2>

        <p class="py-2 text-sm font-normal text-yellow-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti
          corporis hic dolorum voluptatum animi obcaecati enim odit! Mollitia
          voluptate placeat veritatis illo dolor! Neque ea illo pariatur ipsa
          rerum libero porro nesciunt eos saepe aperiam unde doloribus
          perferendis fugiat possimus, distinctio deserunt sed impedit modi non!
          Facere, inventore, id eos hic expedita impedit earum vel dolore
          voluptatibus quia molestias aperiam esse officia aliquid provident in
          tempore. Beatae quae dolorum eum asperiores eligendi quaerat nihil at,
          iste deserunt quidem, voluptate voluptatem aliquid sunt tempora neque
          quos quam aliquam veritatis eos fuga eaque eveniet reiciendis?
          Recusandae eum dicta voluptate! Nemo, culpa.
        </p>
      </div>
      <div class="w-1/2 h-full px-3 py-2 flex justify-end">
        <BarChart />
      </div>
    </div>

    <!-- for chart placement end -->

    <!-- show others part for car -->
    <div class="flex mx-2 my-3">
      <div class="w-full h-full px-3 py-2 block">
        <h2
          class="text-lg font-bold py-2 flex justify-start italic text-yellow-900 px-2"
        >
          Others parts view
        </h2>

        <div class="w-full h-auto p-3 flex">
          <transition class="fade">
            <div v-if="viewList" class="row w-full">
              <div class="w-1/4 flex p-2" v-for="(viewl, i) in viewList" :key="i">
                <div
                  class="w-full h-full bg-red-400 flex justify-center items-center"
                >
                  <p class="text-lg font-bold text-blue-500 py-5">
                    {{ viewl.name }}
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="my-2">
          <button
            class="w-[100px] h-[40px] rounded-full bg-red-500 text-xl font-bold"
            @click="showList = !showList"
          >
            {{ showList ? "hide" : "show" }}
          </button>
        </div>
      </div>
    </div>
    <!-- show others part for car end -->

    <div class="container mx-auto gap-2 p-4 py-5">
      <div class="w-full flex justify-center py-5 bg-red-400">
        <form @submit="submit">
          <div class="my-1 block">
            <label class="text-lg font-medium text-white px-2 w-full"
              >Email/Phone</label
            >
            <input
              type="text"
              v-model="form.email"
              @blur="isValidmail"
              @click="isCheckMail"
              class="w-[200px] h-[40px] border-2 border-violet-400 text-sm font-mono rounded-full"
            />
            <p class="font-bold text-xs text-blue-500">
              {{ validMail }}
            </p>
          </div>
          <div class="my-1 block">
            <label class="text-lg font-medium text-white px-2 w-full"
              >Password</label
            >
            <input
              type="password"
              v-model="form.password"
              @blur="isValidPass"
              @click="isCheckPass"
              class="w-[200px] h-[40px] border-2 border-violet-400 text-sm font-mono rounded-full"
            />
            <p class="font-bold text-xs text-blue-500">
              {{ validPassword }}
            </p>
          </div>

          <div>
            <button
              type="submit"
              class="w-20 h-10 rounded-full bg-violet-500 text-lg font-medium"
            >
              submit
            </button>
          </div>
        </form>
      </div>

      <!-- ckeditor -->

      <!-- ckeditor end -->
    </div>
  </div>
</template>

<script>
import CarImage from "@/components/cars/CarImage.vue";
import BarChart from "@/components/chart/BarChart.vue";

export default {
  data() {
    return {
      value: true,
      dataToSave: "",
      id: this.$route.params.id,
      form: {
        email: "",
        password: "",
      },
      validMail: "",
      validPassword: "",

      lists: [
        {
          id: 1,
          name: "tapash",
        },
        {
          id: 2,
          name: "tapash2",
        },
        {
          id: 3,
          name: "tapash3",
        },
        {
          id: 4,
          name: "tapash4",
        },
        {
          id: 5,
          name: "tapash5",
        },
        {
          id: 6,
          name: "tapash6",
        },
        {
          id: 7,
          name: "tapash7",
        },
        {
          id: 8,
          name: "tapash8",
        },
      ],
      showList: false,
    };
  },

  computed: {
    viewList() {
      if (this.showList) {
        return this.lists;
      } else {
        return this.lists.slice(0, 4);
      }
    },
  },

  components: {
    CarImage,
    BarChart,
  },

  methods: {
    submit(e) {
      e.preventDefault();
      let data = this.form.email;
      let data1 = this.form.password;
      alert(data + " click me " + data1);
    },
    isValidmail() {
      const numberRegex = /^\d+$/;
      let email = this.form.email;

      if (numberRegex.test(email)) {
        const phoneNumberRegex = /^(\+?880|0)1[13456789]\d{8}$/;
        if (phoneNumberRegex.test(email)) {
          this.validMail = " ";
        } else {
          this.validMail = "phone number is not valid";
        }
      } else {
        const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (validRegex.test(email)) {
          this.validMail = " ";
        } else {
          this.validMail = "this is not valid email";
        }
      }
    },

    isValidPass() {
      let pass = this.form.password;

      if (pass) {
        const hasLowerCase = /[a-z]/.test(pass);
        const hasUpperCase = /[A-Z]/.test(pass);
        const hasNumber = /\d/.test(pass);
        const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(pass);
        const passwordRegex = /^.{8,}$/.test(pass);

        if (!hasLowerCase) {
          this.validPassword = "need lowercase";
        } else if (!hasUpperCase) {
          this.validPassword = "need uppercase";
        } else if (!hasNumber) {
          this.validPassword = "need number";
        } else if (!hasSpecialChar) {
          this.validPassword = "need char";
        } else if (!passwordRegex) {
          this.validPassword = "must be 8 char";
        } else {
          this.validPassword = "";
        }
      }
    },

    isCheckMail() {
      if (this.form.email) {
        this.validMail = "";
      }
    },
    isCheckPass() {
      if (this.form.password) {
        this.validPassword = "";
      }
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  padding-left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.5s;
}
</style>