<template>
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
</template>

<script>
export default{
    props:['emi_result']
}
</script>