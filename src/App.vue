<template>
  <div id="app">
    <Navigation />
    <HeaderView />
    <SubNavigation />

    <div class="main">
      <router-view/>
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

export default {
  components:{
    Navigation,
    HeaderView,
    SubNavigation,
    Footer
  }
}
</script>

<style scoped>

</style>
