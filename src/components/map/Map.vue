<template>
  <div style="height: 100vh; width: 100%">
    <!-- <l-map :zoom="zoom" :center="center" :options="{ scrollWheelZoom: true }">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        :attribution="attribution"
      />

      <l-polygon :lat-lngs="bounds" color="red" fill-color="yellow" />

      <l-polygon
        v-for="(shape, index) in shapes"
        :key="'shape-' + index"
        :lat-lngs="shape.coordinates"
        :color="hoveredPolygon === index ? 'red' : shape.color"
        :fill-color="shape.color"
        :weight="2"
        @mouseover="hoveredPolygon = index"
        @mouseleave="hoveredPolygon = null"
      >
        <l-tooltip>{{ shape.name }}</l-tooltip>
        <l-popup>
          <div>
            <strong>{{ shape.name }}</strong
            ><br />
            {{ shape.details }}
          </div>
        </l-popup>
      </l-polygon>

      <l-marker
        v-for="(marker, index) in markers"
        :key="'marker-' + index"
        :lat-lng="marker.geocode"
        :icon="customIcon"
      >
        <l-popup>{{ marker.popUp }}</l-popup>
      </l-marker>
    </l-map> -->
    <div></div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolygon,
  LPopup,
  LTooltip,
} from "vue2-leaflet";

// Import your data
import markers from "@/Marks";
import bounds from "@/bounds";
import shapes from "@/shapes";
// import bdCapitals from "@/bgd_admincapitals.json";

export default {
  components: { LMap, LTileLayer, LMarker, LPolygon, LPopup, LTooltip },
  data() {
    return {
      zoom: 16,
      center: [23.83231860424927, 90.41678760385615],
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      hoveredPolygon: null,
      bounds: bounds,
      shapes: shapes,
      markers: markers,
      customIcon: L.icon({
        iconUrl: require("@/assets/logo.png"),
        iconSize: [12, 12],
      }),
    };
  },
};
</script>
