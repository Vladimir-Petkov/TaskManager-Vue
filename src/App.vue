<template>
  <div>
    <Header />
    <notifications group="app" />
    <notifications group="auth" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

export default {
  name: "App",
  data: function() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html {
  background-image: url("https://artbyrice.com/wp-content/uploads/2018/08/black-background-wood-i-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg");
  font-family: "Nunito", sans-serif;
}

.error {
  color: red;
  font-size: 1.10em;
  padding: 5px;
}

</style>
