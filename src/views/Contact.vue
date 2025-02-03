<template>
  <div class="block w-full h-full">
    <!-- car details -->
    <div class="w-full h-full flex justify-center bg-gray-100 p-5">
      <!-- first part -->
      <div class="block w-3/4 h-full gap-1">
        <div class="w-full h-auto flex justify-center items-center gap-2">
          <!-- left side  -->
<ContactLeftSide :icons="icons" />
          <!-- left side end -->
          <!-- right side -->
<ContactRightSide />
          <!-- right side end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactLeftSide from '@/components/contactComponent/ContactLeftSide.vue';
import ContactRightSide from '@/components/contactComponent/ContactRightSide.vue';

export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },

      icons: ["bi bi-facebook", "bi bi-twitter", "bi bi-instagram"],
    };
  },

  components:{
    ContactLeftSide,
    ContactRightSide
  }


};
</script>
