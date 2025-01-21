<template>
  <div class="navigation">
    <nav class="nav">
      <ul class="ul">
        <li class="li">
          <i class="bi bi-geo-alt  text-2xl font-semibold text-white"></i>
          <router-link to="" class="span">Store Direction</router-link>
        </li>
        <li class="li border-r-2">
          <i class="bi bi-box text-2xl font-semibold text-white"></i>
          <router-link to="" class="span">Track Your Order</router-link>
        </li>
      </ul>
      <ul class="ul">
        <li class="li px-2">
          <router-link to="/about" class="span">About</router-link>
        </li>
        <li class="li px-2">
          <span @click="openForm" class="span cursor-pointer">Contact</span>
        </li>
        <li class="li px-2">
          <select>
            <option class="span" selected>English</option>
            <option class="span">Bangle</option>
          </select>
        </li>
        <li class="li px-2 border-r-2">
          <select>
            <option class="span" selected>Doller</option>
            <option class="span">Taka</option>
          </select>
        </li>
      </ul>
    </nav>

    <!-- form start -->
    <div
      v-if="formOpen"
      class="absolute w-full h-full z-50 flex justify-center bg-amber-50 items-center"
    >
      <div
        class="w-1/3 h-auto p-3 ring-1 ring-gray-600 bg-yellow-800 rounded-lg flex justify-center items-center relative"
      >
        <div class="block w-full h-auto">
          <h3 class="font-bold text-lg text-white py-2 flex justify-center italic">Contact Form</h3>
          <form>
            <div class="w-full h-auto px-3 rounded-md py-1">
              <label class="text-sm text-white font-normal italic py-2"
                >Name</label
              >
              <input
                class="w-full h-8 p-1 ring-4 ring-white text-sm font-mono rounded-lg"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="w-full h-auto px-3 rounded-md py-1">
              <label class="text-sm text-white font-normal italic py-2"
                >Email</label
              >
              <input
                class="w-full h-8 p-1 ring-4 ring-white text-sm font-mono rounded-lg"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="w-full h-auto px-3 rounded-md py-1">
              <label class="text-sm text-white font-normal italic py-2"
                >Message</label
              >
              <textarea
                class="w-full h-28 p-1 ring-4 ring-white text-sm font-mono rounded-lg"
                placeholder="Enter Your message"
              >
              </textarea>
            </div>
            <div class="w-full h-auto flex justify-center p-3">
              <button
                @click="sendForm"
                class="w-auto h-auto text-md font-medium px-10 py-1 bg-white shadow-lg rounded-md shadow-white italic text-red-900"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <!-- close icon -->
        <div
          class="absolute top-5 right-4 cursor-pointer"
          @click="closePopup()"
        >
          <i class="bi bi-x text-white text-2xl"></i>
        </div>

        <!-- close icon end -->
      </div>
    </div>

    <!-- form end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formOpen: false,
    };
  },

  methods: {
    openForm() {
      this.formOpen = true;
    },
    sendForm() {
      alert("Implement Contant form");
    },
    closePopup() {
      this.formOpen = false;
    },
  },
};
</script>

<style></style>