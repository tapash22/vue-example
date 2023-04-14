<template>
    <div class="box w-full h-32 flex justify-center items-center gap-2">
                <div class="logo w-2/12 flex justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png" class="w-30 h-32" alt="logo" />
                </div>
                <div class="search w-7/12">
                <div class="search-box">
                  <input v-mode="search" placeholder="Search..." class="w-8/12 p-2 rounded-lg" />
                    <select  class="select" >
                    <option selected>Select place</option>
                        <option class="span" >Dhaka</option>
                        <option class="span">Chittogonj</option>
                        <option class="span">Khulna</option>
                        <option class="span">Rajsahi</option>
                    </select>
                    <button class="w-1/12 bg-red-400 p-2 ">
                      <i class="bi bi-search search-icon "></i>
                    </button>
                </div>
                </div>
                <div class="list w-3/12 flex justify-center">
                    <ul class="px-2 flex gap-2">
                        <li class="list-box" v-for="icon in iconlist" :key="icon">
                            <i class="list-box-icon" :class="icon"></i>
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