<template>
  <!-- right side -->
  <div class="w-1/4 h-full block px-2">
    <CarPricingInfo />
    <CarSellerInfo />
    <CarBodyDetails :carDetails="carDetails" />
    <CarMilage />

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
            >Vehicle Price
            <span class="font-semibold text-lg text-blue-300">( $ )</span>
          </label>
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.vechile_price"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Interest rate
            <span class="font-semibold text-lg text-blue-300">( $ )</span>
          </label>
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.emi_percent"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Loan Term
            <span class="font-semibold text-lg text-blue-300">( Month )</span>
          </label>
          <input
            class="w-full h-auto py-2 ring-1 ring-gray-200 text-sm font-semibold px-3"
            v-model="buy_car_with_emi.month_count"
          />
        </div>
        <div class="px-3 py-2">
          <label class="text-sm py-1 font-medium text-black"
            >Down Payment
            <span class="font-semibold text-lg text-blue-300"
              >( $ )</span
            ></label
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
    <EmiCalculationResult :emi_result="emi_result" />
    <!-- result end -->
  </div>
  <!-- right side end-->
</template>

<script lang="js">
import { carDetails } from "@/store/data";
import EmiCalculationResult from "./EmiCalculationResult.vue";
import CarMilage from "./CarMilage.vue";
import CarBodyDetails from "./CarBodyDetails.vue";
import CarSellerInfo from "./CarSellerInfo.vue";
import CarPricingInfo from "./CarPricingInfo.vue";

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

    components:{
      EmiCalculationResult,
      CarMilage,
      CarBodyDetails,
      CarSellerInfo,
      CarPricingInfo
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
