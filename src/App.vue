<template>
  <div id="app">
    <Navigation />
    <!-- <HeaderView />
    <SubNavigation /> -->

    <div class="main">
      <router-view />
    </div>
<Footer />
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue';
import Navigation from './components/content/Navigation.vue';
import HeaderView from './components/content/HeaderView.vue';
import SubNavigation from './components/content/SubNavigation.vue';
import Footer from './components/content/Footer.vue';
// import SimpleMap from '@/components/SimpleMap'

export default {
  components:{
    Navigation,
    HeaderView,
    SubNavigation,
    Footer,
    // SimpleMap
  },

  // data(){
  //   return{
  //     map: null,
  //     data: null,
  //   }
  // },
  // mounted() {
  //   this.map = new mapboxgl.Map({
  //     container: this.$refs.map,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [-74.006, 40.7128], 
  //     zoom: 10,
  //   });
  // },

  // methods: {
  //   async fetchData() {
  //     try {

  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  //       this.data = response.data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   },
  // },



}
</script>

<style scoped>
.map {
  height: 400px;
}
</style>


