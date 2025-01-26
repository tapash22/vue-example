<template>
        <div class="w-full h-full block p-3">
      <h2 class="text-2xl font-bold text-black py-2">Features & Options</h2>
      <div class="grid grid-cols-2 gap-8">
        <!-- Loop through groups -->
        <div v-for="(group, groupName) in featuresData" :key="groupName">
          <!-- Group title -->
          <h2 class="text-sm font-bold py-2">{{ group.title }}</h2>
          <!-- List items -->
          <ul class="space-y-2">
            <li
              v-for="(item, index) in group.items"
              :key="index"
              class="flex items-start gap-2"
            >
              <i class="bi bi-check-circle text-blue-500"></i>
              <span class="text-base font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    props:['featuresData']
}
</script>