<template>
  <div class="mt-15">
    <div
      :class="open ? 'bg-red-500 opacity-25':'opacity-100'"
      class="absolute top-0 left-0 h-screen w-screen"
    >
      <button @click="tog()" class="text-black text-2xl p-2 font-bold">&#9776;</button>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    </div>
    <nav
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
    >
      <div class="flex pr-2 justify-end">
        <button @click="tog()" class="p-2 text-white text-xl font-bold">&#9747;</button>
      </div>
      <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
      <ul class="list-none text-white text-center">
        <li class="my-8">
          <a href="#"></a>Teams
        </li>
        <li class="my-8">
          <a href="#"></a>Projects
        </li>
        <li class="my-8">
          <a href="#"></a>Favourites
        </li>
        <li class="my-8">
          <a href="#"></a>Notifications
        </li>
        <li class="my-8">
          <a href="#"></a>Members
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      open: false
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    tog() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>
