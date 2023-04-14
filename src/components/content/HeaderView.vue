<template>
    <div class="box w-full h-40 flex justify-center items-center gap-2">
                <div class="logo w-2/12 flex justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png" class="w-30 h-32" alt="logo" />
                </div>
                <div class="search w-7/12 border-2 h-12 border-gray-400 rounded-lg flex ">
                    <input v-mode="search" placeholder="Search..." class="w-4/6 p-2 rounded-lg" />
                    <select  class="border-r-2 border-l-2 border-gray-300 px-2 w-1/6 bg-white text-sm font-medium" >
                    <option selected>Select place</option>
                        <option class="span" >Dhaka</option>
                        <option class="span">Chittogonj</option>
                        <option class="span">Khulna</option>
                        <option class="span">Rajsahi</option>
                    </select>
                    <button class="w-1/6 bg-red-500 p-2 rounded-sm">
                      Search
                    </button>
                </div>
                <div class="list w-3/12 flex justify-center">
                    <ul class="px-2 flex gap-2">
                        <li class="border-2 border-gray-400 w-12 h-12 flex justify-center items-center rounded-md" v-for="icon in iconlist" :key="icon">
                            <i class="font-bold text-2xl text-gray-500 p-2" :class="icon"></i>
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
  data(){
    return{
      iconlist:[
        "bi bi-border-width",
        "bi bi-heart",
        "bi bi-person",
        "bi bi-cart3"
      ]
    }
  }

}
</script>

<style  scoped>
.box{
  z-index: 10;
}
</style>