<template>
    <div class="w-full h-full p-3">
      <div class="flex justify-start items-center gap-2">
        <div class="w-1/4 h-auto block" v-for="design in designView" :key="design.id">
          <h2 class="text-sm font-semibold text-black py-2">
            {{ design.title }}
          </h2>
            <ul class="block">
              <li class="flex justify-start items-center gap-2 py-1" v-for="d in design.child" :key="d">
                <i class="bi bi-check-circle text-lg font-medium text-blue-400"></i>
                <p class="text-sm font-medium text-black">
                  {{ d }}
                </p>
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    props:['designView']
}
</script>