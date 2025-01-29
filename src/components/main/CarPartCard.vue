<template>
    <div
        class="block sm:block md:flex lg:flex xl:flex justify-center gap-4"
        v-if="parts"
      >
      <div
        class="card my-3 sm:my-3 md:my-2 lg:my-1 xl:my-1 w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 ring-2 ring-blue-400 rounded-xl overflow-hidden"
        v-for="part in parts"
        :key="part.id"
      >
        <div class="card-body h-auto w-auto p-0 overflow-hidden">
          <img :src="part.image" class="h-full w-full" />
        </div>
        <div class="card-text w-full h-auto ring-2 ring-blue-100 p-2">
          <router-link :to="{ name: 'carPartDetails', params: { id: part.id } }">
            <h3
              class="uppercase text-lg font-bold py-2 text-black text-center bg-white"
            >
              {{ part.name }}
            </h3>
          </router-link>
          <p
              class="uppercase text-lg font-bold  text-black text-center bg-white"
            >
             $ {{ part.price }}
            </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["parts"],
};
</script>
