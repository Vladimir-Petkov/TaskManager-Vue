<template>
  <div>
    <Navigation />
    <Home />
    <!-- <login /> -->
    <!-- <Register /> -->
    <!-- <Create /> -->
    <!-- <Edit /> -->
    <!-- <Delete /> -->
    <!-- <Profile /> -->
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue';
// import Create from './components/core/Create.vue';
import Navigation from "./components/core/Navigation.vue";
import Footer from "./components/core/Footer.vue";
// import Login from "./components/core/shared/Login.vue";
// import Register from './components/core/shared/Register.vue';
// import Edit from './components/core/Edit.vue';
// import Delete from './components/core/Delete.vue';
// import Profile from './components/core/shared/Profile.vue';

export default {
  name: "App",
  data: function() {
    return {};
  },
  components: {
    Home,
    // Create,
    Navigation,
    Footer,
    // Login,
    // Register,
    // Edit,
    // Delete,
    // Profile,
  }
};
</script>

<style>
html {
  background-image: url("https://artbyrice.com/wp-content/uploads/2018/08/black-background-wood-i-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg");
  font-family: "Nunito", sans-serif;
}

p.error {
  text-align: center;
  background-color: red;
  padding: 8px;
  font-weight: bold;
  margin: 5px;
  border: 5px;
  border-radius: 10px;
}
</style>
