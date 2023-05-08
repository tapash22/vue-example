<template>
  <div class="cardetails">
    <div class="container mx-auto flex gap-2 p-4">
      <div class="image w-1/3 h-[300px] p-2 border-2 shadow-lg">
      <img src="@/assets/car.jpg"  class="p-2"/>
      </div>
      <div class="details w-1/3 h-[300px] border-l-2 border-r-2 border-gray-500">
      <h4 class="text-sm font-light p-3 uppercase">name: X-corrola</h4>
      <h5 class="text-sm font-normal p-3">Model: 2018</h5>
      </div>
      <div class="color h-[200px]  w-1/3">
      <h4 class="flex  ">color:<input type="checkbox" class="w-[30px] h-[20px] " v-model="value"/>red <br/>
        <input type="checkbox" class="w-[30px] h-[20px] " v-model="value"/>green</h4>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
        }
    }
}
</script>

<style>

</style>