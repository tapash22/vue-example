<template>
  <div id="app">
    <Navigation />
    <HeaderView />
    <SubNavigation />

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue';
import Navigation from './components/content/Navigation.vue';
import HeaderView from './components/content/HeaderView.vue';
import SubNavigation from './components/content/SubNavigation.vue';

export default {
  components:{
    Navigation,
    HeaderView,
    SubNavigation
  }
}
</script>

<style scoped>

</style>
