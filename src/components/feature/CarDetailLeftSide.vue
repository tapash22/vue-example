<template>
  <div class="w-3/4 h-full block">
    <!-- image block -->
    <CarImage />
    <!-- image block end -->
    <!-- car briefing -->
    <CarOverview />
    <!-- car briefing end -->
    <!-- features -->
    <CarFeatures :features="features" />
    <!-- features end -->
    <CarPerformance :engine-details="engineDetails" />
    <!-- feature option -->
    <CarFeatureOptions :features-data="featuresData" />
    <!-- feature option end -->
    <hr class="my-3 px-5" />
    <!-- design -->
    <CarAdvanceOption :design-view="designView" />
    <!-- design end-->
  </div>
</template>

<script>
import {
  featuresData,
  features,
  engineDetails,
  designView,
} from "@/store/data";
import CarOverview from "./CarOverview.vue";
import CarFeatures from "./CarFeatures.vue";
import CarFeatureOptions from "./CarFeatureOptions.vue";
import CarAdvanceOption from "./CarAdvanceOption.vue";
import CarPerformance from "./CarPerformance.vue";
import CarImage from "./CarImage.vue";

export default {
  data() {
    return {
      featuresData,
      features,
      engineDetails,
      designView,
    };
  },

  components: {
    CarOverview,
    CarFeatures,
    CarFeatureOptions,
    CarAdvanceOption,
    CarPerformance,
    CarImage,
  },
};
</script>

<style scoped></style>
