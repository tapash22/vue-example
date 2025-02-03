<template>
     <ul class="px-5 w-full h-auto block">
        <li
          class="w-full h-auto py-2 flex justify-start items-center gap-2"
          v-for="carP in carParts"
          :key="carP.id"
        >
          <span class=" h-auto text-lg font-semibold text-black w-auto whitespace-normal">
            {{ carP.title }}
          </span>
          :
          <span class="w-full flex justify-start items-center h-auto text-lg font-normal text-black " v-if="typeof carP.value === 'string' || typeof carP.value === 'number'" >
            {{ carP.value }}
          </span>
          <span class="w-full flex justify-start items-center h-auto text-lg font-normal text-black gap-2" v-else>
            <span v-for="carV in carP.value" :key="carV" class="gap-3">

              {{ carV }} ,
            </span>
          </span>
        </li>
      </ul>
</template>

<script>
export default{
    props:['carParts']
}
</script>