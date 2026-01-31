<template>
  <div class="h-screen flex flex-col font-sans">
    <div
      class="p-4 bg-white shadow-lg flex flex-wrap gap-4 z-[1000] items-center border-b"
    >
      <div class="flex flex-col">
        <label
          class="text-[10px] font-black text-gray-400 uppercase tracking-widest"
          >Admin Level</label
        >
        <select
          v-model="selectedLevel"
          class="border-2 border-gray-100 p-2 rounded-lg bg-gray-50 outline-none"
        >
          <option value="all">All Levels</option>
          <option value="0">National Capital</option>
          <option value="2">Districts (Zila)</option>
          <option value="3">Upazilas</option>
        </select>
      </div>

      <div class="flex flex-col">
        <label
          class="text-[10px] font-black text-gray-400 uppercase tracking-widest"
          >Division</label
        >
        <select
          v-model="selectedDivision"
          class="border-2 border-gray-100 p-2 rounded-lg bg-gray-50 outline-none"
        >
          <option value="all">All Divisions</option>
          <option v-for="div in divisions" :key="div" :value="div">
            {{ div }}
          </option>
        </select>
      </div>

      <div
        class="ml-auto bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold"
      >
        {{ filteredFeatures.length }} Locations
      </div>
    </div>

    <div class="flex-grow relative">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-[2000] flex items-center justify-center bg-white/80"
      >
        <p class="font-bold text-gray-500 animate-pulse">Loading Map...</p>
      </div>

      <l-map
        v-else
        ref="myMap"
        :zoom="7"
        :center="[23.685, 90.3563]"
        style="height: 100%; width: 100%"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <l-geo-json
          v-if="divisionBoundaries"
          :geojson="divisionBoundaries"
          :options="borderOptions"
        />

        <l-marker
          v-for="(feature, index) in filteredFeatures"
          :key="'cap-' + (feature.properties.adm3_pcode || index)"
          :lat-lng="[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]"
          :icon="createDynamicIcon(feature)"
          @popupopen="elevateMarker($event)"
          @popupclose="flattenMarker($event)"
        >
          <l-tooltip :options="{ direction: 'top', offset: [0, -10] }">
            <span class="font-bold">{{ feature.properties.name }}</span>
          </l-tooltip>

          <l-popup>
            <div class="p-1">
              <h3 class="font-bold text-blue-700 text-lg border-b pb-1 mb-2">
                {{ feature.properties.name }}
              </h3>
              <div class="space-y-1 text-xs text-gray-600">
                <p><b>Division:</b> {{ feature.properties.adm1_name }}</p>
                <p><b>Adm Level:</b> {{ feature.properties.adm_p_lvl }}</p>
              </div>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LGeoJson,
  LPopup,
} from "vue2-leaflet";

export default {
  components: { LMap, LTileLayer, LMarker, LTooltip, LGeoJson, LPopup },
  data() {
    return {
      capitalsData: null,
      divisionBoundaries: null,
      loading: true,
      selectedLevel: "all",
      selectedDivision: "all",
      divisions: [
        "Dhaka",
        "Barishal",
        "Rangpur",
        "Chattogram",
        "Rajshahi",
        "Khulna",
        "Sylhet",
        "Mymensingh",
      ],
      borderOptions: {
        style: () => ({
          color: "#3b82f6",
          fillColor: "#93c5fd",
          weight: 2,
          fillOpacity: 0.1,
          className: "base-border",
        }),
        onEachFeature: (feature, layer) => {
          layer.on("click", (e) => {
            document
              .querySelectorAll(".animate-border")
              .forEach((el) => el.classList.remove("animate-border"));
            const path = e.target.getElement();
            if (path) path.classList.add("animate-border");
            // Zoom/Focus removed as per request
          });
        },
      },
    };
  },
  computed: {
    filteredFeatures() {
      if (!this.capitalsData) return [];
      return this.capitalsData.features.filter((f) => {
        const lvlMatch =
          this.selectedLevel === "all" ||
          f.properties.adm_p_lvl.toString() === this.selectedLevel;
        const divMatch =
          this.selectedDivision === "all" ||
          f.properties.adm1_name === this.selectedDivision;
        return lvlMatch && divMatch;
      });
    },
  },
  methods: {
    // 3D EFFECT: Elevate the marker visually
    elevateMarker(event) {
      const marker = event.target;
      const iconElement = marker.getElement();

      // Increase Z-Index to top
      marker.setZIndexOffset(2000);

      // Apply 3D CSS effect
      if (iconElement) {
        iconElement.classList.add("marker-3d-active");
      }
    },
    // 3D EFFECT: Flatten back to normal
    flattenMarker(event) {
      const marker = event.target;
      const iconElement = marker.getElement();

      marker.setZIndexOffset(0);

      if (iconElement) {
        iconElement.classList.remove("marker-3d-active");
      }
    },
    createDynamicIcon(feature) {
      const isDhaka = feature.properties.name === "Dhaka";
      const colorClass = isDhaka ? "text-red-600" : "text-blue-500";
      const sizeClass = isDhaka ? "text-5xl" : "text-3xl";

      return L.divIcon({
        html: `<i class="bi bi-geo-alt-fill ${colorClass} ${sizeClass} marker-3d-base"></i>`,
        className: "custom-div-icon",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });
    },
  },
  async mounted() {
    try {
      const [capRes, borderRes] = await Promise.all([
        fetch("/bgd_admincapitals.json"),
        fetch("/bangladesh_boundaries.json"),
      ]);
      if (capRes.ok) this.capitalsData = Object.freeze(await capRes.json());
      if (borderRes.ok)
        this.divisionBoundaries = Object.freeze(await borderRes.json());
      this.loading = false;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
/* 1. ANIMATED BORDER (Remains as requested) */
.base-border {
  transition: all 0.5s ease;
}
.animate-border {
  stroke: #ef4444 !important;
  stroke-width: 5px !important;
  stroke-dasharray: 10;
  animation: border-crawl 2s infinite linear;
}
@keyframes border-crawl {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* 2. 3D MARKER EFFECT */
.marker-3d-base {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
}

/* This triggers when LPopup is opened */
.marker-3d-active {
  transform: scale(1.4) translateY(-10px) rotateX(10deg);
  filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.4)) !important;
  z-index: 2000 !important;
}

.custom-div-icon {
  background: none !important;
  border: none !important;
}

/* UI Adjustments */
.leaflet-popup-content-wrapper {
  border-bottom: 4px solid #3b82f6;
  border-radius: 12px;
}
</style>
