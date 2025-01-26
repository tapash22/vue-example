<template>
  <div class="home relative overflow-hidden">
    <div
      class="home1 bg-fixed flex justify-center items-center h-full bg-center"
    >
      <div class="block w-full h-full">
        <!-- header -->
        <SearchComponent />
        <!-- header end -->
        <!-- first part of header -->
        <CarOption />
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
        <CarShowCase />
        <!-- banner end -->
        <!-- best seller -->
        <div class="p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full py-5">
          <div class="px-3 w-full">
            <h2
              class="text-3xl font-bold text-black text-center mb-3 uppercase"
            >
              Best hier for You
            </h2>
            <TopSeller :carLists="carLists" />
          </div>
        </div>
        <!-- best seller end -->
        <!-- must have for every car -->
        <CarParts />
        <!-- must have for every car end -->
        <CarInformation />
        <!-- contact us -->
        <ContactInformation />
        <!-- contact us end-->
      </div>
    </div>
  </div>
</template>

<script>
import TopSeller from "@/components/seller/TopSeller.vue";
import Category from "../components/category/Category.vue";
import { categorys, carLists } from "@/store/data";
import SearchComponent from "@/components/main/SearchComponent.vue";
import CarOption from "@/components/main/CarOption.vue";
import CarShowCase from "@/components/main/CarShowCase.vue";
import CarParts from "@/components/main/CarParts.vue";
import CarInformation from "@/components/main/CarInformation.vue";
import ContactInformation from "@/components/main/ContactInformation.vue";

export default {
  data() {
    return {
      email: "",
      inputColor: false,
      categorys,
      carLists,
    };
  },

  components: {
    Category,
    TopSeller,
    CarInformation,
    SearchComponent,
    CarOption,
    CarShowCase,
    CarParts,
    ContactInformation,
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

  mounted() {
    this.emiCalculator();
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
