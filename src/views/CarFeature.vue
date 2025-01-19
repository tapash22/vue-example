<template>
  <div class="block w-full h-full">
    <!-- car details -->
    <div class="w-full h-full flex justify-center bg-white p-5">
      <!-- first part -->
      <div class="flex justify-center align-middle w-3/4 h-full gap-1">
        <!-- left side -->
        <CarDetailLeftSide />
        <!-- left side end -->
        <CarDetailRightSide />
      </div>
      <!-- first part end -->
      <div>
        <!-- car details end -->
      </div>
    </div>
  </div>
</template>
<script>
import { carDetails,optionData } from "@/store/data";
import CarDetailLeftSide from "@/components/feature/CarDetailLeftSide.vue";
import CarDetailRightSide from "@/components/feature/CarDetailRightSide.vue";

export default {
  data() {
    return {
      optionData,
      buy_car_with_emi: {
        vechile_price: 32000,
        emi_percent: 3,
        down_payment: 5000,
        month_count: 12,
      },
      emi_result: null,
    };
  },

  components: {
    CarDetailLeftSide,
    CarDetailRightSide,
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
};
</script>

<style scoped></style>
