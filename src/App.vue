<template>
  <div id="app">
    <Navigation />
    <!-- <Home /> -->
    <!-- <Create /> -->
    <Footer />
    <login />
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Create from './components/Create.vue';
import Navigation from './components/core/Navigation.vue';
import Footer from './components/core/Footer.vue';
import Login from './components/core/shared/Login.vue';

export default {
  name: 'App',
  data: function() {
    return {

    }
  },
  components: {
    // Home,
    // Create,
    Navigation,
    Footer,
    Login
  }
}
</script>

<style>
* {
  background-image: url('https://cdn.hipwallpaper.com/i/20/0/qQXIOT.png');
  background-color: #cccccc;
}
</style>
