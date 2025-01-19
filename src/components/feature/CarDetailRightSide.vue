<template>
  <!-- right side -->
  <div class="w-1/4 h-full block px-2">
    <div class="card w-full h-auto bg-blue-500">
      <h2
        class="uppercase text-lg font-light text-white w-full flex justify-center"
      >
        buy car online
      </h2>
      <div class="w-full h-auto p-4 flex justify-between align-middle">
        <p class="text-sm font-medium text-white uppercase">
          buy for
          <br />
          <span class="text-lg font-bold">$2234</span>
        </p>
        <span class="font-semibold text-xl text-white">|</span>
        <p class="text-sm font-medium text-white uppercase">
          buy for
          <br />
          <span class="text-lg font-bold">$2234</span>
        </p>
      </div>
      <div
        class="bg-blue-200 w-full h-auto py-2 flex justify-center align-center rounded-b-lg"
      >
        <p class="text-lg font-semibold text-black uppercase">
          instant saving : $5.00
        </p>
      </div>
    </div>

    <ul class="w-full h-auto bg-white block">
      <li class="border-b-2 border-blue-700 p-3 text-lg font-medium text-black">
        DEALER INFO
      </li>
      <li
        class="border-b-2 border-blue-700 p-3 text-lg font-medium flex items-center"
      >
        <div
          class="w-12 h-12 ring-2 ring-blue-600 rounded-full overflow-hidden"
        >
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            class="bg-cover bg-center w-12 h-12"
          />
        </div>
        <p class="text-lg font-medium text-black px-3">
          Tapash paul <br /><span class="text-sm font-normal"
            >Private Seller</span
          >
        </p>
      </li>
      <li class="p-3 text-lg font-normal text-black flex">
        <i class="bi bi-telephone text-2xl text-blue-800"></i>
        <p class="text-lg font-bold uppercase text-black px-3">
          +8801674345763
        </p>
      </li>
    </ul>

    <ul class="w-full h-auto block">
      <li
        class="w-full h-auto p-2 flex justify-around items-center border-b-2 border-x-white bg-gray-400"
        v-for="cardetail in carDetails"
        :key="cardetail.title"
      >
        <span
          class="text-sm font-normal text-black flex justify-start align-middle"
          >{{ cardetail.title }}</span
        ><span
          class="text-sm font-normal text-black flex justify-start align-middle"
          >{{ cardetail.value }}</span
        >
      </li>
    </ul>

    <div
      class="w-full h-auto my-3 ring-2 ring-gray-200 flex justify-between items-center p-4 bg-white"
    >
      <p class="text-lg font-semibold text-black text-center">
        18 <br />
        CITY MPG
      </p>
      <div
        class="w-16 h-16 ring-4 ring-blue-200 rounded-full overflow-hidden bg-blue-800 flex justify-center items-center"
      >
        <i class="bi bi-fuel-pump text-3xl text-white"></i>
      </div>
      <p class="text-lg font-semibold text-black text-center">
        25 <br />HWY MPG
      </p>
    </div>
    <!-- form start -->
    <div
      class="flex justify-start items-center p-1 ring-1 ring-gray-200 bg-gray-200 w-full"
    >
      <form @submit.prevent="emiCalculator" class="block w-full">
        <div class="flex justify-start items-center w-full p-3">
          <div
            class="w-14 h-14 shadow-2xl shadow-white rounded-full overflow-hidden bg-blue-900 flex justify-center items-center"
          >
            <i
              class="bi bi-calculator-fill text-3xl font-bold text-blue-200"
            ></i>
          </div>
          <p class="text-lg font-semibold text-black px-2 leading-5">
            FINANCING <br />
            CALCULATOR
          </p>
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Vehicle Price <span class="font-semibold text-lg text-blue-300">( $ )</span> </label
          >
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.vechile_price"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Interest rate <span class="font-semibold text-lg text-blue-300">( $ )</span> </label
          >
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.emi_percent"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Loan Term <span class="font-semibold text-lg text-blue-300">( Month )</span> </label
          >
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.month_count"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Down Payment <span class="font-semibold text-lg text-blue-300">( $ )</span></label
          >
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.down_payment"
          />
        </div>
        <div class="px-3 py-2 flex jsutify-start align-middle">
          <button
            type="submit"
            class="text-lg font-medium bg-blue-600 px-4 py-2 uppercase rounded-sm text-white"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
    <!-- form start end -->
    <!-- result -->
    <div class="block px-4 py-2 w-full h-full bg-gray-200">
      <p class="text-sm font-semibold text-black py-1">
        Monthly Payment
        <br />
        <span class="font-bold text-lg text-black">
          $ {{ emi_result?.monthly_interest }}</span
        >
      </p>
      <p class="text-sm font-semibold text-black py-1">
        Total Interest Payment
        <br />
        <span class="font-bold text-lg text-black">
          $ {{ emi_result?.interest_amount }}</span
        >
      </p>
      <p class="text-sm font-semibold text-black py-1">
        Total Amount to Pay
        <br />
        <span class="font-bold text-lg text-black">
          $ {{ emi_result?.total_amount }}</span
        >
      </p>
    </div>
    <!-- result end -->
  </div>
  <!-- right side end-->
</template>

<script lang="js">
import { carDetails } from "@/store/data";

export default{
    data(){
        return{
            carDetails,
            buy_car_with_emi: {
            vechile_price: 32000,
            emi_percent: 3,
            down_payment: 5000,
            month_count: 12,
            },
            emi_result: null,
        }
    },

    methods: {
        emiCalculator() {
        const { vechile_price, emi_percent, down_payment, month_count } =
            this.buy_car_with_emi;

        // Convert annual percent to monthly decimal
        const monthly_interest_rate = emi_percent / 100 / 12;
        const loan_amount = vechile_price - down_payment;

        // Calculate interest amount, total amount, and monthly interest
        const interest_amount = loan_amount * monthly_interest_rate * month_count;
        const total_amount = loan_amount + interest_amount;
        const monthly_interest = interest_amount / month_count;

        // Update emiResult with calculated values
        this.emi_result = {
            monthly_interest: monthly_interest.toFixed(2),
            total_amount: total_amount.toFixed(2),
            interest_amount: interest_amount.toFixed(2),
        };
        },
    },

    mounted() {
        this.emiCalculator();
    },
}
</script>

<style scoped></style>
