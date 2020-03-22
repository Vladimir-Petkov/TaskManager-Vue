<template>
  <div id="app">
    <Navigation />
    <Home />
    <!-- <login /> -->
    <!-- <Create /> -->
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue';
// import Create from './components/Create.vue';
import Navigation from './components/core/Navigation.vue';
import Footer from './components/core/Footer.vue';
// import Login from './components/core/shared/Login.vue';

export default {
  name: 'App',
  data: function() {
    return {

    }
  },
  components: {
    Home,
    // Create,
    Navigation,
    Footer,
    // Login
  }
}
</script>

<style>
body {
  background-image: url('https://artbyrice.com/wp-content/uploads/2018/08/black-background-wood-i-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg');

  font-family: 'Nunito', sans-serif;
}
</style>
