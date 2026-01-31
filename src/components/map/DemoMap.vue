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
          class="border-2 border-gray-100 p-2 rounded-lg bg-gray-50 focus:border-blue-400 outline-none transition-all"
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
          class="border-2 border-gray-100 p-2 rounded-lg bg-gray-50 focus:border-blue-400 outline-none transition-all"
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
        {{ filteredFeatures.length }} Locations Found
      </div>
    </div>

    <div class="flex-grow relative">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-[2000] flex flex-col items-center justify-center bg-white/90"
      >
        <div
          class="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"
        ></div>
        <p class="font-bold text-gray-500">Processing Map Data...</p>
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
          @popupopen="bringMarkerToFront($event)"
          @popupclose="resetMarkerZIndex($event)"
        >
          <l-tooltip :options="{ direction: 'top', offset: [0, -20] }">
            <span class="font-bold">{{ feature.properties.name }}</span>
          </l-tooltip>

          <l-popup>
            <div class="p-1 min-w-[150px]">
              <h3 class="font-bold text-blue-700 text-lg border-b pb-1 mb-2">
                {{ feature.properties.name }}
              </h3>
              <div class="space-y-1 text-xs text-gray-600">
                <p><b>Division:</b> {{ feature.properties.adm1_name }}</p>
                <p><b>Adm Level:</b> {{ feature.properties.adm_p_lvl }}</p>
                <p>
                  <b>P-Code:</b> {{ feature.properties.adm3_pcode || "N/A" }}
                </p>
              </div>
              <button
                @click="zoomTo(feature.geometry.coordinates)"
                class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-1.5 rounded transition-colors"
              >
                Focus Location
              </button>
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
  name: "BangladeshMap",
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
        style: (feature) => ({
          color: "#3b82f6", // Blue-500
          fillColor: "#93c5fd", // Blue-300
          weight: 2,
          fillOpacity: 0.15,
          className: "base-border",
        }),
        onEachFeature: (feature, layer) => {
          layer.on("click", (e) => {
            // Remove animation from previous clicked division
            document
              .querySelectorAll(".animate-border")
              .forEach((el) => el.classList.remove("animate-border"));

            // Add animation to this one
            const path = e.target.getElement();
            if (path) path.classList.add("animate-border");

            // Zoom to division
            this.$refs.myMap.mapObject.fitBounds(e.target.getBounds(), {
              padding: [20, 20],
            });
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
    // --- Z-INDEX MANAGEMENT ---
    bringMarkerToFront(event) {
      // Offset by 1000 ensures it stays above other markers (which usually have z-indices < 1000)
      event.target.setZIndexOffset(1000);
    },
    resetMarkerZIndex(event) {
      // Setting to 0 returns it to its natural latitude-based z-index
      event.target.setZIndexOffset(0);
    },

    zoomTo(coords) {
      this.$refs.myMap.mapObject.flyTo([coords[1], coords[0]], 13, {
        animate: true,
        duration: 1.5,
      });
    },

    createDynamicIcon(feature) {
      const isDhaka = feature.properties.name === "Dhaka";
      const iconClass = isDhaka
        ? "text-red-600 text-4xl"
        : "text-blue-500 text-2xl";
      return L.divIcon({
        html: `<i class="bi bi-geo-alt-fill ${iconClass} drop-shadow-md marker-transition"></i>`,
        className: "custom-div-icon",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
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
      console.error("Map Load Error:", e);
    }
  },
};
</script>

<style>
/* 1. Base Boundary Styles */
.base-border {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-border {
  stroke: #ef4444 !important;
  stroke-width: 4px !important;
  stroke-dasharray: 8;
  fill-opacity: 0.3 !important;
  fill: #fee2e2 !important;
  animation: border-crawl 3s infinite linear;
}

@keyframes border-crawl {
  from {
    stroke-dashoffset: 64;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* 2. Marker Customization */
.custom-div-icon {
  background: none !important;
  border: none !important;
}

.marker-transition {
  transition: transform 0.2s ease-out, color 0.3s ease;
}

.marker-transition:hover {
  transform: scale(1.2) translateY(-5px);
}

/* 3. Popup UI Cleanups */
.leaflet-popup-content-wrapper {
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.leaflet-popup-tip {
  background: white;
}

.loading-overlay {
  backdrop-filter: blur(2px);
}
</style>
