<template>
  <div class="z-20 w-full sticky top-0">
    <div
      class="box w-full h-32 flex justify-center items-center gap-2 bg-blue-100"
    >
      <div class="logo w-2/12 flex justify-center">
        <<router-link to="/" >
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png"
          class="w-40 h-40"
          alt="logo"
        />
      </router-link>
      </div>
      <div class="search w-7/12">
        <div class="search-box">
          <input
            v-mode="search"
            placeholder="Search..."
            class="w-8/12 h-14 rounded-lg p-4"
          />
          <select class="select h-14">
            <option selected class="text-lg font-semibold text-black">Select place</option>
            <option class="span text-lg font-semibold text-black py-1">Dhaka</option>
            <option class="span text-lg font-semibold text-black py-1">Chittogonj</option>
            <option class="span text-lg font-semibold text-black py-1">Khulna</option>
            <option class="span text-lg font-semibold text-black py-1">Rajsahi</option>
          </select>
          <button class="w-1/12 h-14 bg-red-400 p-2 rounded-r-lg">
            <i class="bi bi-search search-icon text-2xl font-semibold"></i>
          </button>
        </div>
      </div>
      <div class="list w-3/12 flex justify-center">
        <ul class="px-2 flex gap-4">
          <li class="list-box" v-for="icon in iconlist" :key="icon">
            <i class="list-box-icon " :class="icon"></i>
          </li>
        </ul>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  data() {
    return {
      search: "",
      iconlist: [
        "bi bi-border-width",
        "bi bi-heart",
        "bi bi-person",
        "bi bi-cart3",
      ],
    };
  },
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.box {
  z-index: 10;
}

input::placeholder{
  font-size: 20px;
  font-weight: 700;
  color: gray;
}

</style>
